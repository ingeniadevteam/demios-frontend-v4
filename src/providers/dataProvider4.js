/*
 * https://raw.githubusercontent.com/garridorafa/ra-strapi-v4-rest/master/index.ts
*/

import { stringify } from "query-string";
import { fetchUtils } from "ra-core";
import qs from "qs";

const POPULATE_ALL = "populate=*";

const OPERATORS = {
  _gte: "$gte",
  _lte: "$lte",
  _neq: "$ne",
  _q: "$contains",
};

const diffObject = (obj1, obj2) => {
  const result = {};
  for (var k in obj1) {
    if (obj2[k] !== obj1[k]) {
      result[k] = obj1[k];
    }
  }
  return result;
}

/**
 * Turn Strapi arrays to React Admin arrays.
 * @param {Array} array Strapi resources / components arrays
 * @returns {Array} React Admin array of objects
 */
const strapiArrayToRa = (array) => {
    if (!array) return [];

    return array[0]?.attributes
        ? array.map((object) => strapiObjectToRa(object))
        : array.map((object) => strapiAttributesToRa(object));
}

/**
 * Turn Strapi objects to React Admin objects.
 * @param {Object} object Strapi object
 * @returns {Object} React Admin objects
 */
const strapiObjectToRa = (object) => {
  if (!object.attributes) {
    return {
      id: object.id,
      ...strapiAttributesToRa(object)
    };
  }
  return {
    id: object.id,
    ...strapiAttributesToRa(object.attributes),
  }
};

/**
 * Check the attribute type and turn in a React Admin
 * object property.
 * @param {Object} attributes Strapi data attributes
 * @returns {Object} React Admin object
 */
const strapiAttributesToRa = (attributes = {}) => {
  let newAttributes = {};
  Object.keys(attributes).forEach((key) => {
    newAttributes[key] = attributes[key];
    if (Array.isArray(attributes[key])) {
      newAttributes[key] = strapiArrayToRa(attributes[key]);
    }
    if (Array.isArray(attributes[key]?.data)) {
      newAttributes[key] = attributes[key].data.map((object) => object.id);
    }
    if (attributes[key]?.data?.id && !attributes[key]?.data?.attributes?.mime) {
      newAttributes[key] = attributes[key].data.id;
    }
    if (attributes[key]?.data === null) {
      newAttributes[key] = "";
    }
    if (attributes[key]?.id) {
      newAttributes[key] = strapiAttributesToRa(newAttributes[key]);
    }
    if (attributes[key]?.data?.attributes?.mime) {
      newAttributes[key] = strapiObjectToRa(newAttributes[key].data);
    }
  });

  return newAttributes;
};

/**
 * Turn empty string properties values in null.
 * @param {Object} object React Admin data object
 * @returns {Object} Strapi object
 */
const raEmptyAttributesToStrapi = (object) => {
  let newObject = {};
  Object.keys(object).forEach((key) => {
    newObject[key] = object[key] === "" ? null : object[key];
  });

  return newObject;
};

/**
 * Turn React Admin filters in Strapi equivalent query object.
 * @param {Object} raFilter React Admin filters
 * @returns {Object} Equivalent filters to add in query string
 */
const raFilterToStrapi = (raFilter) => {
  if (!raFilter) return null;
  let filters = {};

  Object.keys(raFilter).forEach((key) => {
    if (typeof raFilter[key] === "object") {
      return (filters[key] = raFilterToStrapi(raFilter[key]));
    }

    // @ts-ignore
    const operator = OPERATORS[key.slice(-4)];
    if (key.slice(-2) === "_q") {
      const field = key.slice(0, -2);
      filters[field] = {
        $containsi: raFilter[key],
      };
    } else if (key === "id") {
      filters.id = {
        $in: raFilter.id,
      };
    } else if (operator) {
      const field = key.slice(0, -4);
      filters[field] = {
        [operator]: raFilter[key],
      };
    } else {
      filters[key] = {
        $eq: raFilter[key],
      };
    }
  });

  return filters;
};

/**
 * Maps react-admin queries to a Strapi V4 REST API
 *
 * @example
 *
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 * import { strapiRestProvider } from 'ra-strapi-v4-rest';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={strapiRestProvider('http://path.to.my.api/')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */

export const strapiRestProvider = (
  apiUrl,
  httpClient = fetchUtils.fetchJson
) => ({
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: [`${field}:${order}`],
      pagination: {
        page,
        pageSize: perPage,
      },
      filters: raFilterToStrapi(params.filter),
    };

    const queryStringify = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const url = `${apiUrl}/${resource}?${POPULATE_ALL}&${queryStringify}`;

    return httpClient(url, {}).then(({ headers, json }) => {
        // MODIFIED
        if (json.roles) {
            return ({
                data: strapiArrayToRa(json.roles),
                total: json.roles.length,
            });
        }
        if (json.data) {
            return ({
                data: strapiArrayToRa(json.data),
                total: json.meta.pagination.total,
            });
        }
        return ({
            data: strapiArrayToRa(json),
            total: json.length,
        });
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}?${POPULATE_ALL}`).then(
      ({ json }) => {
        if (json.data) {
          return ({
            data: strapiObjectToRa(json.data),
          });
        }
        return ({
          data: strapiObjectToRa(json)
        });
      }
    ),

  getMany: (resource, params) => {
    const query = {
      filters: {
        id: {
          $in: params.ids.map((f) => f.id),
        },
      },
    };
    const queryStringify = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const url = `${apiUrl}/${resource}?${queryStringify}`;

    return httpClient(url, {}).then(({ headers, json }) => {
        // MODIFIED
        if (json.roles) {
            return ({
                data: strapiArrayToRa(json.roles),
                total: json.roles.length,
            });
        }
        if (json.data) {
            return ({
                data: strapiArrayToRa(json.data),
                total: json.meta.pagination.total,
            });
        }
        return ({
            data: strapiArrayToRa(json),
            total: json.length,
        });
    });
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${POPULATE_ALL}&${stringify(query)}`;

    return httpClient(url, {}).then(({ headers, json }) => {
        // MODIFIED
        if (json.data) {
            return ({
                data: strapiArrayToRa(json.data),
                total: json.meta.pagination.total,
            });
        }
        return ({
            data: strapiArrayToRa(json),
            total: json.length,
        });
    });
  },

  update: (resource, params) => {
    const { id, ...rest } = params;

    // users is a "specia case..."
    if (resource === 'users') {
      rest.data = diffObject(rest.data, rest.previousData);
      rest.data.role = rest.data.role.id;
      rest.data = raEmptyAttributesToStrapi(rest.data)
      console.log(rest.data);
    }

    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: resource === 'users' ? 
        JSON.stringify(rest.data) :
        JSON.stringify({
          data: raEmptyAttributesToStrapi(rest.data),
          id: Number(id),
        }),
    }).then(({ json }) => {
        // MODIFIED
        if (json.data) {
          return ({ data: strapiObjectToRa(json.data) })
      }
      return ({ data: strapiObjectToRa(json) })
    });
  },

  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify({ data: params.data }),
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }) => json.data.id),
    })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify({ data: raEmptyAttributesToStrapi(params.data) }),
    }).then(({ json }) => ({ data: strapiObjectToRa(json.data) })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "text/plain",
      }),
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "text/plain",
          }),
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }) => json.data.id),
    })),
});

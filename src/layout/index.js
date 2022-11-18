import * as React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import { strapiRestProvider } from "ra-strapi-v4-rest";
import passLessAuthProvider from '../providers/passLessAuthProvider';
import Cookies from "../helpers/Cookies";
import organizations from "../organizations";
import { i18nProvider } from '../providers/i18nProvider';

import URL from '../URL';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    try {
        const token = Cookies.getCookie('token');
        options.headers.set('Authorization', `Bearer ${token}`);
    } catch (error) {}
    
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = strapiRestProvider(URL, httpClient);


const Layout = () => (
    <Admin
        i18nProvider={i18nProvider}
        dataProvider={dataProvider}
        authProvider={passLessAuthProvider}
    >
        <Resource name="organizations" {...organizations} />
    </Admin>
);


export default Layout;
import * as React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import { strapiRestProvider } from "ra-strapi-v4-rest";
import authProvider from './authProvider';
import Cookies from "./helpers/Cookies";
import organizations from "./organizations";

import URL from './URL';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    try {
        // const { token } = JSON.parse(localStorage.getItem('token'));
        const token = Cookies.getCookie('token');
        options.headers.set('Authorization', `Bearer ${token}`);
    } catch (error) {}
    
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = strapiRestProvider(URL, httpClient);


const App = () => (
    <Admin dataProvider={dataProvider}  authProvider={authProvider}>
        <Resource name="organizations" {...organizations} />
    </Admin>
);

export default App;

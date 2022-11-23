import * as React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import passLessAuthProvider from '../providers/passLessAuthProvider';
import Cookies from "../helpers/Cookies";
import { strapiRestProvider } from "../providers/dataProvider4";
import { i18nProvider } from '../providers/i18nProvider';
import organizations from "../organizations";
import suppliers from '../suppliers';
import users from '../users';

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
        <Resource name="suppliers" {...suppliers} />
        <Resource name="users" {...users} />
    </Admin>
);


export default Layout;
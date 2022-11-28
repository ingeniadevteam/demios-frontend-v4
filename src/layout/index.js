import * as React from "react";
import { fetchUtils, Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from 'react-router';
import passLessAuthProvider from '../providers/passLessAuthProvider';
import Cookies from "../helpers/Cookies";
import { strapiRestProvider } from "../providers/dataProvider4";
import { i18nProvider } from '../providers/i18nProvider';
import { AppLayout } from './Layout';
import { lightTheme } from './themes';
import { Dashboard } from '../dashboard';
import Profile from "../profile/Profile";
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


const DemiosApp = ({context}) => {
    const role = Cookies.getCookie('role');
    !role && (document.location.href = '/login');
    const user = JSON.parse(Cookies.getCookie('user'));

    console.log(role);

    return (
        <Admin
            i18nProvider={i18nProvider}
            dataProvider={dataProvider}
            authProvider={passLessAuthProvider}
            layout={AppLayout}
            dashboard={Dashboard}
            theme={lightTheme}
        >
            {
                <CustomRoutes>
                    <Route path="/profile" element={<Profile />} />
                </CustomRoutes>
            }
            {
                role === 'manager' ? 
                <>
                    <Resource name="organizations" {...organizations} />
                    <Resource name="suppliers" {...suppliers} />
                    <Resource name="users" {...users} />
                </> :
                <></>
            }
            {
                role === 'employee' && user.supplierValidator ? 
                <>
                    <Resource name="suppliers" {...suppliers} />
                </> :
                <></>
            }

        </Admin>
    );
};


export default DemiosApp;

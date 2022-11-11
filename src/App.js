import * as React from "react";
import { Admin, Resource } from "react-admin";
import { strapiRestProvider } from "ra-strapi-v4-rest";

import organizations from "./organizations";

import URL from './URL';

const App = () => (
    <Admin dataProvider={strapiRestProvider(URL)}>
        <Resource name="organizations" {...organizations} />
    </Admin>
);

export default App;

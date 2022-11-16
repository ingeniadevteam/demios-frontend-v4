import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    DateInput,
} from 'react-admin';

const listFilters = [
    <DateInput source="createdAt_gte" alwaysOn />,
    <DateInput source="createdAt_lte" alwaysOn />,
];

const OrganizationList = () => {
    return (
        <List
            filters={listFilters}
            perPage={25}
            sort={{ field: 'createdAt', order: 'desc' }}
        >
            <Datagrid
            >
                <DateField source="createdAt" />
                <TextField source="name" />
            </Datagrid>
        </List>
    );
};

export default OrganizationList;

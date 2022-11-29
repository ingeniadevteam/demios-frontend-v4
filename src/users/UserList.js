import * as React from 'react';
import { useMediaQuery, Chip } from '@mui/material';
import {
    CreateButton,
    ExportButton,
    FilterButton,
    ListBase,
    SearchInput,
    Title,
    TopToolbar,
    useTranslate,
    useGetResourceLabel,
    Datagrid,
    FunctionField,
    TextField,
    ListToolbar,
    SelectInput,
    ReferenceInput,
    AutocompleteInput,
    DateField
} from 'react-admin';

// import OrganizationRefField from '../organizations/OrganizationRefField';

const UserList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('md'));
    const translate = useTranslate();
    return (
        <ListBase perPage={25} sort={{ field: 'createdAt', order: 'DESC' }}>
            <Title defaultTitle={getResourceLabel('users', 2)} />
            <ListToolbar
                filters={[
                    <SearchInput source="name_q" alwaysOn />,
                    <ReferenceInput
                        reference="users-permissions/roles"
                        source="role.id"  
                        label="resources.users.fields.role"
                    >
                        <AutocompleteInput
                            label="resources.users.fields.role"
                            optionText={choice => translate(`roles.${choice.type}`)}
                            fullWidth
                        />
                    </ReferenceInput>,
                    <ReferenceInput
                        reference="organizations"
                        source="organization.id"
                        label="resources.users.fields.organization"
                    >
                        <SelectInput
                            label="resources.users.fields.organization"
                            optionText="name"
                            fullWidth
                        />
                    </ReferenceInput>,
                    <QuickFilter
                        label="resources.users.fields.supplierValidator"
                        source="supplierValidator"
                        defaultValue={true}
                    />
                ]}
                actions={<ListActions isSmall={isSmall}/>}
            />
            <Datagrid
                rowClick="edit"
            >
                <DateField source="createdAt" />
                <TextField source="name" />
                <TextField source="email" />
                {/* <OrganizationRefField source="organization" /> */}
                <FunctionField
                    label="resources.users.fields.role"
                    render={record => translate(`roles.${record.role.type}`)}
                />
            </Datagrid>
        </ListBase>
    );
};

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ mb: 1 }} label={translate(label)} />;
};

const ListActions = ({ isSmall }) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export default UserList;

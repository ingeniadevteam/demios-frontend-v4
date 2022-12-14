import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import {
    CreateButton,
    ExportButton,
    FilterButton,
    FilterForm,
    FilterContext,
    ListBase,
    // NumberInput,
    // Pagination,
    // ReferenceInput,
    SearchInput,
    // SelectInput,
    // SortButton,
    Title,
    TopToolbar,
    // useTranslate,
    useGetResourceLabel,
    Datagrid,
    DateField,
    TextField
} from 'react-admin';

const OrganizationList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={25} sort={{ field: 'createdAt', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('organizations', 2)} />
            <FilterContext.Provider value={organizationFilters}>
                <ListActions isSmall={isSmall} />
                {isSmall && (
                    <Box m={1}>
                        <FilterForm />
                    </Box>
                )}
            </FilterContext.Provider>
            <Datagrid
                rowClick="edit"
            >
                <DateField source="createdAt" />
                <TextField source="name" />
                <TextField source="office" />
            </Datagrid>
        </ListBase>
    );
};

// const QuickFilter = ({ label }) => {
//     const translate = useTranslate();
//     return <Chip sx={{ mb: 1 }} label={translate(label)} />;
// };

export const organizationFilters = [
    <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export default OrganizationList;

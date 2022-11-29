import * as React from 'react';
import {
    // Datagrid,
    // DateField,
    Edit,
    // EditButton,
    FormTab,
    // Pagination,
    // ReferenceManyField,
    required,
    TabbedForm,
    // TextField,
    TextInput,
    useRecordContext,
    // useGetManyReference,
    // useTranslate,
    NumberInput
} from 'react-admin';

import { SuppliersEditDetails } from './tabs/SuppliersEditDetails';
import { InvoicesEditDetails } from './tabs/InvoicesEditDetails';
import { PurchasesEditDetails } from './tabs/PurchasesEditDetails';
import { TicketsEditDetails } from './tabs/TicketsEditDetails';
import { IssuesEditDetails } from './tabs/IssuesEditDetails';
import Organization from './Organization';

const OrganizationTitle = () => {
    const record = useRecordContext();
    return record ? <span>{record.name}</span> : null;
};

const OrganizationEdit = () => (
    <Edit title={<OrganizationTitle />}>
        <TabbedForm>
            <FormTab
                label="resources.organizations.tabs.details"
            >
                <Organization />
                <TextInput source="name" fullWidth validate={req} />
                <TextInput source="office" fullWidth validate={req} />
                <NumberInput source="nameNumber" validate={req} />
                <NumberInput source="officeNumber" validate={req} />
            </FormTab>

            <FormTab
                label="resources.organizations.tabs.suppliers"
                path="suppliers"
            >
                <SuppliersEditDetails />
            </FormTab>

            <FormTab
                label="resources.organizations.tabs.invoices"
                path="invoices"
            >
                <InvoicesEditDetails />
            </FormTab>

            <FormTab
                label="resources.organizations.tabs.purchases"
                path="purchases"
            >
                <PurchasesEditDetails />
            </FormTab>

            <FormTab
                label="resources.organizations.tabs.tickets"
                path="tickets"
            >
                <TicketsEditDetails />
            </FormTab>
                
            <FormTab
                label="resources.users.tabs.issues"
                path="issues"
            >
                <IssuesEditDetails />
            </FormTab>
        
        </TabbedForm>
    </Edit>
);

const req = [required()];

export default OrganizationEdit;

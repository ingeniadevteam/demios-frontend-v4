import * as React from 'react';
import {
    Edit,
    FormTab,
    required,
    TabbedForm,
    TextInput,
    useRecordContext,
    useTranslate,
    ReferenceInput,
    AutocompleteInput
} from 'react-admin';

import { SuppliersEditDetails } from './tabs/SuppliersEditDetails';
import { InvoicesEditDetails } from './tabs/InvoicesEditDetails';
import { PurchasesEditDetails } from './tabs/PurchasesEditDetails';
import { TicketsEditDetails } from './tabs/TicketsEditDetails';
import User from './User';

const UserTitle = () => {
    const record = useRecordContext();
    return record ? <span>{record.name}</span> : null;
};

const UserEdit = () => {
    const translate = useTranslate();

    return (
        <Edit title={<UserTitle />}>
            <TabbedForm>
                <FormTab
                    label="resources.users.tabs.details"
                    sx={{ maxWidth: '40em' }}
                >
                    <User />
                    <TextInput source="name" fullWidth validate={req} />
                    <TextInput source="email" fullWidth validate={req} />
                    <ReferenceInput
                        label="resources.users.fields.role"
                        reference="users-permissions/roles"
                        source="role.id"  
                    >
                        <AutocompleteInput
                            optionText={choice => translate(`roles.${choice.type}`)}
                        />
                    </ReferenceInput>
                </FormTab>

                <FormTab
                    label="resources.users.tabs.suppliers"
                    path="suppliers"
                    sx={{ maxWidth: '40em' }}
                >
                    <SuppliersEditDetails />
                </FormTab>

                <FormTab
                    label="resources.users.tabs.invoices"
                    path="invoices"
                    sx={{ maxWidth: '40em' }}
                >
                    <InvoicesEditDetails />
                </FormTab>

                <FormTab
                    label="resources.users.tabs.purchases"
                    path="purchases"
                >
                    <PurchasesEditDetails />
                </FormTab>

                <FormTab
                    label="resources.users.tabs.tickets"
                    path="tickets"
                >
                    <TicketsEditDetails />
                </FormTab>
            </TabbedForm>
        </Edit>
    )
};

const req = [required()];

export default UserEdit;

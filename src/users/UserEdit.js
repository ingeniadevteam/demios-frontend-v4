import * as React from 'react';
import { useParams } from "react-router-dom";
import {
    Edit,
    FormTab,
    required,
    TabbedForm,
    TextInput,
    useRecordContext,
    useTranslate,
    ReferenceInput,
    AutocompleteInput,
    SelectInput,
    useEditController
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
    const { id } = useParams();
    const { record, isLoading } = useEditController({ resource: 'users', id });
    if (isLoading) return null;
    return (
        <Edit title={<UserTitle />} redirect={false}>
            <TabbedForm record={record}>
                <FormTab
                    label="resources.users.tabs.details"
                    sx={{ maxWidth: '40em' }}
                >
                    <User />
                    <TextInput source="name" fullWidth validate={req} />
                    <TextInput source="email" fullWidth validate={req} />
                    {
                        !record.isSupplier &&
                        <>
                            <ReferenceInput
                                reference="users-permissions/roles"
                                source="role.id"  
                            >
                                <AutocompleteInput
                                    label="resources.users.fields.role"
                                    optionText={choice => translate(`roles.${choice.type}`)}
                                    validate={req}
                                    fullWidth
                                />
                            </ReferenceInput>
                            <ReferenceInput
                                reference="organizations"
                                source="organization.id"
                            >
                                <SelectInput
                                    label="resources.users.fields.organization"
                                    optionText="name"
                                    validate={req}
                                    fullWidth
                                />
                            </ReferenceInput>
                            <small>{translate('resources.users.help.ticketValidatorUserId')}</small>
                            <ReferenceInput
                                label="resources.users.fields.ticketValidatorUserId"
                                reference="users"
                                source="ticketValidatorUserId"
                                filter={{ ticketValidator: true }}
                            >
                                <AutocompleteInput
                                    optionText={choice => choice.name}
                                    fullWidth
                                />
                            </ReferenceInput>
                        </>
                    }
                </FormTab>

                {
                    !record.isSupplier &&
                    <FormTab
                        label="resources.users.tabs.suppliers"
                        path="suppliers"
                    >
                        <SuppliersEditDetails />
                    </FormTab>
                }

                {
                    !record.isSupplier &&
                    <FormTab
                        label="resources.users.tabs.invoices"
                        path="invoices"
                    >
                        <InvoicesEditDetails />
                    </FormTab>

                }

                {
                    !record.isSupplier &&
                    <FormTab
                        label="resources.users.tabs.purchases"
                        path="purchases"
                    >
                        <PurchasesEditDetails />
                    </FormTab>
                }

                {
                    !record.isSupplier &&
                    <FormTab
                        label="resources.users.tabs.tickets"
                        path="tickets"
                    >
                        <TicketsEditDetails />
                    </FormTab>
                }
            </TabbedForm>
        </Edit>
    )
};

const req = [required()];

export default UserEdit;

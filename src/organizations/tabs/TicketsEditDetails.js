import * as React from 'react';
import {
    useTranslate,
    BooleanInput,
    ReferenceArrayInput,
    AutocompleteArrayInput,
    ReferenceInput,
    AutocompleteInput
} from 'react-admin';
import { Grid } from '@mui/material';

export const TicketsEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.ticketPayerCompanyInvoice')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="ticketPayerCompanyInvoice"  
                        label="resources.organizations.fields.ticketPayerCompanyInvoice"
                        filter={{ ticketPayer: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.ticketPayerCompanyInvoice"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.ticketPayerOther')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="ticketPayerOther"  
                        label="resources.organizations.fields.ticketPayerOther"
                        filter={{ ticketPayer: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.ticketPayerOther"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.ticketRegistrarCompanyInvoice')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="ticketRegistrarCompanyInvoice"  
                        label="resources.organizations.fields.ticketRegistrarCompanyInvoice"
                        filter={{ ticketRegistrar: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.ticketRegistrarCompanyInvoice"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.ticketRegistrarOther')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="ticketRegistrarOther"  
                        label="resources.organizations.fields.ticketRegistrarOther"
                        filter={{ ticketRegistrar: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.ticketRegistrarOther"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.enableValidatorList')}</small>
                </Grid>
                <Grid item>
                    <BooleanInput
                        source="enableValidatorList"
                        label="resources.organizations.fields.enableValidatorList"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Grid item>
                    <small>{translate('resources.organizations.help.validators')}</small>
                </Grid>
                <Grid item>
                    <ReferenceArrayInput
                        label="resources.organizations.fields.validators"
                        reference="users"
                        source="validators"
                        filter={{ ticketValidator: true }}
                    >
                        <AutocompleteArrayInput
                            optionText={choice => choice.name}
                        />
                    </ReferenceArrayInput>
                </Grid>
            </Grid>
        </Grid>
    );
};

// const req = [required()];

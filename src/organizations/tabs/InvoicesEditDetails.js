import * as React from 'react';
import {
    ReferenceInput,
    AutocompleteInput,
    useTranslate
} from 'react-admin';
import { Grid } from '@mui/material';

export const InvoicesEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.organizations.help.invoicePayer')}</small>
                <ReferenceInput
                    reference="users"
                    source="invoicePayer"  
                    label="resources.organizations.fields.invoicePayer"
                    filter={{ invoicePayer: true }}
                >
                    <AutocompleteInput
                        label="resources.organizations.fields.invoicePayer"
                        optionText={choice => choice.name}
                        fullWidth
                    />
                </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.organizations.help.orderValidator')}</small>
                <ReferenceInput
                    reference="users"
                    source="orderValidator"  
                    label="resources.organizations.fields.orderValidator"
                    filter={{ orderValidator: true }}
                >
                    <AutocompleteInput
                        label="resources.organizations.fields.orderValidator"
                        optionText={choice => choice.name}
                        fullWidth
                    />
                </ReferenceInput>
            </Grid>
        </Grid>
    );
};

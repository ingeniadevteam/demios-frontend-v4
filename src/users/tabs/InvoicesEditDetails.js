import * as React from 'react';
import {
    BooleanInput,
    useTranslate
} from 'react-admin';
import { Grid } from '@mui/material';

export const InvoicesEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.invoiceValidator')}</small>
                <BooleanInput
                    source="invoiceValidator"
                    label="resources.users.fields.invoiceValidator"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.invoicePayer')}</small>
                <BooleanInput
                    source="invoicePayer"
                    label="resources.users.fields.invoicePayer"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.orderValidator')}</small>
                <BooleanInput
                    source="orderValidator"
                    label="resources.users.fields.orderValidator"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
};

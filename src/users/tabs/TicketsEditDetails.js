import * as React from 'react';
import {
    BooleanInput,
    useTranslate
} from 'react-admin';
import { Grid } from '@mui/material';

export const TicketsEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.ticketValidator')}</small>
                <BooleanInput
                    source="ticketValidator"
                    label="resources.users.fields.ticketValidator"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.ticketPayer')}</small>
                <BooleanInput
                    source="ticketPayer"
                    label="resources.users.fields.ticketPayer"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.ticketRegistrar')}</small>
                <BooleanInput
                    source="ticketRegistrar"
                    label="resources.users.fields.ticketRegistrar"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.ticketAdmin')}</small>
                <BooleanInput
                    source="ticketAdmin"
                    label="resources.users.fields.ticketAdmin"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
};
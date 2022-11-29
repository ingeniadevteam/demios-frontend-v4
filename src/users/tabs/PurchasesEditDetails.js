import * as React from 'react';
import {
    BooleanInput,
    useTranslate
} from 'react-admin';
import { Grid } from '@mui/material';

export const PurchasesEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.orgManager')}</small>
                <BooleanInput
                    source="orgManager"
                    label="resources.users.fields.orgManager"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.purchaseManager')}</small>
                <BooleanInput
                    source="purchaseManager"
                    label="resources.users.fields.purchaseManager"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.purchaseAdmonObra')}</small>
                <BooleanInput
                    source="purchaseAdmonObra"
                    label="resources.users.fields.purchaseAdmonObra"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <small>{translate('resources.users.help.foreman')}</small>
                <BooleanInput
                    source="foreman"
                    label="resources.users.fields.foreman"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
};

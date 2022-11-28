import * as React from 'react';
import {
    BooleanInput,
    useTranslate
} from 'react-admin';
import { Grid } from '@mui/material';

export const SuppliersEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={12}>
                <small>{translate('resources.users.help.supplierValidator')}</small>
                <BooleanInput
                    source="supplierValidator"
                    label="resources.users.fields.supplierValidator"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
};

import * as React from 'react';
import {
    BooleanInput
} from 'react-admin';
import { Grid } from '@mui/material';

export const SuppliersEditDetails = () => (
    <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={12}>
            <BooleanInput
                source="supplierValidator"
                label="resources.users.fields.supplierValidator"
                fullWidth
            />
        </Grid>
    </Grid>
);

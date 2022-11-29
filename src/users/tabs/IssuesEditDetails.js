import * as React from 'react';
import {
    BooleanInput,
    useTranslate
} from 'react-admin';
import { Grid } from '@mui/material';

export const IssuesEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={12}>
                <small>{translate('resources.users.help.issueManager')}</small>
                <BooleanInput
                    source="issueManager"
                    label="resources.users.fields.issueManager"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
};

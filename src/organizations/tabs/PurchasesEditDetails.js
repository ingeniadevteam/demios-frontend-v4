import * as React from 'react';
import {
    NumberInput,
    useTranslate,
    ReferenceInput,
    AutocompleteInput,
    ReferenceArrayInput,
    AutocompleteArrayInput
} from 'react-admin';
import { Grid } from '@mui/material';

export const PurchasesEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.purchaseLessThan')}</small>
                </Grid>
                <Grid item>
                    <NumberInput source="purchaseLessThan" />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.purchaseMoreThan')}</small>
                </Grid>
                <Grid item>
                    <NumberInput source="purchaseMoreThan" />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.orgManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="orgManager"  
                        label="resources.organizations.fields.orgManager"
                        filter={{ orgManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.orgManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.purchaseManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="purchaseManager"  
                        label="resources.organizations.fields.purchaseManager"
                        filter={{ purchaseManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.purchaseManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.orgAdmonsObra')}</small>
                </Grid>
                <Grid item>
                    <ReferenceArrayInput
                        label="resources.organizations.fields.orgAdmonsObra"
                        reference="users"
                        source="orgAdmonsObra"
                        filter={{ purchaseAdmonObra: true }}
                    >
                        <AutocompleteArrayInput
                            optionText={choice => choice.name}
                        />
                    </ReferenceArrayInput>
                </Grid>
            </Grid>
        </Grid>
    )
};

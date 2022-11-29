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

export const IssuesEditDetails = () => {
    const translate = useTranslate();
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.issueOrderManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="issueOrderManager"  
                        label="resources.organizations.fields.issueOrderManager"
                        filter={{ issueManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.issueOrderManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.issueInvoiceRejectedManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="issueInvoiceRejectedManager"  
                        label="resources.organizations.fields.issueInvoiceRejectedManager"
                        filter={{ issueManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.issueInvoiceRejectedManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.issuePaymetNotReceivedManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="issuePaymetNotReceivedManager"  
                        label="resources.organizations.fields.issuePaymetNotReceivedManager"
                        filter={{ issueManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.issuePaymetNotReceivedManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.issueTechnicalManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="issueTechnicalManager"  
                        label="resources.organizations.fields.issueTechnicalManager"
                        filter={{ issueManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.issueTechnicalManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item>
                    <small>{translate('resources.organizations.help.issueOtherManager')}</small>
                </Grid>
                <Grid item>
                    <ReferenceInput
                        reference="users"
                        source="issueOtherManager"  
                        label="resources.organizations.fields.issueOtherManager"
                        filter={{ issueManager: true }}
                    >
                        <AutocompleteInput
                            label="resources.organizations.fields.issueOtherManager"
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceInput>
                </Grid>
            </Grid>

        </Grid>
    );
};

// const req = [required()];

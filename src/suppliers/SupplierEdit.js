import * as React from 'react';
import {
    resolveBrowserLocale,
    EditBase,
    useTranslate,
    TextInput,
    SimpleForm,
    DateField,
    Labeled,
    SelectInput,
    ReferenceArrayInput,
    AutocompleteArrayInput,
    // AutocompleteInput,
    // ReferenceInput
    ReferenceField,
    TextField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField
} from 'react-admin';
import { Box, Grid, Stack, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// import ProductReferenceField from '../products/ProductReferenceField';
// import CustomerReferenceField from '../visitors/CustomerReferenceField';
// import StarRatingField from './StarRatingField';
import SupplierEditToolbar from './SupplierEditToolbar';

const SupplierEdit = ({ onCancel, record, ...props }) => {
    const translate = useTranslate();
    const locale = resolveBrowserLocale();

    return (
        <EditBase {...props}>
            <Box pt={5} width={{ xs: '100vW', sm: 400 }} mt={{ xs: 2, sm: 1 }}>
                <Stack direction="row" p={2}>
                    <Typography variant="h6" flex="1">
                        {/* {translate('resources.suppliers.detail')} */}
                    </Typography>
                    <IconButton onClick={onCancel} size="small">
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <SimpleForm
                    sx={{ pt: 0, pb: 0 }}
                    toolbar={<SupplierEditToolbar />}
                >
                    <Grid container rowSpacing={1} mb={1}>
                        <Grid item xs={6}>
                            <Labeled>
                                <DateField
                                    source="createdAt" 
                                    locales={locale}
                                />
                            </Labeled>
                        </Grid>
                        <Grid item xs={6}>
                            <Labeled>
                                <ReferenceField
                                    reference="users"
                                    source="approvedBy"
                                >
                                    <TextField source="name" />
                                </ReferenceField>
                            </Labeled>
                        </Grid>                        
                        <Grid item xs={6}>
                            <Labeled>
                                <ReferenceArrayField reference="users" source="users">
                                    <SingleFieldList>
                                        <ChipField source="name" />
                                    </SingleFieldList>
                                </ReferenceArrayField>
                            </Labeled>
                        </Grid>
                    </Grid>

                    <TextInput
                        source="business"
                        fullWidth
                    />
                    <TextInput
                        source="email"
                        fullWidth
                    />
                    <SelectInput
                        source="type"
                        fullWidth
                        choices={[
                            { id: 'supplier', name: translate('resources.suppliers.type.supplier') },
                            { id: 'creditor', name: translate('resources.suppliers.type.creditor') },
                        ]}
                    />
                    <TextInput
                        source="taxid"
                        fullWidth
                    />
                    <SelectInput
                        source="paymentMethod"
                        fullWidth
                        choices={[
                            { id: 'confirming', name: translate('pos.paymentMethods.confirming') },
                            { id: 'transfer', name: translate('pos.paymentMethods.transfer') },
                            { id: 'note', name: translate('pos.paymentMethods.note') },
                            { id: 'bill', name: translate('pos.paymentMethods.bill') },
                            { id: 'order', name: translate('pos.paymentMethods.order') },
                            { id: 'other', name: translate('pos.paymentMethods.other') },
                        ]}
                    />
                    <SelectInput
                        source="days"
                        fullWidth
                        choices={[
                            { id: 'D0', name: translate('pos.days.D0') },
                            { id: 'D15', name: translate('pos.days.D15') },
                            { id: 'D30', name: translate('pos.days.D30') },
                            { id: 'D45', name: translate('pos.days.D45') },
                            { id: 'D60', name: translate('pos.days.D60') },
                            { id: 'D90', name: translate('pos.days.D90') },
                            { id: 'D120', name: translate('pos.days.D120') },
                            { id: 'D150', name: translate('pos.days.D150') },
                            { id: 'D180', name: translate('pos.days.D180') },
                        ]}
                    />
                    <TextInput
                        source="bic"
                        fullWidth
                    />
                    {/* <ReferenceArrayInput
                        reference="users"
                        source="users"
                        filter={{ isSupplier: true }}
                    >
                        <AutocompleteArrayInput
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceArrayInput> */}
                    {/* <ReferenceArrayInput
                        label="resources.organizations.name"
                        reference="organizations"
                        source="organizations"
                    >
                        <AutocompleteArrayInput
                            optionText={choice => choice.name}
                            fullWidth
                        />
                    </ReferenceArrayInput> */}


                </SimpleForm>
            </Box>
        </EditBase>
    );
};

export default SupplierEdit;

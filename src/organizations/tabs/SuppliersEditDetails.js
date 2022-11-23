import * as React from 'react';
import {
    ReferenceArrayInput,
    AutocompleteArrayInput
} from 'react-admin';

export const SuppliersEditDetails = () => (
    <ReferenceArrayInput
        label="resources.organizations.fields.supplierValidators"
        reference="users"
        source="supplierValidators"
        filter={{ supplierValidator: true }}
    >
        <AutocompleteArrayInput
            optionText={choice => choice.name}
        />
    </ReferenceArrayInput>
);

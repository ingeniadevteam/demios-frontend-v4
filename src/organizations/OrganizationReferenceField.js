import * as React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const OrganizationReferenceField = (
    props
) => (
    <ReferenceField
        label="Organization"
        source="organization_id"
        reference="organizations"
        {...props}
    >
        <TextField source="name" />
    </ReferenceField>
);

OrganizationReferenceField.defaultProps = {
    source: 'organization_id',
};

export default OrganizationReferenceField;

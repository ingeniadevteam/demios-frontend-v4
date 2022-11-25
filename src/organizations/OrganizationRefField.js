import * as React from 'react';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { useRecordContext, ReferenceField } from 'react-admin';

const OrganizationRefField = () => {
    const record = useRecordContext();
    return record && record.organization ? (
        <ReferenceField source="organization.id" reference="organizations">
            <>
                {record.organization.name}
            </>
        </ReferenceField>
    ) : null;
};

OrganizationRefField.defaultProps = {
    source: 'organization.id',
    label: 'resources.users.fields.organization',
    addLabel: true,
};

export default OrganizationRefField;

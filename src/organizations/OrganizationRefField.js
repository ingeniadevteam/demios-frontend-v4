import * as React from 'react';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { useRecordContext } from 'react-admin';

const OrganizationRefField = () => {
    const record = useRecordContext();
    return record ? (
        <MuiLink
            component={Link}
            to={`/organizations/${record.id}`}
            underline="none"
        >
            {record.name}
        </MuiLink>
    ) : null;
};

OrganizationRefField.defaultProps = {
    source: 'id',
    label: 'Name',
};

export default OrganizationRefField;

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { useRecordContext } from 'react-admin';

const UserRefField = () => {
    const record = useRecordContext();
    return record ? (
        <MuiLink
            component={Link}
            to={`/users/${record.id}`}
            underline="none"
        >
            {record.name}
        </MuiLink>
    ) : null;
};

UserRefField.defaultProps = {
    source: 'id',
    label: 'Name',
};

export default UserRefField;

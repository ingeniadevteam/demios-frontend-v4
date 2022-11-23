import * as React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const UserReferenceField = (
    props
) => (
    <ReferenceField
        label="User"
        source="user_id"
        reference="users"
        {...props}
    >
        <TextField source="name" />
    </ReferenceField>
);

UserReferenceField.defaultProps = {
    source: 'user_id',
};

export default UserReferenceField;

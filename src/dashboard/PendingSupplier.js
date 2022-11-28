import * as React from 'react';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Box,
} from '@mui/material';
import { resolveBrowserLocale } from 'react-admin';
import { Link } from 'react-router-dom';

export const PendingSupplier = (props) => {
    const { supplier } = props;
    const locale = resolveBrowserLocale();

    return (
        <ListItem button component={Link} to={`/suppliers/${supplier.id}`}>
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText
                primary={`${supplier.business}`}
                secondary={`${supplier.name}`}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary'
                    }}
                >
                    {`${(new Date(supplier.updatedAt)).toLocaleDateString(locale)}`}
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

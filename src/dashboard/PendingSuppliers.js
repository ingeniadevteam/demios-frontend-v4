import * as React from 'react';
import { Card, CardHeader, List } from '@mui/material';
import { useTranslate } from 'react-admin';

import { PendingSupplier } from './PendingSupplier';


const PendingSuppliers = (props) => {
    const { suppliers = [] } = props;
    const translate = useTranslate();

    return (
        <Card sx={{ flex: 1 }}>
            <CardHeader title={translate('pos.dashboard.pending_suppliers')} />
            <List dense={true}>
                {suppliers.map(record => (
                    <PendingSupplier key={record.id} supplier={record} />
                ))}
            </List>
        </Card>
    );
};

export default PendingSuppliers;

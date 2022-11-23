import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { RecordContextProvider, useListContext } from 'react-admin';

import { SupplierItem } from './SupplierItem';

const SupplierListMobile = () => {
    const { data, isLoading, total } = useListContext();
    if (isLoading || Number(total) === 0) {
        return null;
    }
    return (
        <List sx={{ width: '100vw' }}>
            {data.map(supplier => (
                <RecordContextProvider value={supplier} key={supplier.id}>
                    <SupplierItem />
                </RecordContextProvider>
            ))}
        </List>
    );
};

SupplierListMobile.propTypes = {
    data: PropTypes.any,
    hasBulkActions: PropTypes.bool.isRequired,
    ids: PropTypes.array,
    onToggleItem: PropTypes.func,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

SupplierListMobile.defaultProps = {
    hasBulkActions: false,
    selectedIds: [],
};

export default SupplierListMobile;

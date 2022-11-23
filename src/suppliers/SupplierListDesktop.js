import * as React from 'react';
import {
    Datagrid,
    DateField,
    TextField,
    BulkDeleteButton,
    FunctionField,
    useTranslate
} from 'react-admin';

// import ProductReferenceField from '../products/ProductReferenceField';
// import CustomerReferenceField from '../visitors/CustomerReferenceField';
// import StarRatingField from './StarRatingField';
import rowStyle from './rowStyle';

import BulkAcceptButton from './BulkAcceptButton';
import BulkRejectButton from './BulkRejectButton';

const SuppliersBulkActionButtons = () => (
    <>
        <BulkAcceptButton />
        <BulkRejectButton />
        <BulkDeleteButton />
    </>
);


const SupplierListDesktop = ({ selectedRow }) => {
    const translate = useTranslate();
    return (
        <Datagrid
            rowClick="edit"
            rowStyle={rowStyle(selectedRow)}
            optimized
            bulkActionButtons={<SuppliersBulkActionButtons />}
            sx={{
                '& .RaDatagrid-thead': {
                    borderLeftColor: 'transparent',
                    borderLeftWidth: 5,
                    borderLeftStyle: 'solid',
                },
                '& .column-comment': {
                    maxWidth: '18em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                },
            }}
        >
            <DateField source="createdAt" />
            {/* <CustomerReferenceField link={false} /> */}
            {/* <ProductReferenceField link={false} /> */}
            {/* <StarRatingField size="small" /> */}
            <TextField source="business" />
            <FunctionField source="status" render={record => translate(`resources.suppliers.status.${record.status}`)} />
        </Datagrid>
    )
};

export default SupplierListDesktop;

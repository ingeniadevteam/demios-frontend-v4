import * as React from 'react';
import ThumbDown from '@mui/icons-material/ThumbDown';

import {
    Button,
    useUpdateMany,
    useNotify,
    useUnselectAll,
    useListContext,
} from 'react-admin';

const noSelection = [];

const BulkRejectButton = () => {
    const { selectedIds = noSelection } = useListContext();
    const notify = useNotify();
    const unselectAll = useUnselectAll('suppliers');

    const [updateMany, { isLoading }] = useUpdateMany(
        'suppliers',
        { ids: selectedIds, data: { status: 'rejected' } },
        {
            mutationMode: 'undoable',
            onSuccess: () => {
                notify('resources.suppliers.notification.approved_success', {
                    type: 'info',
                    undoable: true,
                });
                unselectAll();
            },
            onError: () => {
                notify('resources.suppliers.notification.approved_error', {
                    type: 'warning',
                });
            },
        }
    );

    return (
        <Button
            label="resources.suppliers.action.reject"
            onClick={() => updateMany()}
            disabled={isLoading}
        >
            <ThumbDown />
        </Button>
    );
};

export default BulkRejectButton;

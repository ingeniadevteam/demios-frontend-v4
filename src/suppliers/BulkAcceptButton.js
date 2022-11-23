import * as React from 'react';
import ThumbUp from '@mui/icons-material/ThumbUp';

import {
    Button,
    useUpdateMany,
    useNotify,
    useUnselectAll,
    useListContext,
} from 'react-admin';

const noSelection = [];

const BulkAcceptButton = () => {
    const { selectedIds = noSelection } = useListContext();
    const notify = useNotify();
    const unselectAll = useUnselectAll('suppliers');

    const [updateMany, { isLoading }] = useUpdateMany(
        'suppliers',
        { ids: selectedIds, data: { status: 'accepted' } },
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
            label="resources.suppliers.action.accept"
            onClick={() => updateMany()}
            disabled={isLoading}
        >
            <ThumbUp />
        </Button>
    );
};

export default BulkAcceptButton;

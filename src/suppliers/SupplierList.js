import * as React from 'react';
import { useCallback } from 'react';
import { List } from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery } from '@mui/material';

import SupplierListMobile from './SupplierListMobile';
import SupplierListDesktop from './SupplierListDesktop';
import supplierFilters from './supplierFilters';
import SupplierEdit from './SupplierEdit';

const SupplierList = () => {
    const isXSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    );
    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        navigate('/suppliers');
    }, [navigate]);

    const match = matchPath('/suppliers/:id', location.pathname);

    return (
        <Box display="flex">
            <List
                sx={{
                    flexGrow: 1,
                    transition: (theme) =>
                        theme.transitions.create(['all'], {
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    marginRight: !!match ? '400px' : 0,
                }}
                filters={supplierFilters}
                perPage={25}
                sort={{ field: 'createdAt', order: 'DESC' }}
            >
                {isXSmall ? (
                    <SupplierListMobile />
                ) : (
                    <SupplierListDesktop
                        selectedRow={
                            !!match
                                ? parseInt((match).params.id, 10)
                                : undefined
                        }
                    />
                )}
            </List>
            <Drawer
                variant="persistent"
                open={!!match}
                anchor="right"
                onClose={handleClose}
                sx={{ zIndex: 100 }}
            >
                {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                {!!match && (
                    <SupplierEdit
                        id={(match).params.id}
                        onCancel={handleClose}
                    />
                )}
            </Drawer>
        </Box>
    );
};

export default SupplierList;

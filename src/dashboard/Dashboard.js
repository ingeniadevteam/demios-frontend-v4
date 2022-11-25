import React, { useEffect, useCallback, useState } from 'react';
// import { useGetList } from 'react-admin';
import { useMediaQuery } from '@mui/material';
// import { subDays, startOfDay } from 'date-fns';
import { useDataProvider } from 'react-admin';

import Welcome from './Welcome';
import PendingSuppliers from './PendingSuppliers';
// import MonthlyRevenue from './MonthlyRevenue';
// import NbNewOrders from './NbNewOrders';
// import PendingReviews from './PendingReviews';
// import NewCustomers from './NewCustomers';
// import OrderChart from './OrderChart';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {
    const dataProvider = useDataProvider();
    const [pendingSuppliers, setPendingSuppliers] = useState();
    const [nbPendingSuppliers, setNbPendingSuppliers] = useState();
    const [loading, setLoading] = useState();

    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('lg')
    );

    const fetchSuppliers = useCallback(async () => {
        setLoading(true);
        const { data: suppliers } = await dataProvider.getList('suppliers', {
            filter: { status: 'pending' },
            sort: { field: 'createdAt', order: 'DESC' },
            pagination: { perPage: 9999 },
        });
        setNbPendingSuppliers(suppliers.reduce(nb => ++nb, 0));
        setPendingSuppliers(suppliers.slice(0, Math.min(10, suppliers.length)));
        setLoading(false);
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps
      
    useEffect(() => {
        if (!pendingSuppliers && !loading) {
            fetchSuppliers();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return isXSmall ? (
        <div>
            <div style={styles.flexColumn}>
                <Welcome />
                {/* <MonthlyRevenue value={revenue} /> */}
                <VerticalSpacer />
                {/* <NbNewOrders value={nbNewOrders} /> */}
                <VerticalSpacer />
                <PendingSuppliers suppliers={pendingSuppliers} nb={nbPendingSuppliers} />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn}>
            <div style={styles.singleCol}>
                <Welcome />
            </div>
            <div style={styles.flex}>
                {/* <MonthlyRevenue value={revenue} /> */}
                <Spacer />
                {/* <NbNewOrders value={nbNewOrders} /> */}
            </div>
            <div style={styles.singleCol}>
                {/* <OrderChart orders={recentOrders} /> */}
            </div>
            <div style={styles.singleCol}>
                <PendingSuppliers suppliers={pendingSuppliers} nb={nbPendingSuppliers} />
            </div>
        </div>
    ) : (
        <>
            <Welcome />
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        {/* <MonthlyRevenue value={revenue} /> */}
                        <Spacer />
                        {/* <NbNewOrders value={nbNewOrders} /> */}
                    </div>
                    <div style={styles.singleCol}>
                        <PendingSuppliers suppliers={pendingSuppliers} nb={nbPendingSuppliers} />
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        {/* <PendingReviews /> */}
                        <Spacer />
                        {/* <NewCustomers /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

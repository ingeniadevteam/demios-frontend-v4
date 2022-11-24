import * as React from 'react';
import { Layout } from 'react-admin';

import AppBar from './AppBar';
import Menu from './Menu';

export const AppLayout = (props) => <Layout {...props} appBar={AppBar} menu={Menu} />;

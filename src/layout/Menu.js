import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    useSidebarState,
} from 'react-admin';

import organizations from '../organizations';
import suppliers from '../suppliers';
import users from '../users';
import Cookies from "../helpers/Cookies";
// import products from '../products';
// import categories from '../categories';
// import reviews from '../reviews';
import SubMenu from './SubMenu';


const Menu = ({ dense = false }) => {
    const role = Cookies.getCookie('role');
    const user = JSON.parse(Cookies.getCookie('user'));
    const [state, setState] = useState({
        menuComm: true,
        menu: true,
        menuConf: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            {
                role === 'manager' &&  <>
                <SubMenu
                    handleToggle={() => handleToggle('menu')}
                    isOpen={state.menu}
                    name="pos.menu.admon"
                    icon={<LabelIcon />}
                    dense={dense}
                >
                    
                </SubMenu>
                <SubMenu
                    handleToggle={() => handleToggle('menuComm')}
                    isOpen={state.menuComm}
                    name="pos.menu.comm"
                    icon={<LabelIcon />}
                    dense={dense}
                >

                </SubMenu>
                <SubMenu
                    handleToggle={() => handleToggle('menuConf')}
                    isOpen={state.menuConf}
                    name="pos.menu.conf"
                    icon={<LabelIcon />}
                    dense={dense}
                >
                    <MenuItemLink
                        to="/users"
                        state={{ _scrollToTop: true }}
                        primaryText={translate(`resources.users.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<users.icon />}
                        dense={dense}
                    />
                    <MenuItemLink
                        to="/suppliers"
                        state={{ _scrollToTop: true }}
                        primaryText={translate(`resources.suppliers.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<suppliers.icon />}
                        dense={dense}
                    />
                    <MenuItemLink
                        to="/organizations"
                        state={{ _scrollToTop: true }}
                        primaryText={translate(`resources.organizations.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<organizations.icon />}
                        dense={dense}
                    />
                </SubMenu>
                </>
            }
          {
                (role === 'employee' && user.supplierValidator) && <>
                <MenuItemLink
                    to="/suppliers"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.suppliers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<suppliers.icon />}
                    dense={dense}
                />
                </>
            }
        </Box>
    );
};

export default Menu;

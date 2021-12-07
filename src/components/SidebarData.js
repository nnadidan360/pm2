import React from 'react';
import Home from "@material-ui/icons/Home"
import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Money from "@material-ui/icons/Money";
import Security from "@material-ui/icons/Security";
import Settings from "@material-ui/icons/Settings";
import Payment from "@material-ui/icons/Payment";




export const SidebarData = [
    {
      title: 'Home',
      path: '/auth/user',
      icon: <Home />,
      cName: 'nav-text'
    },
    {
      title: 'Purchase Plan',
      path: '/purchase',
      icon: <AddShoppingCart />,
      cName: 'nav-text'
    },
    {
      title: 'My Investments',
      path: '/investment',
      icon: <Money />,
      cName: 'nav-text'
    },
    {
      title: 'Earnings',
      path: '/earning',
      icon: <Security />,
      cName: 'nav-text'
    },
    {
      title: 'Deposit History',
      path: '/deposit',
      icon: <AccountBalance />,
      cName: 'nav-text'
    },
    {
      title: 'Withdraw',
      path: '/withdrawal',
      icon: <AccountBalanceWallet />,
      cName: 'nav-text'
    },
    {
        title: 'Fund Account',
        path: '/funding',
        icon: <Payment/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/setting',
        icon: <Settings />,
        cName: 'nav-text'
    }
  ];
  
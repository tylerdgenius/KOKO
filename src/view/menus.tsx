import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  {
    path: '/EMR',
    exact: true,
    icon: <DashboardIcon />,
    label: "My EMR",
    permissionRequired: null,
  },

  {
    path: '/user',
    icon: <SettingsIcon />,
    label: 'Users',
    permissionRequired: permissions.userRead,
  },
  {
    path: '/patient-report',
    icon: <SettingsIcon />,
    label: 'Report',
    permissionRequired: permissions.patientRead,
  },

  {
    path: '/report',
    icon: <SettingsIcon />,
    label: 'Report',
    permissionRequired: permissions.userRead,
  },

  {
    path: '/setup',
    icon: <SettingsIcon />,
    label: 'Set Up',
    permissionRequired: permissions.userRead,
  },
  
  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },
/* 

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.order.menu'),
  }, */
].filter(Boolean);

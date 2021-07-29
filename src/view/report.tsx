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
    path: '/healthcare',
    exact: true,
    icon: <HistoryIcon />,
    label: "Health Care",
    avater:"https://img-portal-prod.s3.amazonaws.com/uploads/image/attachment/1985/healthcare.png",
    permissionRequired: permissions.userRead,
  },

  



/* 

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.order.menu'),
  }, */
].filter(Boolean);

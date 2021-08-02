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
    path: '/allergies',
    exact: true,
    icon: <HistoryIcon />,
    label: "Allergies Report",
    avater:"https://www.publicradiotulsa.org/sites/kwgs/files/styles/x_large/public/201812/medical-tests.jpg",
    permissionRequired: permissions.userRead,
  },

  {
    path: '/drugs',
    exact: true,
    icon: <DashboardIcon />,
    label: "Drugs",
    avater:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Pharmacy.jpg",
    permissionRequired: permissions.userRead,
  },
  {
    path: '/medical',
    exact: true,
    icon: <PersonIcon />,
    label: "Medical Test",
    avater:"https://www.publicradiotulsa.org/sites/kwgs/files/styles/x_large/public/201812/medical-tests.jpg",
    permissionRequired: permissions.userRead,
  },
  {
    path: '/branch',
    exact: true,
    icon: <SettingsIcon />,
    label: "branch",
    avater:"https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
    permissionRequired: permissions.userRead,
  },
  {
    path: '/organization',
    exact: true,
    icon: <DashboardIcon />,
    label: "Organization",
    avater:"https://img-portal-prod.s3.amazonaws.com/uploads/image/attachment/1985/healthcare.png",
    permissionRequired: permissions.userRead,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    avater:"https://img-portal-prod.s3.amazonaws.com/uploads/image/attachment/1985/healthcare.png",
    permissionRequired: permissions.auditLogRead,
  },
  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    avater:"https://img-portal-prod.s3.amazonaws.com/uploads/image/attachment/1985/healthcare.png",
    permissionRequired: permissions.auditLogRead,
  },



/* 

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.order.menu'),
  }, */
].filter(Boolean);

///hospital,register patien,login audit,change audit report 

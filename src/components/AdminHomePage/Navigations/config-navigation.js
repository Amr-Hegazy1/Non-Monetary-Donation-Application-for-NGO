import { colors } from '@mui/material';
import SvgColor from '../svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={'logo.png'} sx={{ width: 1, height: 1 }} />
);

const NavConfig = [
  {
    title: 'Admin Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
    color: 'darkred',

  },
  {
    title: 'Organisation Submissions',
    path: '/organizations',
    icon: icon('ic_user'),
  },
  {
    title: 'Donor Submissions',
    path: '/donors',
    icon: icon('ic_cart'),
  },
  {
    title: 'Change Password',
    path: '/change password',
    icon: icon('ic_blog'),
  },
  {
    title: 'Account Management',
    // Corrected the path to use a hyphen instead of space
    icon: icon('ic_lock'),
    subMenu: [
      {
        title: 'Registered Organizations',
        path: '/registeredOrganizations',
        icon: icon('ic_organization'),
      },
      {
        title: 'Registered Donors',
        path: '/registeredDonors',
        icon: icon('ic_donor'),
      },
    ],
  },
  {
    title: 'Donation Requests',
    path: '/donor requests',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Organization Requests',
    path: '/organization requests',
    icon: icon('ic_disabled'),
  }
];

export default NavConfig;

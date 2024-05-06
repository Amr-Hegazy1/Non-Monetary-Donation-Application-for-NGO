import { colors } from '@mui/material';
import SvgColor from '../svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`./${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const NavConfig = [
  {
    title: 'Admin Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
    color: '#602b37',

  },
  {
    title: 'Organisation Submissions',
    path: '/organizations',
    icon: icon('ic_user'),
    color: '#602b37',
  },
  {
    title: 'Donor Submissions',
    path: '/donors',
    icon: icon('ic_cart'),
    color: '#602b37',
  },
  {
    title: 'Change Password',
    path: '/change password',
    icon: icon('ic_blog'),
    color: '#602b37',
  },
  {
    title: 'Account Management',
    // Corrected the path to use a hyphen instead of space
    icon: icon('ic_lock'),
    color: '#602b37',
    subMenu: [
      {
        title: 'Registered Organizations',
        path: '/registeredOrganizations',
        icon: icon('ic_organization'),
        color: '#602b37',
      },
      {
        title: 'Registered Donors',
        path: '/registeredDonors',
        icon: icon('ic_donor'),
        color: '#602b37',
      },
    ],
  },
  {
    title: 'Donation Requests',
    path: '/donor requests',
    icon: icon('ic_disabled'),
    color: '#602b37',
  },
  {
    title: 'Organization Requests',
    path: '/organization requests',
    icon: icon('ic_disabled'),
    color: '#602b37',
  }
];



export default NavConfig;

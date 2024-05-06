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
    title: 'View Organizations',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'View Donors',
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
    children: [ // Adding a children property to hold sub-items
      {
        title: 'Organisation',
        path: 'donors', // Example path, adjust as necessary
        icon: icon('ic_organisation'), // Assuming you have an icon for this, adjust as necessary
      },
      {
        title: 'Donor',
        path: 'donors', // Example path, adjust as necessary
        icon: icon('ic_donor'), // Assuming you have an icon for this, adjust as necessary
      }
    ]
  },
  {
    title: 'Donation Requests',
    path: '/requests',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Validate Donor Accounts',
    path: '/user details',
    icon: icon('ic_disabled'),
  }
];

export default NavConfig;

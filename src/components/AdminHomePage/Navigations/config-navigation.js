import { colors } from '@mui/material';
import SvgColor from '../svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`./${name}`} sx={{ width: 1, height: 1 }} />
);

const NavConfig = [
  {
    title: 'Admin Dashboard',
    path: '/',
    icon: icon('ic_analytics.svg'),
    color: '#602b37',

  },
  {
    title: 'Organisation Submissions',
    path: '/organizations',
    icon: icon('organization.png'),
    color: '#602b37',
  },
  {
    title: 'Donor Submissions',
    path: '/donors',
    icon: icon('ic_donors.svg'),
    color: '#602b37',
  },
  {
    title: 'Change Password',
    path: '/change password',
    icon: icon('ic_password.svg'),
    color: '#602b37',
  },
  {
    title: 'Account Management',
    // Corrected the path to use a hyphen instead of space
    icon: icon('Cog_circle.svg.png'),
    color: '#602b37',
    subMenu: [
      {
        title: 'Manage Organizations',
        path: '/registeredOrganizations',
        icon: icon('organization.png'),
        color: '#602b37',
      },
      {
        title: 'Manage Donors',
        icon: icon('ic_donors.svg'),
        color: '#602b37',
        subMenu: [
          {
            title: 'Registered Doctors',
            path: '/registeredDoctors',
            icon: icon('ic_donors.svg'),
            color: '#602b37',
          },
          {
            title: 'Registered Teachers',
            path: '/registeredTeachers',
            icon: icon('ic_donors.svg'),
            color: '#602b37',
          },
        ],
      },
    ],
  },
  {
    title: 'Donation Requests',
    path: '/donor requests',
    icon: icon('request.png'),
    color: '#602b37',
  },
  {
    title: 'Organization Requests',
    path: '/organization requests',
    icon: icon('request.png'),
    color: '#602b37',
  }
];



export default NavConfig;

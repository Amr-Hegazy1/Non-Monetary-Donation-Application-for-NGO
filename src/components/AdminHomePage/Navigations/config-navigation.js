import { colors } from '@mui/material';
import SvgColor from '../svg-color';
import IndexPage from '../AppPage/appPage';
import OrganizationList from '../../OrganizationList';
import RegisteredOrganizations from '../../RegisteredOrganizations';
import RegisteredDonors from '../../RegisteredDonors';
import DonorRequests from '../../DonorRequests';
import OrganizationRequests from '../OrganizationRequests';
import PasswordManagement from '../../../PasswordManagement';
import DonorList from '../../DonorList';
import { act } from 'react';


// ----------------------------------------------------------------------

const icon = (name) => {
  // print src to see if the path is correct

  

  return (

  <SvgColor src={`./${name}`} sx={{ width: 1, height: 1 }} />
  );

}

const NavConfig = [
  {
    index: 0,
    title: 'Admin Dashboard',
    path: '/AdminHome',
    icon: icon('ic_analytics.svg'),
    color: '#602b37',
    element: <IndexPage />,
    active: true

  },
  {
    index: 1,
    title: 'Organization Submissions',
    path: '/AdminHome/organizations',
    icon: icon('organization.png'),
    color: '#602b37',
    element: <OrganizationList />,
    active: false

  },
  {
    index: 2,
    title: 'Donor Submissions',
    path: '/AdminHome/donors',
    icon: icon('ic_donors.svg'),
    color: '#602b37',
    element: <DonorList />,
    active: false
  },
  {
    index: 3,
    title: 'Change Password',
    path: '/AdminHome/change password',
    icon: icon('ic_password.svg'),
    color: '#602b37',
    element: <PasswordManagement />,
  },
  {
    index: 4,
    title: 'Account Management',
    // Corrected the path to use a hyphen instead of space
    icon: icon('Cog_circle.svg.png'),
    color: '#602b37',
    subMenu: [
      {
        index: 0,
        title: 'Manage Organizations',
        path: '/AdminHome/registeredOrganizations',
        icon: icon('organization.png'),
        color: '#602b37',
        element: <RegisteredOrganizations />,
        active: false
      },
      {
        index: 1,
        title: 'Manage Donors',
        path: '/AdminHome/registeredDonors',
        icon: icon('ic_donors.svg'),
        color: '#602b37',
        element: <RegisteredDonors />,
        active: false
      },
    ],
  },
  {
    index: 5,
    title: 'Donation Requests',
    path: '/AdminHome/donor requests',
    icon: icon('request.png'),
    color: '#602b37',
    element: <DonorRequests />,
    acive: false
  },
  {
    index: 6,
    title: 'Organization Requests',
    path: '/AdminHome/organization requests',
    icon: icon('request.png'),
    color: '#602b37',
    element: <OrganizationRequests />,
    active: false
  }
];



export default NavConfig;

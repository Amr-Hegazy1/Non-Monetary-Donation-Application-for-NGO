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
  },
  {
    title: 'View Organisations',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'View Donors',
    path: '/donors',
    icon: icon('ic_cart'),
  },
  {
    title: 'Chnage Password',
    path: '/change password',
    icon: icon('ic_blog'),
  },
  {
    title: 'Account Management',
    path: '/account mangement',
    icon: icon('ic_lock'),
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

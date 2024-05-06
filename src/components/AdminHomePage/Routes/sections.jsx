import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from '../Navigations/index';
import OrganizationList from '../../OrganizationList';
import RegisteredOrganizations from '../../RegisteredOrganizations';
import RegisteredDonors from '../../RegisteredDonors';
import DonorRequests from '../../DonorRequests';
import OrganizationRequests from '../OrganizationRequests';

export const IndexPage = lazy(() => import('../AppPage/appPage'));
export const PasswordManagement = lazy(() => import('../../../PasswordManagement'));
export const DonorList = lazy(() => import('../../DonorList'));
export const Organizations = lazy(() => import('../../../Organizations'));
export const DonorSubmission = lazy(() => import('../../../DonorSubmission'));
export const UserDetails = lazy(() => import('../../UserDetails'));
export const Requests = lazy(() => import('../../../Requests'));  


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'donors', element: <DonorList /> },
        { path: 'organizations', element: <OrganizationList /> },
        { path: 'change password', element: <PasswordManagement /> },
        { path: 'account mangement', element: <OrganizationList /> },
        { path : 'Validate Donor Accounts' , element : < Organizations/>},
        { path: 'donors submissions', element: <DonorSubmission />},
        { path : 'user details' , element : <UserDetails/>},
        { path : 'donor requests', element : <DonorRequests/>},
        { path : 'organization requests', element : <OrganizationRequests/>},
        { path : 'registeredOrganizations', element : <RegisteredOrganizations/>},
        { path : 'registeredDonors', element : <RegisteredDonors/>},
      ],
    },
   
  ]);

  return routes;
}

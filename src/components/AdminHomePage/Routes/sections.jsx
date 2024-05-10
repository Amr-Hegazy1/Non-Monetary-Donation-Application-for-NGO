import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from '../Navigations/index';
import OrganizationList from '../../OrganizationList';
import RegisteredOrganizations from '../../RegisteredOrganizations';
import DonorRequests from '../../DonorRequests';
import OrganizationRequests from '../OrganizationRequests';
import RegisteredDoctors from '../../RegisteredDoctors';
import RegisteredTeachers from '../../RegisteredTeachers';

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
        { path : 'registeredDoctors', element : <RegisteredDoctors/>},
        { path : 'registeredTeachers', element : <RegisteredTeachers/>},
      ],
    },

  ]);



  return (<DashboardLayout>
    <Suspense>
      <Outlet />
    </Suspense>
  </DashboardLayout>
  )
}

import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from '../Navigations/index';
import OrganizationList from '../../OrganizationList';
import RegisteredOrganizations from '../../RegisteredOrganizations';
import DonorRequests from '../../DonorTeacherRequests';
import OrganizationRequests from '../OrganizationRequests';
import RegisteredDoctors from '../../RegisteredDoctors';
import RegisteredTeachers from '../../RegisteredTeachers';
import DonorTeacherRequests from '../../DonorTeacherRequests';
import DonorDoctorRequests from '../DonorDoctorRequests';
import AdminFilterOrganization from '../../AdminFilterOrganization';

export const IndexPage = lazy(() => import('../AppPage/appPage'));
export const DonorList = lazy(() => import('../../DonorList'));
export const Organizations = lazy(() => import('../../../Organizations'));
export const DonorSubmission = lazy(() => import('../../../DonorSubmission'));
export const UserDetails = lazy(() => import('../../DoctorDetails'));
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
        { path: 'account mangement', element: <OrganizationList /> },
        { path : 'Validate Donor Accounts' , element : < Organizations/>},
        { path: 'donors submissions', element: <DonorSubmission />},
        { path : 'user details' , element : <UserDetails/>},
        { path : 'donor requests', element : <DonorRequests/>},
        { path : 'organization requests', element : <OrganizationRequests/>},
        { path : 'registeredOrganizations', element : <AdminFilterOrganization/>},
        { path : 'registeredDoctors', element : <RegisteredDoctors/>},
        { path : 'registeredTeachers', element : <RegisteredTeachers/>},
        { path :'DonorTeachersRequests', element : <DonorTeacherRequests/>},
        { path : 'DonorDoctorsRequests' ,element : <DonorDoctorRequests/>},
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

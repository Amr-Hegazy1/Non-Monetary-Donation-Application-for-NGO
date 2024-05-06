import { Helmet } from 'react-helmet-async';

import  AppView  from '../App/app-view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <AppView />
    </>
  );
}

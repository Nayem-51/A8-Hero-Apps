import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import ErrorPage from '../Pages/ErrorPage';
import AppDetails from '../Pages/AppDetails';
import Installation from '../Pages/Instalation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <AllApps /> },
      { path: 'installation', element: <Installation /> },
      { path: 'app/:id', element: <AppDetails /> },
    ],
  },
]);

export default router;

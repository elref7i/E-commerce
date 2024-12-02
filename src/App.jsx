import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import VerifyResetCode from './Pages/VerifyResetCode/VerifyResetCode';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      { path: '/register', element: <Signup /> },
      { path: '/foregetPassword', element: <ForgetPassword /> },
      { path: '/verifyResetCode', element: <VerifyResetCode /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

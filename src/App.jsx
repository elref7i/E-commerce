import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import VerifyResetCode from './Pages/VerifyResetCode/VerifyResetCode';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/register', element: <Signup /> },
      { path: '/login', element: <Login /> },
      { path: '/foregetPassword', element: <ForgetPassword /> },
      { path: '/verifyResetCode', element: <VerifyResetCode /> },
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

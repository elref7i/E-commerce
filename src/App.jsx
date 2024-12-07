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
import GuestRoute from './Components/GuestRoute/GuestRoute';
import UserProvider from './context/User.context';
import CartProvider from './context/Cart.context';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: '*', element: <NotFoundPage /> },
      { path: 'productdetails/:id', element: <ProductDetails /> },
    ],
  },
  {
    path: '/',
    element: (
      <GuestRoute>
        <Layout />
      </GuestRoute>
    ),
    children: [
      { path: 'register', element: <Signup /> },
      { path: 'foregetPassword', element: <ForgetPassword /> },
      { path: 'verifyResetCode', element: <VerifyResetCode /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
      <Toaster />
    </>
  );
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/register', element: <Signup /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

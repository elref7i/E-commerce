import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/User.context';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  // let token = false;
  const { token } = useContext(UserContext);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

//* Token => Navbar-Cart-WishList-ProotectedRoute-GuestRoute

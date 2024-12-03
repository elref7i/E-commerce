import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/User.context';

export default function GuestRoute({ children }) {
  // let token = false;
  const { token } = useContext(UserContext);

  if (!token) {
    return children;
  } else {
    <Navigate to="/" />;
  }
}

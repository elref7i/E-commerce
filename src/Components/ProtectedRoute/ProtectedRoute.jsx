import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  let token = false;
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

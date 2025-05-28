import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

 function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

 function Navbar () {
  const { loggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      {!loggedIn && <Link to="/login">Login</Link>}
      {loggedIn && <button onClick={Logout}>Logout</button>}
    </nav>
  );
}
export default Navbar;

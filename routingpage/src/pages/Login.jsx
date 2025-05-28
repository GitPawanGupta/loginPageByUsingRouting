import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

 function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const Login = () => {
    login();
    navigate('/');
  };

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={Login}>Login</button>
    </div>
  );
}
export default Login;

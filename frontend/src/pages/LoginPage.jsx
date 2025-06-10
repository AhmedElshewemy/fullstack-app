import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const { login, loading, error, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    await login(credentials);
    // If login was successful, redirect to /notes
    if (user || localStorage.getItem('token')) {
      navigate('/notes');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} isLoading={loading} error={error} />
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';

const LoginForm = ({ onSubmit, isLoading, error }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!credentials.email) errors.email = 'Email is required';
    if (!credentials.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSubmit(credentials);
    } else {
      setValidation(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
            setValidation({});
          }}
          style={styles.input}
          disabled={isLoading}
        />
        {validation.email && <span style={styles.error}>{validation.email}</span>}
      </div>

      <div style={styles.inputGroup}>
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
            setValidation({});
          }}
          style={styles.input}
          disabled={isLoading}
        />
        {validation.password && <span style={styles.error}>{validation.password}</span>}
      </div>

      {error && <div style={styles.error}>{error}</div>}

      <button 
        type="submit" 
        style={styles.button}
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  }
};

export default LoginForm;

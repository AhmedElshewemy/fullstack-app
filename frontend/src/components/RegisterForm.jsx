import React, { useState } from 'react';

const RegisterForm = ({ onSubmit, isLoading, error }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [validation, setValidation] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!userData.username) errors.username = 'Username is required';
    if (!userData.email) errors.email = 'Email is required';
    if (!userData.password) errors.password = 'Password is required';
    if (userData.password !== userData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSubmit(userData);
    } else {
      setValidation(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          style={styles.input}
          disabled={isLoading}
        />
        {validation.username && <span style={styles.error}>{validation.username}</span>}
      </div>

      <div style={styles.inputGroup}>
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          style={styles.input}
          disabled={isLoading}
        />
        {validation.email && <span style={styles.error}>{validation.email}</span>}
      </div>

      <div style={styles.inputGroup}>
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          style={styles.input}
          disabled={isLoading}
        />
        {validation.password && <span style={styles.error}>{validation.password}</span>}
      </div>

      <div style={styles.inputGroup}>
        <input
          type="password"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
          style={styles.input}
          disabled={isLoading}
        />
        {validation.confirmPassword && <span style={styles.error}>{validation.confirmPassword}</span>}
      </div>

      {error && <div style={styles.error}>{error}</div>}

      <button type="submit" style={styles.button} disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
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

export default RegisterForm;

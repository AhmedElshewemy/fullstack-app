import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotesProvider } from './contexts/NotesContext';
import { AuthContext } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage';
import RegisterPage from './pages/RegisterPage';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <div className="app">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/notes" element={
                <PrivateRoute>
                  <NotesPage />
                </PrivateRoute>
              } />
              <Route path="/" element={<Navigate to="/notes" />} />
            </Routes>
          </div>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

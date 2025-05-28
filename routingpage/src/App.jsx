// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './context/AuthContext.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

function PrivateRoute({ children }) {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="/login" />;
}

 function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
export default App;

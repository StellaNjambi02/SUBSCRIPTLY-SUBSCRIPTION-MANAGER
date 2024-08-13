import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import HomePage from './pages/HomePage';
import './App.css';
import { useAuth } from './context/AuthContext';

function App() {
  const {isAuthenticated} = useAuth();

  return (
    <div className="App">
      {isAuthenticated && <Navbar />}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
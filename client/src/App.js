import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Box>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

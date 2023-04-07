import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { SignupPage } from './pages/SignupPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Box>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

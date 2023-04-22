import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/General/HomePage';
import { LoginPage } from './pages/General/LoginPage';
import { SignUpPage } from './pages/General/SignUpPage';
import { ProductPage } from './pages/Customer/ProductPage';
import { ProductDetailPage } from './pages/Customer/ProductDetailPage';
import { ErrorPage } from './pages/General/ErrorPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Box>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<HomePage setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/detail" element={<ProductDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

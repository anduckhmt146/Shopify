import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { Product } from './pages/ProductPage';
import { ProductDetail } from './pages/ProductDetailPage';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <StyledEngineProvider injectFirst>
      <Box>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Box>
    </StyledEngineProvider>
  );
}

export default App;

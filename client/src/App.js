import React from 'react';
import { Box } from "@mui/material";
import { Header } from './components/header'
import { Homepage } from './components/homepage'
import { Footer } from './components/footer'

function App() {
  return (
    <Box>
      <Header />
      <Homepage />
      <Footer />
    </Box>
  );
}

export default App;

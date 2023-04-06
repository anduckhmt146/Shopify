import { React, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from './components/header'
import { Homepage } from './components/homepage'
import { Footer } from './components/footer'
import { Login } from './components/logIn'
import { Error } from './components/error'

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Box>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />
      <Routes>
        <Route index element={<Login setLoggedIn={setLoggedIn} />}/>
        {loggedIn && <Route path="/homepage" element={<Homepage />}/>}
        {!loggedIn && <Route path="*" element={<Login setLoggedIn={setLoggedIn}/>}/>}
        {loggedIn && <Route path="*" element={<Error />}/>}
      </Routes>
      {loggedIn && <Footer />}
    </Box>
  );
}

export default App;

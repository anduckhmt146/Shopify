import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { HomePage } from './pages/General/HomePage';
import { LoginPage } from './pages/General/LoginPage';
import { SignUpPage } from './pages/General/SignUpPage';
import { ProductPage } from './pages/Customer/ProductPage';
import { ProductDetailPage } from './pages/Customer/ProductDetailPage';
import { ErrorPage } from './pages/General/ErrorPage';
import { UserLayout } from './layout/UserLayout';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Admin/home/Home';
import UserList from './pages/Admin/userList/UserList';
import User from './pages/Admin/user/User';
import NewUser from './pages/Admin/newUser/NewUser';
import Product from './pages/Admin/product/Product';
import ProductList from './pages/Admin/productList/ProductList';
import NewProduct from './pages/Admin/newProduct/NewProduct';
// import Page from './pages/Admin/customers';
function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Box>
      {/* <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> */}
      <Routes>
        {/* page customer */}
        <Route path="/" element={
          <UserLayout>
            <HomePage setLoggedIn={setLoggedIn} />
          </UserLayout>
        } />
        
        <Route path="/home" element={
          <UserLayout>
            <HomePage setLoggedIn={setLoggedIn} />
          </UserLayout>
        } />
        <Route path="/login" element={
          <UserLayout>
            <LoginPage />
          </UserLayout>
        } />
        <Route path="/signup" element={
          <UserLayout>
            <SignUpPage />
          </UserLayout>} />
        <Route path="/product" element={
          <UserLayout>
            <ProductPage />
          </UserLayout>} />
        <Route path="/product/detail" element={
          <UserLayout>
            <ProductDetailPage />
          </UserLayout>} />
        <Route path="*" element={
          <UserLayout>
            <ErrorPage />
          </UserLayout>} />
        {/* page admin */}
        <Route path="/dashboard" element = {
          <div>
            <Topbar/>
            <Home/>
          </div>
        } />
        <Route path="/dashboard/" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <Home/>
            </div>
          </div>
        } />
        <Route path="/dashboard/users" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <UserList/>
            </div>
        </div>
        }/>
        <Route path="/dashboard/user/:userId" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <User/>
            </div>
        </div> 
        }/>
        <Route path="/dashboard/newUser" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <NewUser/>
            </div>
        </div> 
        }/>
        <Route path="/dashboard/products" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <ProductList/>
            </div>
        </div> 
        }/>
        <Route path="/dashboard/product/:productId" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <Product/>
            </div>
        </div> 
        }/>
        <Route path="/dashboard/product/:newProduct" element = {
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar/>
              <NewProduct />
            </div>
        </div> 
        }/>
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
}

export default App;

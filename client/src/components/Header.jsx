import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Header = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const setLogIn = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  const setSignUp = () => {
    setLoggedIn(false);
    navigate('/signup');
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#fff', pt: 2 }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              ml: 10,
              fontSize: 40,
              color: '#000',
              fontStyle: 'italic',
              fontWeight: 800,
            }}>
            SHOPIFY
          </Typography>
          {loggedIn && (
            <TextField
              id="search"
              placeholder="Search for products, brands and more"
              type="search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '50%',
                backgroundColor: '#f6f6f6',
                mr: 2,
              }}
            />
          )}
          {loggedIn && (
            <Stack direction="row" sx={{ mr: 10 }}>
              <Button
                variant="contained"
                startIcon={
                  <Badge badgeContent={5} color="error">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                }
                disableElevation
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                Bag
              </Button>
              <Button
                variant="contained"
                startIcon={<PermIdentityIcon />}
                disableElevation
                onClick={() => setLogIn()}
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                Sign In
              </Button>
              <Button
                variant="contained"
                startIcon={<PermIdentityIcon />}
                disableElevation
                onClick={() => setSignUp()}
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                Sign Up
              </Button>
            </Stack>
          )}
        </Toolbar>
        {loggedIn && (
          <Toolbar>
            <Button
              disableElevation
              variant="contained"
              sx={{
                ml: 8.5,
                background: 'inherit',
                color: '#000',
                '&:hover': {
                  color: '#fff',
                },
                fontWeight: 600,
              }}>
              Men
            </Button>
            <Button
              disableElevation
              variant="contained"
              sx={{
                background: 'inherit',
                color: '#000',
                '&:hover': {
                  color: '#fff',
                },
                fontWeight: 600,
              }}>
              Women
            </Button>
            <Button
              disableElevation
              variant="contained"
              sx={{
                background: 'inherit',
                color: '#000',
                '&:hover': {
                  color: '#fff',
                },
                fontWeight: 600,
              }}>
              KIDS
            </Button>
            <Button
              disableElevation
              variant="contained"
              sx={{
                background: 'inherit',
                color: '#000',
                '&:hover': {
                  color: '#fff',
                },
                fontWeight: 600,
              }}>
              HOME & LIVING
            </Button>
            <Button
              disableElevation
              variant="contained"
              sx={{
                background: 'inherit',
                color: '#000',
                '&:hover': {
                  color: '#fff',
                },
                fontWeight: 600,
              }}>
              BEAUTY
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </React.Fragment>
  );
};

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './../styles/LoginPage.css';

export const LoginPage = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [invisible, setInvisible] = useState(true);
  const [pass, setPass] = useState('');
  const handleVis = () => {
    setInvisible(!invisible);
  };

  return (
    <React.Fragment>
      <Box className="login_container">
        <Box className="login_wrapper" direction="column">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            Log In
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            Don't have an account yet?
            <Typography component="span">
              Create an account
            </Typography>
          </Typography>
          <Stack>
            <TextField
              placeholder="Your username or email"
            />
            <TextField
              placeholder="Password"
              type={invisible ? 'password' : 'text'}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {invisible ? (
                      <IconButton onClick={() => handleVis()}>
                        <VisibilityOffIcon />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => handleVis()}>
                        <VisibilityIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              label="Stay Signed In"
              control={<Checkbox />}
            />
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                setLoggedIn(true);
                navigate('../homepage');
              }}
            >
              Log In
            </Button>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
            >
              Forgot your password?
            </Typography>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

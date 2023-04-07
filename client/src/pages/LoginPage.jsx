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

export const LoginPage = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [invisible, setInvisible] = useState(true);
  const [pass, setPass] = useState('');
  const handleVis = () => {
    setInvisible(!invisible);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={20}
        mb={5}>
        <Box direction="column">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: 30, fontWeight: 700, textAlign: 'center' }}>
            Log In
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: 20, textAlign: 'center' }}>
            Don't have an account yet?
            <Typography
              component="span"
              sx={{ fontSize: 20, fontWeight: 700, pl: 1, cursor: 'pointer' }}>
              Create an account
            </Typography>
          </Typography>
          <Stack sx={{ width: '500px', boxShadow: 3, p: 5, my: 3 }}>
            <TextField
              placeholder="Your username or email"
              sx={{ backgroundColor: '#f7f8fa' }}
            />
            <TextField
              placeholder="Password"
              type={invisible ? 'password' : 'text'}
              value={pass}
              sx={{ backgroundColor: '#f7f8fa', mt: 3 }}
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
              sx={{ mt: 2, fontSize: 20 }}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{ color: '#fff', backgroundColor: '#000', mt: 2, p: 2 }}
              onClick={() => {
                setLoggedIn(true);
                navigate('../homepage');
              }}>
              Log In
            </Button>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: 20,
                fontWeight: 700,
                textAlign: 'left',
                mt: 3,
                cursor: 'pointer',
              }}>
              Forgot your password?
            </Typography>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

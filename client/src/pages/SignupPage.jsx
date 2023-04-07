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
  Link
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [invisible, setInvisible] = useState(true);
  const [pass, setPass] = useState('');
  const handleVis = () => {
    setInvisible(!invisible);
  };

  function returnLogin() {
    navigate("../login");
  }

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
              Create your Account
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: 20, textAlign: 'center' }}>
              Already have an account?
            <Typography
              component="span"
              sx={{ fontSize: 20, fontWeight: 700, pl: 1, cursor: 'pointer' }}
              onClick={returnLogin}>
                Log in
            </Typography>
          </Typography>
          <Stack sx={{ width: '500px', boxShadow: 3, p: 5, my: 3 }}>
            <TextField
              placeholder="Your Name"
              sx={{ 
                backgroundColor: '#f7f8fa', 
                mt: 3, 
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }
              }}
            />
            <TextField
              placeholder="Username"
              sx={{ 
                backgroundColor: '#f7f8fa', 
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }
              }}
            />
            <TextField
              placeholder="Your Email"
              sx={{ 
                backgroundColor: '#f7f8fa', 
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }
              }}
            />
            <TextField
              placeholder="Password"
              type={invisible ? 'password' : 'text'}
              value={pass}
              sx={{ 
                backgroundColor: '#f7f8fa', 
                mt: 3,
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }
              }}
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
            <Button
              variant="contained"
              disableElevation
              sx={{ color: '#fff', backgroundColor: '#000', mt: 2, p: 2 }}
              onClick={() => {
                navigate('../login');
              }}>
                Create Account
            </Button>
            <FormControlLabel
              label={
                <div>
                  <span>Yes, I agree with </span>
                  <Link to={'/terms'} sx={{ fontWeight: 700, textDecoration: 'none', color: '#000' }}>Privacy Policy</Link>
                  <span> and </span>
                  <Link to={'/privacy'} sx={{ fontWeight: 700, textDecoration: 'none', color: '#000' }}>Terms of Use</Link>
                </div>
              }
              control={<Checkbox />}
              sx={{ mt: 2, fontSize: 20 }}
            />
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

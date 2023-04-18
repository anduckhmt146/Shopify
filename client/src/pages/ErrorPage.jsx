import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import './../styles/ErrorPage.css';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('../homepage');
  };

  return (
    <React.Fragment>
      <Box className="error_container">
        <Container maxWidth="md">
          <Grid classname="error_grid" container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
                Oops! Page not found
              </Typography>
              <Typography variant="h6">
                The page you are looking for might have been removed or
                temporarily unavailable.
              </Typography>
              <Button
                className="error_btn"
                variant="contained"
                onClick={() => handleBack()}
              >
                Back to Homepage
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img
                className='error_img'
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

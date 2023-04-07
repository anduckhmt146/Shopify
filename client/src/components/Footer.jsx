import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardMedia,
} from '@mui/material';

export const Footer = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ borderTop: '1px solid #e1e8f0', pt: 7 }}>
        <Box sx={{ width: '80%' }}>
          <Grid container>
            <Grid item xs={3}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    fontSize: 40,
                    color: '#000',
                    fontStyle: 'italic',
                    fontWeight: 800,
                    mb: 2,
                  }}>
                  SHOPIFY
                </Typography>
                <Typography variant="h6" sx={{ color: '#5e6470' }}>
                  685 Market Street
                </Typography>
                <Typography variant="h6" sx={{ color: '#5e6470' }}>
                  San Francisc, CA 94105
                </Typography>
                <Typography variant="h6" sx={{ color: '#5e6470' }}>
                  United States
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: '#000', fontWeight: 600, fontSize: 24, mb: 3 }}>
                  Company
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  About
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  All Products
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  location
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  FAQ
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Contact Us
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} ml={-2}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: '#000', fontWeight: 600, fontSize: 24, mb: 3 }}>
                  Delivery & Collection
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  How to Return
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Return Policy
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Refunds
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Delivery FAQs
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Site Map
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} ml={2}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: '#000', fontWeight: 600, fontSize: 24, mb: 3 }}>
                  Help
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Security
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Privacy
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Accessibility
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Terms & Conditions
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#5e6470', pl: 1, mb: 2 }}>
                  Size Guild
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: '#000', fontWeight: 600, fontSize: 24, mb: 3 }}>
                  Newsletter
                </Typography>
                <Typography variant="h6" sx={{ color: '#5e6470', mb: 2 }}>
                  Subcribe to our weekly Newsletter and receive updates via
                  email.
                </Typography>
                <Stack direction="row">
                  <TextField
                    id="standard-name"
                    placeholder="Your email..."
                    sx={{ backgroundColor: '#f7f8fa' }}
                  />
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      width: '150px',
                      color: '#fff',
                      backgroundColor: '#000',
                    }}>
                    Subcribe
                  </Button>
                </Stack>
                <Typography
                  variant="h6"
                  sx={{ color: '#000', fontWeight: 600, fontSize: 24, mt: 3 }}>
                  We Accept
                </Typography>
                <Stack
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  flexDirection="row">
                  <Card elevation={0}>
                    <CardMedia
                      component="img"
                      image="https://ucarecdn.com/a20788be-d669-4291-b0d1-60d84badc7ea/visa.webp"
                      alt="unsplash img"
                      sx={{
                        width: '50px',
                        mr: 3,
                      }}
                    />
                  </Card>
                  <Card elevation={0}>
                    <CardMedia
                      component="img"
                      image="https://ucarecdn.com/e353427e-e9bb-4670-b286-737a44474a0c/paypal.webp"
                      alt="unsplash img"
                      sx={{
                        width: '50px',
                        mr: 3,
                      }}
                    />
                  </Card>
                  <Card elevation={0}>
                    <CardMedia
                      component="img"
                      image="https://ucarecdn.com/9067f572-e217-41f7-b0e5-17b38eb0c815/momo.png"
                      alt="unsplash img"
                      sx={{
                        width: '50px',
                        mr: 3,
                      }}
                    />
                  </Card>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: '#5e6470', fontSize: 16 }}
          mt={10}>
          &copy; 2022 - E-commerce by Kryptonyte
        </Typography>
      </Box>
    </React.Fragment>
  );
};

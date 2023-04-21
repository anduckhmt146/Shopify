import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  CardMedia,
  Typography,
  Rating,
  Grid,
  Button,
} from '@mui/material';
import './../styles/HomePage.css';

export const HomePage = () => {
  const RenderBestSeller = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <Card 
          className="homepage_item" 
          elevation={0} 
          key={i}
        >
          <Box>
            <Typography>
              New
            </Typography>
            <Typography>
              -20%
            </Typography>
          </Box>
          <CardMedia
            component="img"
            image="https://picsum.photos/1900/800"
            alt="unsplash img"
          />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
            >
              Luiz Vitton Lace Suit
            </Typography>
            <Stack>
              <Typography
                variant="h6"
                component="div"
              >
                $180.00
              </Typography>
              <Typography
                variant="h6"
                component="div"
              >
                $210.90
              </Typography>
              <Rating size="small"></Rating>
            </Stack>
          </CardContent>
        </Card>
      );
    }
    return list;
  };

  const RenderGrid = () => {
    let list = [];
    for (let i = 0; i < 8; i++) {
      list.push(
        <Grid item xs={3} key={i}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              image="https://picsum.photos/1900/800"
              alt="unsplash img"
            />
          </Card>
        </Grid>
      );
    }
    return list;
  };

  const RenderFollowBtn = () => {
    let list = [];
    var text = 'Facebook';
    for (let i = 0; i < 4; i++) {
      if (i === 1) text = 'Instagram';
      if (i === 2) text = 'Twitter';
      if (i === 3) text = 'Linkedln';

      list.push(
        <Button className='media_btn'
          variant="contained"
          disableElevation
          key={i}
        >
          {text}
        </Button>
      );
    }
    return list;
  };

  return (
    <React.Fragment>
      <Box className="homepage_main-img">
        <Box>
          <Card elevation={0}>
            <CardMedia
              component="img"
              image="https://picsum.photos/1900/800"
              alt="unsplash img"
            />
          </Card>
        </Box>
      </Box>
      <Box className="homepage_best-seller">
        <Box className="homepage_best-seller_ctn">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            Best Sellers
          </Typography>
          <Stack>
            <RenderBestSeller />
          </Stack>
        </Box>
      </Box>
      <Box className="homepage_middle-img">
        <Box>
          <Card elevation={0}>
            <CardMedia
              component="img"
              image="https://picsum.photos/1900/800"
              alt="unsplash img"
            />
          </Card>
          <Card elevation={0}>
            <CardMedia
              component="img"
              image="https://picsum.photos/1900/800"
              alt="unsplash img"
            />
          </Card>
        </Box>
      </Box>
      <Box className="homepage_newly-added">
        <Box className="homepage_newly-added_ctn">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            Newly Added
          </Typography>
          <Stack>
            <RenderBestSeller />
          </Stack>
        </Box>
      </Box>
      <Box className="homepage_explore">
        <Box className="homepage_explore_ctn">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            Explore Our Brand
          </Typography>
          <Grid container spacing={2}>
            <RenderGrid />
          </Grid>
        </Box>
      </Box>
      <Box className="homepage_banner">
        <Card elevation={0}>
          <CardMedia
            component="img"
            image="https://picsum.photos/1900/800"
            alt="unsplash img"
          />
        </Card>
      </Box>
      <Box className="homepage_follow">
        <Typography mb={2}>Follow Us</Typography>
        <Stack direction="row">
          <RenderFollowBtn />
        </Stack>
      </Box>
    </React.Fragment>
  );
};

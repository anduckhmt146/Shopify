import React from 'react';
import { 
  Box,
  Link,
  Breadcrumbs,
  Stack
} from '@mui/material';
import '../../styles/AboutUsPage.css';

export const AboutUs = () => {

  return (
    <React.Fragment>
      <Box className="order-status_container">
        <Box className="order-status_wrapper">
          <Stack className="order-status_breadcrumbs">
            <Breadcrumbs aria-label="breadcrumbs" separator=">">
              <Link href="#">Home</Link>
              <Link href="#">Shop All</Link>
              <Link href="#">Shop All</Link>
            </Breadcrumbs>
          </Stack>
          <Box className="order-status_content">
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

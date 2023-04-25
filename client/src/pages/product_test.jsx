import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const ProductAdPage = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products/all')
      .then((result) => {
        console.log(result.data);
        setProductList(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={20}
            mb={10}>
            Hello!!!
            
            <div>
                {productList.map((data) => {
                  return (
                    <div key={data.CODE}>
                      <p> {data.CODE}</p>
                      <h4>{data.NAME}</h4>
                      <p>{data.COLOR}</p>
                    </div>
                  );
                })}
            </div>
        </Box>
    </React.Fragment>
  );
};

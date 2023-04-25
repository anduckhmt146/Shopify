import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  Stack,
  TextField,
  InputAdornment,
  Box,
  CardMedia,
  IconButton,
  Drawer,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './../styles/Header.css'
import axios from 'axios';
import { useTheme } from "@mui/material";

export const Header = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [cateState, setCateState] = useState(false);
  const [colState, setColState] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      let ret = [];
      for (let i = 0; i < data.length; i++) {
        ret.push(data[i]['NAME']);
      }
      setCategories(ret);
    });
    getCollections().then((data) => {
      let ret = [];
      for (let i = 0; i < data.length; i++) {
        ret.push(data[i]['NAME']);
      }
      setCollections(ret);
    });
  }, []);
  const getCategories = async () => {
    return axios
      .get('http://localhost:8080/api/products/categories')
      .then((res) => res.data);
  };
  const getCollections = async () => {
    return axios
      .get('http://localhost:8080/api/products/collections')
      .then((res) => res.data);
  };
  const setLogOut = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  const RenderSideButton = () => {
    return (
      <React.Fragment>
        <Typography
          onClick={() => {navigate('/home'); setOpenDrawer(false)}}
          sx={{
            py: 2,
            px: 3.2,
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
              color: '#4bc1f4',
            },
            borderBottom: '1px solid #dcdcdc'
          }}
        >
          TRANG CHỦ
        </Typography>
        <Typography
          onClick={() => {navigate('/aboutus'); setOpenDrawer(false)}}
          sx={{
            py: 2,
            px: 3.2,
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
              color: '#4bc1f4',
            },
            borderBottom: '1px solid #dcdcdc'
          }}
        >
          GIỚI THIỆU
        </Typography>
        <Typography
          onClick={() => {navigate('/product'); setOpenDrawer(false)}}
          sx={{
            py: 2,
            px: 3.2,
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
              color: '#4bc1f4',
            },
            borderBottom: '1px solid #dcdcdc'
          }}
        >
          SẢN PHẨM
        </Typography>
        <Accordion sx={{ px: '10px', py: '5px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography 
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                '&:hover': {
                  color: '#4bc1f4',
                }
              }}
            >
              PHÂN LOẠI
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {categories.map((text, index) => (
              <Typography
                onClick={() => {navigate('/product'); setOpenDrawer(false)}}
                key={index}
                sx={{
                  p: '10px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4bc1f4',
                  }
                }}
              >
                {text}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ px: '10px', py: '5px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                '&:hover': {
                  color: '#4bc1f4',
                }
              }}
            >
              BỘ SƯU TẬP
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {collections.map((text, index) => (
              <Typography
                onClick={() => {navigate('/product'); setOpenDrawer(false)}}
                key={index}
                sx={{
                  p: '10px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4bc1f4',
                  }
                }}
              >
                {text}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#fff', pt: 2 }} className="header_ctn">
        <Toolbar sx={{ position: 'relative' }}>
          <IconButton sx={{ position: 'absolute' }} onClick={() => setOpenDrawer(true)}>
            <MenuIcon sx={{fontSize: '30px'}} />
          </IconButton>
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
                width: '30%',
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
                  <Badge badgeContent={0} color="error">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                }
                disableElevation
                onClick={() => navigate('/cart')}
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                {console.log(screen.width)}
              </Button>
              <Button
                variant="contained"
                startIcon={<LogoutIcon />}
                disableElevation
                onClick={() => setLogOut()}
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                Đăng xuất
              </Button>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                {JSON.parse(sessionStorage.getItem('user')).name} -{' '}
                {JSON.parse(sessionStorage.getItem('user')).role.toUpperCase()}
              </Button>
            </Stack>
          )}
          {!loggedIn && (
            <Stack direction="row" sx={{ mr: 10 }}>
              <Button
                variant="contained"
                startIcon={<PersonIcon />}
                disableElevation
                onClick={() => navigate('/login')}
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                Đăng nhập
              </Button>
              <Button
                variant="contained"
                startIcon={<HowToRegIcon />}
                disableElevation
                onClick={() => navigate('/signup')}
                sx={{
                  background: 'inherit',
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                  },
                }}>
                Đăng ký
              </Button>
            </Stack>
          )}
        </Toolbar>
        <Toolbar className="header_navigation-bar">
          <Button
            disableElevation
            variant="contained"
            onClick={() => navigate('/home')}
            sx={{
              ml: 8.5,
              background: 'inherit',
              color: '#000',
              '&:hover': {
                color: '#fff',
              },
              fontWeight: 600,
            }}>
            Trang chủ
          </Button>
          <Button
            disableElevation
            variant="contained"
            onClick={() => navigate('/aboutus')}
            sx={{
              background: 'inherit',
              color: '#000',
              '&:hover': {
                color: '#fff',
              },
              fontWeight: 600,
            }}>
            Giới thiệu
          </Button>
          <Button
            disableElevation
            variant="contained"
            onClick={() => navigate('/product')}
            sx={{
              background: 'inherit',
              color: '#000',
              '&:hover': {
                color: '#fff',
              },
              fontWeight: 600,
            }}>
            Sản phẩm
          </Button>
          <Button
            disableElevation
            variant="contained"
            onMouseOver={() => setCateState(true)}
            onMouseLeave={() => setCateState(false)}
            onClick={() => navigate('/news')}
            sx={{
              background: 'inherit',
              color: '#000',
              '&:hover': {
                color: '#fff',
              },
              fontWeight: 600,
            }}>
            Phân loại
          </Button>
          <Button
            disableElevation
            variant="contained"
            onClick={() => navigate('/contact')}
            onMouseOver={() => setColState(true)}
            onMouseLeave={() => setColState(false)}
            sx={{
              background: 'inherit',
              color: '#000',
              '&:hover': {
                color: '#fff',
              },
              fontWeight: 600,
            }}>
            Bộ sưu tập
          </Button>
        </Toolbar>
        {cateState && (
          <Box
            onMouseOver={() => setCateState(true)}
            onMouseLeave={() => setCateState(false)}
            sx={{
              zIndex: '999999',
              px: '91px',
              mt: '-13px',
            }}>
            <Stack
              sx={{
                py: '40px',
                px: '30px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              direction="row">
              <CardMedia
                component="img"
                image="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/1-den-dc08097-1.jpg"
                alt="unsplash img"
                sx={{
                  width: '220px',
                  height: '280px',
                  objectFit: 'contain',
                  backgroundColor: '#e3e3e3',
                }}
              />
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  alignContent: 'flex-start',
                }}>
                {categories.map((text, index) => (
                  <Typography
                    align="right"
                    key={index}
                    width="200px"
                    maxHeight="50px"
                    onClick={() => navigate('/product')}
                    sx={{
                      color: '#786665',
                      pl: '30px',
                      mb: '10px',
                      fontSize: '16px',
                      textAlign: 'left',
                      fontWeight: '600',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#4bc1f4',
                      },
                    }}>
                    {text}
                  </Typography>
                ))}
              </Stack>
              <CardMedia
                component="img"
                image="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/1-den-dc08097-1.jpg"
                alt="unsplash img"
                sx={{
                  width: '220px',
                  height: '280px',
                  objectFit: 'contain',
                  backgroundColor: '#e3e3e3',
                }}
              />
            </Stack>
          </Box>
        )}
        {colState && (
          <Box
            onMouseOver={() => setColState(true)}
            onMouseLeave={() => setColState(false)}
            sx={{
              zIndex: '999999',
              px: '91px',
              mt: '-13px',
            }}>
            <Stack
              sx={{
                py: '40px',
                px: '30px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              direction="row">
              <CardMedia
                component="img"
                image="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09062/2-CAM-DC09062.jpg"
                alt="unsplash img"
                sx={{
                  width: '220px',
                  height: '280px',
                  objectFit: 'contain',
                  backgroundColor: '#e3e3e3',
                }}
              />
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  alignContent: 'flex-start',
                }}>
                {collections.map((text, index) => (
                  <Typography
                    align="right"
                    key={index}
                    width="200px"
                    maxHeight="50px"
                    onClick={() => navigate('/product')}
                    sx={{
                      color: '#786665',
                      pl: '30px',
                      mb: '10px',
                      fontSize: '16px',
                      textAlign: 'left',
                      fontWeight: '600',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#4bc1f4',
                      },
                    }}>
                    {text}
                  </Typography>
                ))}
              </Stack>
              <CardMedia
                component="img"
                image="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09062/2-CAM-DC09062.jpg"
                alt="unsplash img"
                sx={{
                  width: '220px',
                  height: '280px',
                  objectFit: 'contain',
                  backgroundColor: '#e3e3e3',
                }}
              />
            </Stack>
          </Box>
        )}
      </AppBar>
      {openDrawer && (
        <Drawer 
          sx={{ 
            width: '300px', 
            backgroundColor: '#fff', 
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '300px',
              boxSizing: 'border-box',
              transition: 'ease-out 0.5s'
            }, 
            position: 'relative',
            transition: 'ease-out 0.5s'
          }} 
          variant="persistent"
          open={openDrawer}
          className='header_drawer'
        >
          <IconButton 
            sx={{ 
              position: 'absolute', 
              top: '5px', 
              right: '5px' 
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            display='flex'
            alignItems='center'
            sx={{
              height: '60px',
              fontSize: '35px',
              pl: '25px',
              py: '10px',
              fontStyle: 'italic',
              fontWeight: '800',
              borderBottom: (openDrawer && '1px solid #000')
            }}
          >
            SHOPIFY
          </Typography>
          <Stack>
            <RenderSideButton />
          </Stack>
        </Drawer>
      )}
    </React.Fragment>
  );
};
import React from "react";
import { useState } from "react";
import {
  Box,
  Stack,
  Breadcrumbs,
  Link,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Slider,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  RadioGroup,
  Radio,
  Autocomplete,
  TextField,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Pagination
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const marks = [
  {
    value: 0,
    label: '5$',
  },
  {
    value: 100,
    label: '499$',
  },
];

export const Product = () => {
  const [price, setPrice] = useState(300);
  const [size, setSize] = useState("S");

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  function handlePrice(value) {
    if(value === 0){
      setPrice(5)
      return
    }
    if(value === 100) {
      setPrice(499)
      return
    }
    setPrice(value*4)
  }

  function handleColor(value) {
    if(value === "Blue")
      return "secondary"
    if(value === "White")
      return "#D3D3D3"
    if(value === "Pink")
      return "#f59c96"
    if(value === "Green")
      return "#09a35b"
    if(value === "Red")
      return "#ce1211"
    return "#000"
  }

  const RenderProduct =()=>{
    let list = [];
    for(let i = 0; i < 20; i++) {
      list.push(
        <Card elevation={0} sx={{ width: '280px', height: '350px', mt: 2 }} key={i}>
          <Box sx={{ position: 'absolute', ml: 0.5, mt: 0.5 }}>
            <Typography sx={{ color: '#fff', backgroundColor: '#000', mb: 1, textAlign: 'center', fontSize: 15, px: 1 }}>New</Typography>
            <Typography sx={{ backgroundColor: '#f33e5d', color: '#fff', textAlign: 'center', fontSize: 15 }}>-20%</Typography>
          </Box>
          <CardMedia 
            component='img' 
            image='https://picsum.photos/1900/800' 
            alt='unsplash img'
            sx={{ width: '100%', height: '280px' }}
          />
          <CardContent sx={{ pt: 0, pl: 0, pr: 0 }}>
            <Typography variant='h6' component='div' sx={{ pt: 1, fontWeight: '600', fontSize: 18 }}>
              Luiz Vitton Lace Suit
            </Typography>
            <Stack direction='row' display="flex" justifyContent="space-between">
              <Typography variant='h6' component='div' sx={{ fontSize: 18, fontWeight: '600' }}>
                $180.00
              </Typography>
              <Typography 
                variant='h6' 
                component='div' 
                sx={{ 
                  textDecoration: 'line-through', 
                  color: '#f5647d', 
                  fontSize: 16, 
                  lineHeight: '1.8',
                  verticalAlign: 'middle', 
                  pt: 0.1,
                  ml: -4 
                }}
              >
                $210.90
              </Typography>
              <Rating size='small' sx={{ pt: 0.5 }}></Rating>
            </Stack>
          </CardContent>
        </Card>
      )
    }
    return list
  }

  return (
    <React.Fragment>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ width: '80%', mt: 20, mb: 5 }}>
          <Stack sx={{ py: 4 }}>
            <Breadcrumbs aria-label='breadcrumbs' separator='>'>
              <Link href="#" sx={{ color: '#aaaab2', textDecoration: 'none' }}>Home</Link>
              <Link href="#" sx={{ color: '#aaaab2', textDecoration: 'none' }}>Shop All</Link>
              <Link href="#" sx={{ color: '#aaaab2', textDecoration: 'none' }}>Shop All</Link>
            </Breadcrumbs>
          </Stack>
          <Box sx={{ display: 'flex' }}>
            <Stack sx={{width: '300px', flexShrink: 0 }}>
              <Accordion 
                elevation={0}
                defaultExpanded={true}
                sx={{
                  "&.MuiAccordion-root:before": {
                    height: 0
                }}}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Categories</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  {['Tops(64)', 'Dresses(54)', 'T-shirts(29)', 'Jeans(18)'].map((text, index) => (
                    <FormControlLabel 
                      key={text}
                      label={text}
                      control={<Checkbox />}
                      sx={{ fontSize: 20, display: 'block' }}
                    />
                  ))}
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion 
                elevation={0}
                defaultExpanded={true}
                sx={{
                  "&.MuiAccordion-root:before": {
                    height: 0
                }}}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Brand</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  {['URBANIC', 'BoStreet', 'Tokyo', 'Vero', 'H&M'].map((text) => (
                    <FormControlLabel 
                      key={text}
                      label={text}
                      control={<Checkbox />}
                      sx={{ fontSize: 20, display: 'block' }}
                    />
                  ))}                
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion 
                elevation={0}
                defaultExpanded={true}
                sx={{
                  "&.MuiAccordion-root:before": {
                    height: 0
                }}}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Size</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <ToggleButtonGroup
                    value={size}
                    exclusive
                    onChange={handleSize}
                    aria-label="size"
                  >
                    {['S', 'M', 'L', 'XL', 'XXL'].map((text) => (
                      <ToggleButton 
                        value={text} 
                        aria-label={text} 
                        disableRipple
                        sx={{
                          fontWeight: 700,
                          border: "1px solid #a8abb2",
                          borderRadius: 0,
                          py: '10px',
                          px: '15px'
                        }}
                      >
                        {text}
                      </ToggleButton>
                    ))} 
                  </ToggleButtonGroup>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion 
                elevation={0}
                defaultExpanded={true}
                sx={{
                  "&.MuiAccordion-root:before": {
                    height: 0
                }}}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Color</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Blue"
                    name="radio-buttons-group"
                  >
                    {['Blue', 'Black','White', 'Pink', 'Green', 'Red'].map((text) => (
                      <FormControlLabel 
                        value={text} 
                        control={<Radio />} 
                        label={text} 
                        sx={{
                          '& .Mui-checked': {
                            color: (handleColor(text)),
                          }
                        }} 
                      />
                    ))} 
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion 
                elevation={0}
                defaultExpanded={true}
                sx={{
                  "&.MuiAccordion-root:before": {
                    height: 0
                }}}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Price</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: 'center', mb: 1 }}>$5 - ${price}</Typography>
                  <Slider
                    aria-label="Always visible"
                    step={1}
                    marks={marks}
                    valueLabelDisplay="on"
                    defaultValue={75}
                    disableSwap                    
                    sx={{ color: "#0f172a", "& .MuiSlider-valueLabel": { display: 'none'} }}
                    onChange={(e) => handlePrice(e.target.value)}
                  />                
                </AccordionDetails>
              </Accordion>
            </Stack>
            <Box component="main" sx={{ flexGrow: 1, px: 4, py: 2 }}>
              <Stack display="flex" justifyContent="space-between" alignItems="center" direction='row' mr={1}>
                <Typography sx={{ fontWeight: 600 }}>Showing 1-16 of 96 products</Typography>
                <Autocomplete
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => 
                    <TextField
                      {...params}
                      variant="outlined"
                      defaultValue={[top100Films[0]]}
                      placeholder="Sort options"
                      sx={{ pl: 1, fontWeight: 700 }} 
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <>
                            <InputAdornment sx={{ pl: 1 }} position="start">
                              <Typography sx={{ fontWeight: 700 }}>
                                Sort by:
                              </Typography>
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                          </>
                        )
                      }}
                    />
                  }
                  sx={{ width: '350px' }}
                />
              </Stack>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap='wrap'
                mt={2}
              >
                <RenderProduct />
              </Box>
              <Stack 
                display="flex"
                justifyContent="center"
                alignItems="center" 
                spacing={2}
                p={4}
              >
                <Pagination count={10} shape="rounded" />
              </Stack>
            </Box>
          </Box>
        </Box>    
      </Box>    
    </React.Fragment>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];
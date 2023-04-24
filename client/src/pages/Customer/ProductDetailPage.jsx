import React from 'react';
import { useState } from 'react';
import {
  Box,
  Stack,
  Breadcrumbs,
  Link,
  ButtonBase,
  Typography,
  FormControlLabel,
  ToggleButtonGroup,
  ToggleButton,
  RadioGroup,
  Radio,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import '../../styles/ProductDetailPage.css';

export const ProductDetailPage = () => {
  const [mainImg, setMainImg] = useState('https://picsum.photos/1900/800');
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(1);

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleQuantity = (val) => {
    let tmp = quantity;

    if (val === 0) tmp++;
    else tmp--;

    if (tmp >= 1) setQuantity(tmp);
    else setQuantity(1);
  };

  const RenderImage = () => {
    let list = [];
    for (let i = 0; i < 3; i++) {
      list.push(
        <ButtonBase
          disableRipple
          key={i}
          onClick={(event) => setMainImg(event.target.currentSrc)}>
          <CardMedia
            component="img"
            image="https://picsum.photos/1900/800"
            alt="unsplash img"
          />
        </ButtonBase>
      );
    }
    return list;
  };

  const RenderBestSeller = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <Card className="product-detail_recommend-image" elevation={0} key={i}>
          <Box className="product-detail_img-detail">
            <Typography>New</Typography>
            <Typography>-20%</Typography>
          </Box>
          <CardMedia
            component="img"
            image="https://picsum.photos/1900/800"
            alt="unsplash img"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Luiz Vitton Lace Suit
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between">
              <Typography variant="h6" component="div">
                $180.00
              </Typography>
              <Typography variant="h6" component="div">
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

  const RenderSellerComment = () => {
    return (
      <Stack className="seller_comment">
        <Stack>
          <Typography>Seller</Typography>
          <Typography>6 days ago</Typography>
        </Stack>
        <Typography className="product_comment">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          aliquid dolor iusto ullam qui ipsa ducimus neque, nobis eos hic amet
          labore eligendi error voluptatibus quidem tempore odit temporibus
          harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          optio, natus aliquid minima blanditiis officia magnam omnis nihil ea
          quibusdam accusamus placeat distinctio reiciendis ex necessitatibus
          molestias fuga mollitia eos!
        </Typography>
      </Stack>
    );
  };

  const RenderAllComment = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <Stack
          className={
            'product-detail_comment-element ' +
            (i === 4 && 'remove-border-bottom')
          }>
          <Stack>
            <Typography>John Deo</Typography>
            <Typography>6 days ago</Typography>
          </Stack>
          <Typography className="product_comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            aliquid dolor iusto ullam qui ipsa ducimus neque, nobis eos hic amet
            labore eligendi error voluptatibus quidem tempore odit temporibus
            harum!
          </Typography>
          {i % 2 === 0 && <RenderSellerComment />}
        </Stack>
      );
    }
    return list;
  };

  const RenderQuestion = () => {
    return (
      <Stack className="product-detail_comment-content">
        <Stack direction="row">
          <TextField id="standard-name" placeholder="Ask seller a question" />
          <Button variant="contained" disableElevation>
            Ask Question
          </Button>
        </Stack>
        <RenderAllComment />
        <Button variant="contained" disableElevation>
          Load More Question
        </Button>
      </Stack>
    );
  };

  const RenderRating = () => {
    return (
      <Stack className="product-detail_comment-content">
        <Stack className="product-detail_comment-content-description">
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            cumque dolores harum temporibus accusantium est, quisquam, molestiae
            exercitationem non nam sapiente laboriosam nemo repudiandae?
            Recusandae cupiditate unde suscipit exercitationem possimus.
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            cumque dolores harum temporibus accusantium est, quisquam, molestiae
            exercitationem non nam sapiente laboriosam nemo repudiandae?
            Recusandae cupiditate unde suscipit exercitationem possimus.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            doloribus distinctio optio.
          </Typography>
          <List>
            {[1, 2, 3].map((value) => (
              <ListItem key={value} disableGutters>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            cumque dolores harum temporibus accusantium est, quisquam, molestiae
            exercitationem non nam sapiente laboriosam nemo repudiandae?
            Recusandae cupiditate unde suscipit exercitationem possimus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Natus iste iusto
            facilis assumenda asperiores ducimus ea officia. Eius, temporibus
            dicta esse libero accusantium error nam itaque eos, quam enim
            maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid eaque molestiae eius ducimus totam incidunt
            illum commodi ea. Itaque cupiditate tempora aspernatur
            exercitationem hic corrupti quibusdam aperiam facilis assumenda.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ratione laborum nulla nostrum, itaque cum architecto nemo saepe
            obcaecati vel quae aliquid facere ducimus quod temporibus ut magni
            ullam dignissimos!
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            cumque dolores harum temporibus accusantium est, quisquam, molestiae
            exercitationem non nam sapiente laboriosam nemo repudiandae?
            Recusandae cupiditate unde suscipit exercitationem possimus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Natus iste iusto
            facilis assumenda asperiores ducimus ea officia. Eius, temporibus
            dicta esse libero accusantium error nam itaque eos, quam enim
            maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid eaque molestiae eius ducimus totam incidunt
            illum commodi ea. Itaque cupiditate tempora aspernatur
            exercitationem hic corrupti quibusdam aperiam facilis assumenda.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ratione laborum nulla nostrum, itaque cum architecto nemo saepe
            obcaecati vel quae aliquid facere ducimus quod temporibus ut magni
            ullam dignissimos!
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const RenderDescription = () => {
    return <Stack className="product-detail_comment-content"></Stack>;
  };

  return (
    <React.Fragment>
      <Box className="product-detail_container">
        <Box className="product-detail_wrapper">
          <Stack className="product-detail_breadcrumbs">
            <Breadcrumbs aria-label="breadcrumbs" separator=">">
              <Link href="#">Home</Link>
              <Link href="#">Shop All</Link>
              <Link href="#">Shop All</Link>
            </Breadcrumbs>
          </Stack>
          <Box className="product-detail_content">
            <Stack className="product-detail_content-side">
              <RenderImage />
            </Stack>
            <Box className="product-detail_main">
              <Stack className="product-detail_main-img">
                <CardMedia component="img" image={mainImg} alt="unsplash img" />
              </Stack>
              <Stack className="product-detail_main-detail">
                <Typography variant="h6" component="div">
                  Luiz Vitton Lace Suit
                </Typography>
                <Stack direction="row">
                  <Rating size="small" value={5}></Rating>
                  <Typography variant="h6" component="div">
                    (12)
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography variant="h6" component="div">
                    $180.00
                  </Typography>
                  <Typography variant="h6" component="div">
                    $210.90
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant="h6" component="div">
                    Color:
                  </Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={colors[0]}
                    name="radio-buttons-group"
                    row>
                    {colors.map((text) => (
                      <FormControlLabel
                        key={text}
                        value={text}
                        control={<Radio />}
                        sx={{
                          '& .Mui-checked': {
                            color: text,
                          },
                        }}
                      />
                    ))}
                  </RadioGroup>
                </Stack>
                <Stack>
                  <Typography variant="h6" component="div">
                    Size:
                  </Typography>
                  <ToggleButtonGroup
                    value={size}
                    exclusive
                    onChange={handleSize}
                    aria-label="size">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((text) => (
                      <ToggleButton
                        key={text}
                        value={text}
                        aria-label={text}
                        disableRipple>
                        {text}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Stack>
                <Stack>
                  <Typography variant="h6" component="div">
                    Quantity:
                  </Typography>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">
                    <Button
                      disableRipple
                      endIcon={<RemoveIcon />}
                      onClick={() => handleQuantity(1)}></Button>
                    <Button
                      disableRipple
                      sx={{
                        fontSize: '16px',
                      }}>
                      {quantity}
                    </Button>
                    <Button
                      disableRipple
                      startIcon={<AddIcon />}
                      onClick={() => handleQuantity(0)}></Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row">
                  <Button>Add to Cart</Button>
                  <Button>Buy Now</Button>
                  <IconButton aria-label="delete">
                    <FavoriteIcon />
                  </IconButton>
                </Stack>
                <Stack direction="column">
                  <Box>
                    <Typography variant="h6" component="div">
                      Product Code: &nbsp;
                    </Typography>
                    <Typography variant="h6" component="div">
                      #20344690
                    </Typography>
                  </Box>
                  <Box>
                    <LocalShippingOutlinedIcon />
                    &nbsp;
                    <Typography variant="h6" component="div">
                      FREE delivery Friday, 14 October on first order.
                      <Typography variant="h6" component="span">
                        Details
                      </Typography>
                    </Typography>
                  </Box>
                  <Box>
                    <UpdateOutlinedIcon />
                    &nbsp;
                    <Typography variant="h6" component="div">
                      Delivers in: 3-7 Working Days. &nbsp;
                    </Typography>
                    <Typography variant="h6" component="div">
                      Learn More
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box className="product-detail_comment">
          <Stack className="product-detail_comment-header" direction="row">
            <Button
              className={tab === 0 && 'border_bottom'}
              onClick={() => setTab(0)}
              disableRipple>
              Product Description
            </Button>
            <Button
              className={tab === 1 && 'border_bottom'}
              onClick={() => setTab(1)}
              disableRipple>
              Rating & Reviews
            </Button>
            <Button
              className={tab === 2 && 'border_bottom'}
              onClick={() => setTab(2)}
              disableRipple>
              Questions
            </Button>
          </Stack>
          {tab === 0 && <RenderDescription />}
          {tab === 1 && <RenderRating />}
          {tab === 2 && <RenderQuestion />}
          <Stack className="product-detail_recommend">
            <Typography gutterBottom variant="h6" component="div">
              Silimar Items You Might Like
            </Typography>
            <Stack>
              <RenderBestSeller />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

const colors = ['#2434c7', '#000', '#f04439', 'red'];
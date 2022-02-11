import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { productItems } from './productItems';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ProductDetails from './productsDetails/ProductsDetails';

const Products = () => {
  // const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: 'flex',
        direction: 'row',
        justifyContent: 'start',
        alignItems: 'start',
      }}
    >
      {productItems.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={item.id}
          // onClick={() => navigate(item.route)}
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt="green iguana"
            />

            <CardContent>
              <Link href={'/product/' + item.id} underline="none">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {item.title}
                </Typography>
              </Link>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 13 }}
              >
                {item.description}
              </Typography>
              <Grid sx={{ display: 'flex' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: 1,
                    mt: 1,
                  }}
                >
                  {item.price}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 16,
                    mt: 1,
                    ml: 1.5,
                    color: 'text.secondary',
                    textDecoration: 'line-through',
                    fontStyle: 'italic',
                    letterSpacing: 1,
                  }}
                >
                  {item.discount}
                </Typography>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end', mt: -2 }}>
              <Button
                size="medium"
                variant="outlined"
                disableElevation
                startIcon={<AddShoppingCartRoundedIcon />}
              >
                {item.button}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

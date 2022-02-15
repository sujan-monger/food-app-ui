import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';

const Welcome = () => {
  return (
    <Grid container>
      <Grid sx={{ display: 'flex', p: '30px' }}>
        <Grid>
          <Typography
            variant="h4"
            sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}
          >
            Welcome back <br />
            Sir/Madam
          </Typography>
          <Typography sx={{ fontSize: 14, mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing
            elit.!
          </Typography>
          <Button
            variant="contained"
            size="large"
            disableElevation
            sx={{
              textTransform: 'none',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'end',
              height: 44,
              borderRadius: 2,
              boxShadow:
                'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
              '&.MuiButton-contained': {
                '&:hover': {
                  backgroundColor: '#EA2B46',
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                ml: -1,
                mr: -1,
              }}
            >
              Order Now
            </Typography>
          </Button>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image="https://photos.smugmug.com/Bhutan/i-Bpj4hHT/0/X3/bhutanese-food-93-X3.jpg"
            sx={{
              borderRadius: 4,
              boxShadow:
                'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;

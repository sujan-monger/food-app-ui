import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';
import CartsCheckOutTables from './data/CartsCheckOutTables';
import Summary from './data/orderSummaryTable';
import { Typography, Button } from '@mui/material';
import { ChevronRightRounded } from '@mui/icons-material';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import Link from '@mui/material/Link';

const drawerWidth = 240;

const Carts = () => {
  return (
    <Container maxWidth="false">
      <Grid
        container
        spacing={3}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: -5,
          mb: 8,
        }}
      >
        <Grid item xs={12} md={4} lg={12}>
          <Paper
            sx={{
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CartsCheckOutTables />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={12}>
          <Paper elevation={0} sx={{ boxShadow: 'none' }}>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
              Order Summary
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper
            sx={{
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Summary />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={12}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              boxShadow: 'none',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link
                href="#"
                underline="none"
                color="text.primary"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <ChevronLeftRounded />
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  Continue Shopping
                </Typography>
              </Link>
            </Grid>
            <Button
              variant="contained"
              size="large"
              disableElevation
              endIcon={<ChevronRightRounded />}
              sx={{
                textTransform: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                height: 50,
                borderRadius: 2,
                pl: 8,
                pr: 8,
                boxShadow:
                  'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
                '&.MuiButton-contained': {
                  '&:hover': {
                    backgroundColor: '#EA2B46',
                  },
                },
              }}
            >
              <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                Check Out
              </Typography>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Carts;

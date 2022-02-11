import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './data/chart/Chart';
import OrdersNo from './data/ordersNo/OrdersNo';
import OrdersNo1 from './data/ordersNo/OrdersNo1';
import OrdersNo2 from './data/ordersNo/OrdersNo2';
import OrdersNo3 from './data/ordersNo/OrdersNo3';
import MenuItems from './data/orders/MenuItems';
import OrderSummary from './data/orderSummary/OrderSummary';
import { Container } from '@mui/material';
import Welcome from './data/welcome/Welcome';
import FeatureMenu from './data/featureMenu/FeatureMenu';
import { Typography } from '@mui/material';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/material/Link';

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Container maxWidth="false" sx={{ mb: 4 }}>
      <Grid
        container
        spacing={3}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Grid item xs={12} md={7} lg={7}>
          <Paper
            sx={{
              mt: -2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
              backgroundColor: 'rgb(255, 227, 213)',
            }}
          >
            <Welcome />
          </Paper>
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 500, mt: -1, mb: 2 }}
          >
            Feature Menu Items
          </Typography>

          {/* Features */}
          <Grid>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
              }}
            >
              <FeatureMenu />
            </Paper>
          </Grid>
        </Grid>

        {/* OrdersNo */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
            }}
          >
            <OrdersNo />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
            }}
          >
            <OrdersNo1 />
          </Paper>
        </Grid>

        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
            }}
          >
            <OrdersNo2 />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
            }}
          >
            <OrdersNo3 />
          </Paper>
        </Grid>
        {/* OrderSummary */}
        <Grid item xs={12} md={12} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 320,
              borderRadius: 4,
            }}
          >
            <OrderSummary />
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 320,
              borderRadius: 4,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={12}>
          <Paper elevation={0} sx={{ boxShadow: 'none' }}>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
              Menu Items
            </Typography>
          </Paper>
        </Grid>
        {/* Menu Items */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
            }}
          >
            <MenuItems />
            <Grid item xs={12} md={4} lg={12}>
              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'end',
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
                    href="shops"
                    underline="none"
                    color="text.primary"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                      See All Menu Items
                    </Typography>
                    <ChevronRightRounded />
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

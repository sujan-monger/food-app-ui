import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './data/chart/Chart';
import Deposits from './data/deposits/Deposits';
import Orders from './data/orders/Orders';
import OrderSummary from './data/orderSummary/OrderSummary';
import { Container } from '@mui/material';

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
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'red',
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Deposits />
          </Paper>
        </Grid>

        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Deposits />
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
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

import React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

const OrderSummary = () => {
  return (
    <Box>
      <Title>Order Summary</Title>
      <Typography paragraph>Lorem ipsum dolor sit amet, consectetur</Typography>

      <Toolbar />
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all orders
        </Link>
      </div>
    </Box>
  );
};

export default OrderSummary;

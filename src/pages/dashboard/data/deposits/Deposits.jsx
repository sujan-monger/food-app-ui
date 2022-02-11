import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <Box>
      <Typography component="p" variant="h4">
        12
      </Typography>
      <Title>Total Orders</Title>
      <Toolbar />
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all orders
        </Link>
      </div>
    </Box>
  );
}

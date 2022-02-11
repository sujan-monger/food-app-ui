import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Title from '../Title';
import Grid from '@mui/material/Grid';

function preventDefault(event) {
  event.preventDefault();
}

export default function ordersNo2() {
  return (
    <Box>
      <Grid sx={{ mb: -5 }}>
        <Typography component="p" variant="h4" sx={{ mb: 1 }}>
          12
        </Typography>
        <Title>Orders Cancelled</Title>
      </Grid>
      <Toolbar />
      <div>
        <Link
          color="text.primary"
          href="#"
          underline="none"
          onClick={preventDefault}
        >
          View Cancelled Orders
        </Link>
      </div>
    </Box>
  );
}

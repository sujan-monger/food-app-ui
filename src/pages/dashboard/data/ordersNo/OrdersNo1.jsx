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

export default function Deposits() {
  return (
    <Box>
      <Grid sx={{ mb: -5 }}>
        <Typography component="p" variant="h4" sx={{ mb: 1, fontWeight: 500 }}>
          15
        </Typography>
        <Title>Total Delivered</Title>
      </Grid>
      <Toolbar />
      <Grid>
        <Link
          color="text.primary"
          href="#"
          underline="none"
          onClick={preventDefault}
          sx={{ fontSize: 14, fontWeight: 500 }}
        >
          View Delivered
        </Link>
      </Grid>
    </Box>
  );
}
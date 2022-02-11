import React from 'react';
import Grid from '@mui/material/Grid';

const drawerWidth = 260;

const Payments = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        // paddingRight: '20px',
        padding: '24px 24px 24px 24px',
      }}
    ></Grid>
  );
};

export default Payments;

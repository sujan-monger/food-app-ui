import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const drawerWidth = 260;

const Products = () => {
  //   useEffect(() => {}, []);

  return (
    <Container maxWidth="false">
      <Grid
        container
        spacing={3}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: -6,
          mb: 8,
        }}
      ></Grid>
    </Container>
  );
};

export default Products;

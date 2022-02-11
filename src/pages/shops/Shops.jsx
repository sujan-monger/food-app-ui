import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Products from './data/Products';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  borderColor: 'red',
  backgroundColor: '#faf6f6',
  marginBottom: 10,
  '&:hover': {
    backgroundColor: '#faf6f6',
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#374151',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

const Shops = () => {
  return (
    <Container maxWidth="false" sx={{ md: 4 }}>
      <Grid
        container
        spacing={3}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: -2,
          mb: 3,
        }}
      >
        <Search sx={{ ml: 2.5 }}>
          <SearchIconWrapper>
            <SearchRoundedIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search items…" sx={{ fontSize: 13 }} />
        </Search>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 0.5,
          }}
        >
          <Button
            size="medium"
            variant="outlined"
            disableElevation
            endIcon={<FilterListRoundedIcon sx={{ color: '#374151' }} />}
            sx={{
              textTransform: 'none',
              borderColor: '#fff',
              '&.MuiButton-outlined': {
                color: '#374151',
                fontSize: '13px',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#374151',
                  borderColor: '#fff',
                },
              },
            }}
          >
            Filters
          </Button>
          <Button
            size="medium"
            variant="text"
            disableElevation
            endIcon={<ExpandMoreRoundedIcon sx={{ color: '#374151' }} />}
            sx={{
              textTransform: 'none',
              '&.MuiButton-text': {
                color: '#374151',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#374151',
                },
              },
            }}
          >
            <Typography sx={{ fontSize: 13, fontWeight: 700, mr: 1 }}>
              Sort By:
            </Typography>
            <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
              Price: Low-High
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Grid item xs>
          <Products />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shops;

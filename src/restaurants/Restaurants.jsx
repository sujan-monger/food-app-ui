import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import { Container, Paper } from '@mui/material';
import Header from './header/Header';
import Routing from './Routing';

const Restaurants = () => {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  useEffect(() => {});

  return (
    <Grid container>
      <Header title={title} />
      <Outlet />
    </Grid>
  );
};

export default Restaurants;

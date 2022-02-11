import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Header from './components/header/Header';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
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
}

export default App;

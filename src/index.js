import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Shops from './pages/shops/Shops';
import Carts from './pages/carts/Carts';
import Profile from './pages/profile/Profile';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/shops" element={<Shops />}>
            <Route path="/shops/:id" element={<Shops />} />
          </Route>
          <Route exact path="/carts" element={<Carts />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

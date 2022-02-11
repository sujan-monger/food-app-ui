import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders';
// import Carts from './pages/carts/Carts';
// import Payments from './pages/payments/Payments';
// import Profile from './pages/profile/Profile';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import Restaurants from './Restaurants';

const Routing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Restaurants />}>
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="orders" element={<Orders />} />
            {/* <Route exact path="shops" element={<Shops />}>
              <Route path=":id" element={<Shops />} />
            </Route>
            <Route exact path="carts" element={<Carts />} />
            <Route exact path="payments" element={<Payments />} />
            <Route exact path="profile" element={<Profile />} /> */}
          </Route>
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </ThemeProvider>
  );
};

export default Routing;

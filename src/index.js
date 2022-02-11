import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Shops from './pages/shops/Shops';
import Carts from './pages/carts/Carts';
import Payments from './pages/payments/Payments';
import Profile from './pages/profile/Profile';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="shops" element={<Shops />}>
            <Route path=":id" element={<Shops />} />
          </Route>
          <Route exact path="carts" element={<Carts />} />
          <Route exact path="payments" element={<Payments />} />
          <Route exact path="profile" element={<Profile />} />
          {/* <Route exact path="restaurant" element={<Restaurant />} /> */}
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
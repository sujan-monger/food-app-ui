import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import { navBarItems } from './navBarItems';
import { useNavigate, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';

const navbarStyles = {
  icons: {
    color: '#637381',
    minWidth: 'auto',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    selected: {
      color: '#EA2B46',
      width: '22px',
      height: '22px',
      minWidth: 'auto',
      marginRight: '10px',
      display: 'flex',
      alignItems: 'center',
    },
  },

  text: {
    selected: {
      '& span': {
        fontSize: '14px',
        fontWeight: 600,
      },
    },
    '& span': {
      fontSize: '14px',
    },
  },
};

const Navbar = () => {
  const [path, setPath] = React.useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const activeRoute = (route) => {
    return `/${route}` === path;
  };

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location, setPath]);

  return (
    <nav>
      <Toolbar
        sx={{
          color: 'primary',
          height: '80px',
        }}
      >
        <Link href="/food-app-ui/dashboard" underline="none">
          <Typography variant="h5" color="primary" fontWeight="700">
            Food App
          </Typography>
        </Link>
      </Toolbar>

      <List>
        {navBarItems.map((item, index) => (
          <ListItem
            button
            key={item.id}
            onClick={() => navigate(item.route)}
            selected={activeRoute(item.route)}
          >
            <ListItemIcon
              sx={
                activeRoute(item.route)
                  ? navbarStyles.icons.selected
                  : navbarStyles.icons
              }
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={
                activeRoute(item.route)
                  ? navbarStyles.text.selected
                  : navbarStyles.text
              }
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Navbar;

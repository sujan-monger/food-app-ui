import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Navbar from '../navbar/Navbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const drawerWidth = 260;

const Header = ({ window, title }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: '#fff',
          display: 'flex',
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 'none',
        }}
      >
        <Box>
          <Toolbar>
            <IconButton
              color="primary"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <NotesRoundedIcon sx={{ color: '#637381' }} />
            </IconButton>

            <IconButton>
              <SearchRoundedIcon sx={{ color: '#637381' }} />
            </IconButton>
          </Toolbar>
        </Box>
        <Box>
          <Toolbar>
            <Tooltip title="You have no message!" arrow>
              <IconButton style={{ marginRight: '4px' }}>
                <Badge badgeContent={0} showZero color="primary">
                  <EmailRoundedIcon sx={{ color: '#637381' }} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="You have 8 unread notifications!" arrow>
              <IconButton style={{ marginRight: '4px' }}>
                <Badge badgeContent={8} color="primary">
                  <NotificationsRoundedIcon sx={{ color: '#637381' }} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="You have 2 items in your cart!" arrow>
              <IconButton style={{ marginRight: '20px' }}>
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartRoundedIcon sx={{ color: '#637381' }} />
                </Badge>
              </IconButton>
            </Tooltip>

            <IconButton onClick={handleMenu} sx={{ p: 0 }}>
              <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="nav-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem sx={{ fontSize: '14px' }}>
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                My Profile
              </MenuItem>
              <Divider />
              <MenuItem sx={{ fontSize: '14px' }}>
                <ListItemIcon>
                  <SwitchAccountRoundedIcon sx={{ color: '#637381' }} />
                </ListItemIcon>
                Switch Account
              </MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: '#637381' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile*/}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
            '& .Mui-selected': {
              backgroundColor: 'rgba(234, 43, 70, 0.1)',
              color: '#EA2B46',
            },
            '& .Mui-selected:hover': {
              backgroundColor: 'rgba(234, 43, 70, 0.1)',
              color: '#394A59',
            },
          }}
        >
          <Navbar />
        </Drawer>
        {/* Desktop & Tablet */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
            '& .Mui-selected': {
              backgroundColor: 'rgba(234, 43, 70, 0.1)',
              color: '#394A59',
            },
            '& .Mui-selected:hover': {
              backgroundColor: 'rgba(234, 43, 70, 0.1)',
              color: '#394A59',
            },
          }}
          open
        >
          <Navbar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pl: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="false" sx={{ mb: 4, mt: 7, ml: -0.5 }}>
          <Grid container spacing={3}>
            <Typography
              variant="h5"
              gutterBottom
              component="h2"
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'capitalize',
              }}
            >
              {title}
            </Typography>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;

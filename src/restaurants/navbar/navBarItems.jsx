import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';

export const navBarItems = [
  {
    id: 0,
    icon: <GridViewRoundedIcon />,
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    id: 1,
    icon: <ShoppingBagRoundedIcon />,
    label: 'Shops',
    route: 'shops',
  },
  {
    id: 2,
    icon: <ShoppingCartRoundedIcon />,
    label: 'Carts',
    route: 'carts',
  },
  {
    id: 3,
    icon: <PaymentsRoundedIcon />,
    label: 'Payments',
    route: 'payments',
  },
  {
    id: 4,
    icon: <AccountCircleRoundedIcon />,
    label: 'Profile',
    route: 'profile',
  },
  {
    id: 5,
    icon: <SwitchAccountRoundedIcon />,
    label: 'Restaurant Dashboard',
    route: 'restaurant',
  },
];

import { Grid, IconButton, Typography } from '@mui/material';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

export const DataTable = [
  {
    id: 0,
    image:
      'https://photos.smugmug.com/Bhutan/i-Bpj4hHT/0/X3/bhutanese-food-93-X3.jpg',
    title: 'Ema Datsi',
    description: 'Lorem ipsum dolor sit, amet consec adipisicing',
    price: 'Nu.150',
    quantity: (
      <Grid container display="table-cell">
        <Grid
          sx={{
            border: 1,
            color: 'text.secondary',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton sx={{ color: '#374151' }}>
            <RemoveRoundedIcon />
          </IconButton>
          <Typography
            sx={{
              color: 'text.primary',
              fontSize: 16,
              fontWeight: 500,
              mr: 0.5,
              ml: 0.5,
            }}
          >
            2
          </Typography>
          <IconButton sx={{ color: '#374151' }}>
            <AddRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    ),
    totalprice: 'Nu.300',
    button: (
      <IconButton sx={{ color: '#374151' }}>
        <DeleteOutlineRoundedIcon />
      </IconButton>
    ),
    route: 'dashboard',
  },
  {
    id: 1,
    image:
      'https://photos.smugmug.com/Bhutan/i-Bpj4hHT/0/X3/bhutanese-food-93-X3.jpg',
    title: 'Kewa Datsi',
    description: 'Lorem ipsum dolor sit, amet consec adipisicing',
    price: 'Nu.80',
    quantity: (
      <Grid container display="table-cell">
        <Grid
          sx={{
            border: 1,
            color: 'text.secondary',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton sx={{ color: '#374151' }}>
            <RemoveRoundedIcon />
          </IconButton>
          <Typography
            sx={{
              color: 'text.primary',
              fontSize: 16,
              fontWeight: 500,
              mr: 0.5,
              ml: 0.5,
            }}
          >
            3
          </Typography>
          <IconButton sx={{ color: '#374151' }}>
            <AddRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    ),
    totalprice: 'Nu. 80',
    button: (
      <IconButton sx={{ color: '#374151' }}>
        <DeleteOutlineRoundedIcon />
      </IconButton>
    ),
    route: 'dashboard',
  },
  {
    id: 2,
    image:
      'https://photos.smugmug.com/Bhutan/i-Bpj4hHT/0/X3/bhutanese-food-93-X3.jpg',
    title: 'Chaumen',
    description: 'Lorem ipsum dolor sit, amet consec adipisicing',
    price: 'Nu.120',
    quantity: (
      <Grid container display="table-cell">
        <Grid
          sx={{
            border: 1,
            color: 'text.secondary',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton sx={{ color: '#374151' }}>
            <RemoveRoundedIcon />
          </IconButton>
          <Typography
            sx={{
              color: 'text.primary',
              fontSize: 16,
              fontWeight: 500,
              mr: 0.5,
              ml: 0.5,
            }}
          >
            3
          </Typography>
          <IconButton sx={{ color: '#374151' }}>
            <AddRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    ),
    totalprice: 'Nu. 80',
    button: (
      <IconButton sx={{ color: '#374151' }}>
        <DeleteOutlineRoundedIcon />
      </IconButton>
    ),
    route: 'dashboard',
  },
];

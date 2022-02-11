import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-contained': {
            '&:hover': {},
          },
          '&.MuiButton-outlined': {
            fontSize: '12px',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#EA2B46',
              color: '#fff',
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 12,
          // borderRadius: 8,
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(244, 246, 248)',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          minWidth: '0px',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          margin: '0px 20px 5px 20px',
          width: '220px',
          height: '50px',
          '&.Mui-selected': {
            backgroundColor: 'rgba(234, 43, 70, 0.1)',
            color: '#EA2B46',
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgba(234, 43, 70, 0.1)',
            color: '#EA2B46',
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.375rem',
        },
      },
    },
  },

  typography: {
    fontFamily: ['Poppins'].join(','),
    h5: {},
  },

  palette: {
    text: {
      primary: '#303640',
      // sedondary: '#374151',
    },
    primary: {
      // Purple and green play nicely together.
      main: '#EA2B46',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

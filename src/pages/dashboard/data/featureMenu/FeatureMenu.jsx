import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

const Welcome = () => {
  return (
    <Grid container>
      <Grid item xs>
        <TableContainer>
          <Table sx={{}} size="small" aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'text.secondary',
                    borderBottom: 'none',
                    p: '0px 14px 0px 0px',
                  }}
                >
                  <CardHeader
                    avatar={
                      <CardMedia
                        component="img"
                        sx={{ width: 80, height: 60, borderRadius: 2 }}
                        image="https://photos.smugmug.com/Bhutan/i-Bpj4hHT/0/X3/bhutanese-food-93-X3.jpg"
                      />
                    }
                    title={
                      <Link href="#" color="text.primary" underline="none">
                        <Typography
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          Ema Datsi
                        </Typography>
                      </Link>
                    }
                    subheader={
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: 'text.secondary',
                          p: '0px 14px 0px 0px',
                        }}
                      >
                        Lorem ipsum, dolor sit amet consectetur
                      </Typography>
                    }
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    borderBottom: 'none',
                    p: '0px 14px 0px 0px',
                  }}
                >
                  Nu.520
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'text.secondary',
                    borderBottom: 'none',
                    p: '0px 14px 0px 0px',
                  }}
                >
                  <CardHeader
                    avatar={
                      <CardMedia
                        component="img"
                        sx={{ width: 80, height: 60, borderRadius: 2 }}
                        image="https://photos.smugmug.com/Bhutan/i-Bpj4hHT/0/X3/bhutanese-food-93-X3.jpg"
                      />
                    }
                    title={
                      <Link href="#" color="text.primary" underline="none">
                        <Typography
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          Kewa Datsi
                        </Typography>
                      </Link>
                    }
                    subheader={
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: 'text.secondary',
                          p: '0px 14px 0px 0px',
                        }}
                      >
                        Lorem ipsum, dolor sit amet consectetur
                      </Typography>
                    }
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    borderBottom: 'none',
                    p: '0px 14px 0px 0px',
                  }}
                >
                  Nu.460
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Welcome;

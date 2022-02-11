import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { DataTable } from './DataTable';

const tables = () => {
  return (
    <Grid container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  borderBottom: 'none',
                  color: 'text.secondary',
                }}
              >
                Product
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  borderBottom: 'none',
                  color: 'text.secondary',
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  borderBottom: 'none',
                  color: 'text.secondary',
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  borderBottom: 'none',
                  color: 'text.secondary',
                }}
              >
                Total Price
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  borderBottom: 'none',
                  color: 'text.secondary',
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          {DataTable.map((item, index) => (
            <TableBody key={item.id}>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', p: '0px 14px 0px 0px' }}>
                  <CardHeader
                    avatar={
                      <CardMedia
                        component="img"
                        sx={{ width: 80, height: 60, borderRadius: 2 }}
                        image={item.image}
                      />
                    }
                    title={
                      <Link href="#" color="text.primary" underline="none">
                        <Typography
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    }
                    subheader={
                      <Typography
                        sx={{ fontSize: 13, color: 'text.secondary' }}
                      >
                        {item.description}
                      </Typography>
                    }
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    borderBottom: 'none',
                    p: '0px 14px 0px 0px',
                  }}
                >
                  {item.price}
                </TableCell>
                <TableCell sx={{ borderBottom: 'none', p: '0px 14px 0px 0px' }}>
                  {item.quantity}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    borderBottom: 'none',
                    p: '0px 14px 0px 0px',
                  }}
                >
                  {item.totalprice}
                </TableCell>
                <TableCell sx={{ borderBottom: 'none', p: '0px 14px 0px 0px' }}>
                  {item.button}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default tables;

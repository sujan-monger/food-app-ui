import React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const orderSummaryTable = () => {
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
                  }}
                >
                  Subtotal
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    borderBottom: 'none',
                  }}
                >
                  Nu.460
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'text.secondary',
                    borderBottom: 'none',
                  }}
                >
                  Discount
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: 'none',
                  }}
                >
                  Nu.0
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    borderBottom: 'none',
                    backgroundColor: 'rgb(244, 246, 248)',
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    borderBottom: 'none',
                    color: '#EA2B46',
                    backgroundColor: 'rgb(244, 246, 248)',
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

export default orderSummaryTable;

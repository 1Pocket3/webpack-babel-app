import React from 'react';
import '../styles/App.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const DataTable = ({ columns, data }) => {
  return (

    <TableContainer component={Paper}>
      <Table className="table table-bordered table-striped">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.Header}>
                <b>{column.Header}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.Header}>
                  {typeof column.accessor === 'function'
                    ? column.accessor(row)
                    : row[column.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
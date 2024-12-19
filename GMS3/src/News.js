import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { lightGreen } from "@mui/material/colors";

function createData(name, Sold, Available, Speed, Price) {
  return { name, Sold, Available, Speed, Price };
}

const rows = [
  createData('Rolls Royce', 159, 4, 400, 7),
  createData('Ferari', 237, 9, 400, 7),
  createData('Range Rover', 262, 20, 400, 7),
  createData('Tata', 3000, 300, 200, 7),
  createData('Swift', 4321, 921, 200, 7),
];

export default function News(){
    return (
        <div>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 , minHeight: 700}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Companies</TableCell>
            <TableCell align="right">Sold</TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Speed</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Sold}</TableCell>
              <TableCell align="right">{row.Available}</TableCell>
              <TableCell align="right">{row.Speed}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
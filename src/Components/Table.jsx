import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const itemTable = ({tableData}) => {
  console.log(tableData);
  return <TableContainer component={Paper}>
    <Table aria-label='simple table'  borderAxis="bothBetween">
        <TableHead>
            <TableRow>
                <TableCell>Deal Name</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Deal Status</TableCell>
                <TableCell>Deal Amount($)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
               tableData.length > 0 && tableData.map(row => (
                    <TableRow key={row.id} sx={{"&:last-child td, &:last-child th":{border:0}}}>
                        <TableCell>{row.Deal_Name}</TableCell>
                        <TableCell>{row.Owner.name}</TableCell>
                        <TableCell>{row.Owner.email}</TableCell>
                        <TableCell>{row.Sales_Cycle_Duration}</TableCell>
                        <TableCell>{row.Amount}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
  </TableContainer>
};


export default itemTable;

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

const itemTable = () => {
  return <TableContainer component={Paper}>
    <Table aria-label='simple table'>
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
                tableData.map(row => (
                    <TableRow key={row.id} sx={{"&:last-child td, &:last-child th":{border:0}}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
  </TableContainer>
};

const tableData =[{
    "id": 1,
    "first_name": "Jeana",
    "last_name": "Seagrave",
    "email": "jseagrave0@alexa.com",
    "gender": "Female",
    "ip_address": "2.174.188.70"
  }, {
    "id": 2,
    "first_name": "Emory",
    "last_name": "Franceschino",
    "email": "efranceschino1@house.gov",
    "gender": "Male",
    "ip_address": "187.155.79.172"
  }, {
    "id": 3,
    "first_name": "Lyell",
    "last_name": "Luparti",
    "email": "lluparti2@posterous.com",
    "gender": "Male",
    "ip_address": "42.204.148.5"
  }, {
    "id": 4,
    "first_name": "Keane",
    "last_name": "Redhole",
    "email": "kredhole3@ebay.co.uk",
    "gender": "Non-binary",
    "ip_address": "237.41.123.200"
  }, {
    "id": 5,
    "first_name": "Davidde",
    "last_name": "Pybus",
    "email": "dpybus4@taobao.com",
    "gender": "Male",
    "ip_address": "231.251.150.182"
  }, {
    "id": 6,
    "first_name": "Burnard",
    "last_name": "Matthiesen",
    "email": "bmatthiesen5@oakley.com",
    "gender": "Male",
    "ip_address": "128.114.214.68"
  }]
  

export default itemTable;

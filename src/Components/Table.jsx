import React, { useEffect, useState } from "react";

import {
  Stack,
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid,
  FormControl,
  InputLabel,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const TablePart = () => {
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container
      sx={{
        textAlign: "left",
        width: "100%",
      }}
    >
      <Grid container mt={4}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h5">
              <b>Contact List View</b>
            </Typography>
            <FormControl sx={{ width: "60%" }}>
              <InputLabel id="demo-simple-select-label">List 1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="List 1"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box textAlign={"right"} mt={4}>
            
                <TextField
                  size="small"
                 
                  InputProps={{
                    endAdornment: (
                      <Button
                        sx={{
                          // width: "40px",
                          height: "40px",
                          bgcolor: "#26c6da",
                          borderRadius: "none",
                          "&:hover": { bgcolor: "#26c6da" },
                          color: "white",
                        }}
                      >
                        <SearchOutlined />
                      </Button>
                    ),
                    
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                  label="Search..."
                  sx={{ color: "grey", width: "300px" }}
                />

          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <TableContainer sx={{ width: "100%" }}>
        <Table
          sx={{
            width: "100%",
            opacity: 1,
            border: "0.5px solid rgb(248, 246, 246)",
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{ backgroundColor: "rgb(248, 246, 246)", borderBottom: 0 }}
          >
            <TableRow>
              <TableCell align="left" width={"20%"}>
                School Name
              </TableCell>
              <TableCell align="left" width={"25%"}>
                Contact Name
              </TableCell>
              <TableCell align="left" width={"15%"}>
                Mobile
              </TableCell>
              <TableCell align="left" width={"20%"}>
                Status
              </TableCell>
              <TableCell align="center" width={"20%"}>
                Invite
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.contact_name.toLowerCase().includes(search);
              })
              .map((row) => (
                <>
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      border: "0.5px solid rgb(248, 246, 246)",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.school_name}
                    </TableCell>
                    <TableCell align="left">{row.contact_name}</TableCell>
                    <TableCell align="left">{row.mobile}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ bgcolor: "#26c6da" }}
                      >
                        Invite
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
function createData(school_name, contact_name, mobile, status, invite) {
  return { school_name, contact_name, mobile, status, invite };
}
const rows = [
  createData(
    "Chawkbazar Primnary School",
    "Ashley Gonzalez",
    "(480)545-8518",
    "Invited"
  ),
  createData("Potia Primnary School", "Rayan Walker", "(360)553-8518", ""),
  createData("Anowara Primnary School", "David Lee", "(719)817-8518", ""),
  createData(
    "Mastermind Primnary School",
    "Daniel Jackson",
    "(717)645-8518",
    ""
  ),
  createData(
    "St Marys Primnary School",
    "Antony Adams",
    "(936)581-8518",
    "Invited"
  ),
  createData(
    "Collegiat Schoool",
    "Jennifer Martinez",
    "(719)825-8518",
    "Invited"
  ),
];

export default TablePart;

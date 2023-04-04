import {
  Box,
  Button,
  Chip,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "../assests/Image.png";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();
  const [changeColor, setChangeColor] = useState(false);
  const [active, setActive] = useState("");
  const [id, setId] = useState("");

  const handleClick = (data, id) => {
    // data = {key: 234, color: true};
    // let tempChips = chips;
    // console.log(data);
    //  data.color= !data.color;
    //  tempChips[id]= data;
    //  setChips(tempChips)
    setId(id);
    setActive(data);

  };

  return (
    <Container sx={{ justifyContent: "space-evenly" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box width={"50%"} justifyContent={"space-around"} p={4}>
          <Box textAlign={"left"}>
            <Typography variant="h6">Primary Contact :</Typography>
            <Typography variant="h4" color={"orange"}>
              <b>Elizabeth Lopez</b>
            </Typography>
            <Typography variant="h6">
              <b>
                Email:elizabeth.lopez@gmail.com
                <br />
                Contact Number: 04XXX XXX XXX
              </b>
            </Typography>
          </Box>
          <br />
          <br />

          <Box width={"90%"}>
            <label id="title">Invited Guests</label>
            <TableContainer
              sx={{
                boxShadow: "-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1",
                textAlign: "left",
              }}
            >
              <Table>
                <TableHead
                  sx={{ bgcolor: "hsl(31, 100%, 50%)", color: "white" }}
                >
                  <TableRow sx={{ height: 6 }}>
                    <TableCell sx={{ color: "white", fontSize: "large" }}>
                      <b>Name</b>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        color: "white",
                        fontSize: "large",
                      }}
                    >
                      <b>Seat Number</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell>
                        <b>{row.name}</b>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          placeholder={row.seat_no}
                          size="small"
                          sx={{ width: "150px" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ bgcolor: "#26c6da", mt: 4 }}>
              ALlocate Seat
            </Button>
          </Box>
        </Box>
        <Box width={"50%"}>
          <Box
            boxShadow={"-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1"}
            mt={8}
            p={2}
          >
            <Typography variant="h4" color={"orange"}>
              <b>Venue Name: Adelaide Oval</b>
            </Typography>
            <Box textAlign={"left"}>
              <Box>
                <Typography variant="h6" mb={1}>
                  <b>VIP Gallary</b>
                </Typography>
                {VIP.map((c, i) => (
                  <Chip
                    key={c.i}
                    label={c}
                    onClick={() => handleClick(c, i)}
                    className={`${
                      c === active && i == id ? "bg-orange" : "bg-transparent"
                    }`}
                    sx={{ mt: "5px", mb: "5px", mr: "3px" }}
                  />
                ))}
              </Box>
              <br />
              <Box>
                <Typography variant="h6" mb={1}>
                  <b>North Gallary</b>
                </Typography>
                {north.map((c, i) => (
                  <Chip
                    key={c.i}
                    label={c}
                    onClick={() => handleClick(c, i)}
                    className={`${
                      c === active && i == id ? "bg-orange" : "bg-transparent"
                    }`}
                    sx={{ mt: "5px", mb: "5px", mr: "3px" }}
                  />
                ))}
              </Box>
              <br />
              <Box>
                <Typography variant="h6" mb={1}>
                  <b>South Gallary</b>
                </Typography>
                {south.map((c, i) => (
                  <Chip
                    key={c.i}
                    label={c}
                    onClick={() => handleClick(c, i)}
                    className={`${
                      c === active && i == id ? "bg-orange" : "bg-transparent"
                    }`}
                    sx={{ mt: "5px", mb: "5px", mr: "3px" }}
                  />
                ))}
              </Box>
              <br />
              <Box>
                <Typography variant="h6" mb={1}>
                  <b>East Gallary</b>
                </Typography>
                {chips.map((c, i) => (
                  <Chip
                    key={c.i}
                    label={c}
                    onClick={() => handleClick(c, i)}
                    className={`${
                      c === active && i == id ? "bg-orange" : "bg-transparent"
                    }`}
                    sx={{ mt: "5px", mb: "5px", mr: "3px" }}
                  />
                ))}
                <br />
              </Box>
              <br />
            </Box>
          </Box>
        </Box>
      </Container>
      <Pagination count={2} page={2} onClick={() => navigate("/")} />
      <Box textAlign={"center"} mt={4}>
        <Box variant="outlined">
          <img src={Image} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

// const [chips, setChips] = useState([])
const chips = [
  456, 557, 879, 1011, 689, 456, 557, 879, 1011, 689, 456, 557, 879, 1011, 689,
  456, 557, 879, 1011, 689,
];
const VIP = [555, 789, 800, 1012, 688, 457, 558, 880, 1021, 101,555, 789, 800, 1012, 688, 457, 558, 880, 1021, 101];
const north = [457, 558, 871, 1013, 687, 458, 559, 891, 1022, 102,457, 558, 871, 1013, 687, 458, 559, 891, 1022, 102];
const south = [458, 559, 872, 1014, 686, 459, 560, 892, 1023, 103,458, 559, 872, 1014, 686, 459, 560, 892, 1023, 103];
// const satas = [459, 560, 873, 1015, 685, 460, 561, 893, 1033, 104];
// const tatas = [460, 561, 874, 1016, 684, 461, 562, 894, 1044, 105];
const rows = [
  {
    name: "ELizabeth Lopez",
    seat_no: "468",
  },
  {
    name: "Mathew Martinez",
    seat_no: "Input text",
  },
  {
    name: "Elizabeth Hall",
    seat_no: "Input text",
  },
  {
    name: "Maria White",
    seat_no: "Input text",
  },
];

export default SecondPage;

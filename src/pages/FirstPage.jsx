import React, { useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom'
import {
  Stack,
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Pagination,
} from "@mui/material";
import image from "../assests/Image.png";
const FirstPage = () => {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container sx={{justifyContent:"space-evenly"}}>
      <Container
        sx={{
          display: "flex",
          margin: "20px 20px",
          boxShadow: "-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1",
        }}
      >
        <Stack sx={{ width: "35%", textAlign: "left", padding: "10px" }}>
          <FormControl sx={{width:"50%"}} size="small">
            <InputLabel id="demo-simple-select-label" sx={{fontSize:"15px"}}>Select Event</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" color="orange">
            <b>Event Name:Japane vs Australia</b>
          </Typography>
          <p>
            <b>
              Event Date:April 15, 2023
              <br />
              Event Location"Adelaide Oval,Adelaide
            </b>
          </p>
        </Stack>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "left",
          }}
        >
          <Box
            width={"33.33%"}
            height={"50%"}
            justifyContent={"space-around"}
            border={"1px solid #ddd"}
            pl={2}
            pb={2}
            mr={3}
            mt={4}
            mb={2}
            boxShadow={"-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1"}
          >
            <Typography variant="p" fontSize={"small"} color={"blue"}>
              <br />

              <b>Number of Tickets Allocated</b>
              <br />
            </Typography>
            <Typography variant="h5">
              <b>850</b>
            </Typography>
          </Box>
          <Box
            width={"33.33%"}
            height={"50%"}
            justifyContent={"space-around"}
            border={"1px solid #ddd"}
            pl={2}
            pb={2}
            mr={3}
            mt={4}
            mb={2}
            boxShadow={"-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1"}
          >
            <Typography variant="p" fontSize={"small"} color={"blue"}>
              <br />

              <b>Tickets Assigned</b>
              <br />
            </Typography>
            <Typography variant="h5">
              <b>150</b>
            </Typography>
          </Box>
          <Box
            width={"33.33%"}
            height={"50%"}
            justifyContent={"space-around"}
            border={"1px solid #ddd"}
            pl={2}
            pb={2}
            mr={3}
            mt={4}
            mb={2}
            boxShadow={"-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1"}
          >
            <Typography variant="p" fontSize={"small"} color={"blue"}>
              <br />

              <b>Available</b>
              <br />
            </Typography>
            <Typography variant="h5">
              <b>700</b>
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          margin: "20px 20px",
          boxShadow: "-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1",
          textAlign: "left",
        }}
      >
        <label id="title">Invited Guests</label>
        <br />
        <br />
        <TableContainer sx={{ width: "100%" }}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "orange", color: "white" }}>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Tickets Request</TableCell>
                <TableCell align="left">Tickets Allocated</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <>
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ bgcolor: "#26c6da" }}
                      >
                        Allocate Ticket
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box textAlign={"center"}>
          <Box variant="outlined">
            <img src={image} alt="" />
          </Box>
        </Box>
      </Container>
      <Pagination count={2} page={1} onClick={()=>navigate("/SeatAllocation")}/>
    </Container>
  );
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Elizabeth Lopez", "elizabeth.lopez@gmail.com", 4, 3),
  createData("Matthew Martinez", "mmartinez1997@gmail.com", 4, 2),
  createData("ELizabeth Hall", "elizabeth_hall_1998@gmail.com", 2, 2),
  createData("Maria White", "maria_white@hotmail.com", 1, 1),
  createData("Elizabeth Watson", "ewatson@yahoo.com", 5, 5),
];

export default FirstPage;

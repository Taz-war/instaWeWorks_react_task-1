import React from "react";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.png";
import { Controller, useForm } from "react-hook-form";
import { tableCellClasses } from "@mui/material/TableCell";
import analytic_table from "../assets/analytic_table.png";

const FirstPage = ({setShow,control}) => {
  // const { handleSubmit, reset, setValue, control } = useForm({});
  // const handleFinalSubmit = (data) => {
  //   console.log(data);
  // };
  setShow(false)
  return (
    
      <Container maxWidth="md" >
        <Box textAlign={"center"}>
        <img src={logo} alt="" width={400} height={171} />
        </Box>
        <Box textAlign={"center"} justifyContent={"stretch"}>
          <p>
            <b>
              All persons involved in works must have SWMS communicated to them
              before works commence and amend where necessary during works. Tool
              Box meetings identify, control and communicate hazards, with work
              ceasing if incident or near miss occurs.
            </b>
          </p>
        </Box>
        
          <section>
            <label>Principal Contractor</label>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{ mt: "10px", mb: "30px" }}
                />
              )}
              name="Principal_Contractor"
              control={control}
            />
          </section>

          <section>
            <label>Client</label>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{ mt: "10px", mb: "30px" }}
                />
              )}
              name="Client"
              control={control}
            />
          </section>
          <section>
            <label>Workplace location</label>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  multiline
                  rows={6}
                  sx={{ mt: "10px", mb: "30px" }}
                />
              )}
              name="Workplace_location"
              control={control}
            />
          </section>
          <section>
            <label>Work Activity</label>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{ mt: "10px", mb: "30px" }}
                />
              )}
              name="Work_Activity"
              control={control}
            />
          </section>
          <section>
            <label>Project Manager</label>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{ mt: "10px", mb: "30px" }}
                />
              )}
              name="Project_Manager"
              control={control}
            />
          </section>
          <section>
            <label>
              Furlong Painting - Project Number<span className="star">*</span>
            </label>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{ mt: "10px", mb: "30px" }}
                />
              )}
              name="Project_number"
              control={control}
            />
          </section>
          <section>
            <label>
              <b>Workplace Hazardous Materials Register Sighted</b>
            </label>
            <Controller
              render={({ field }) => (
                <RadioGroup aria-label="gender" {...field} row>
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="yes"
                    sx={{ mr: 29 }}
                  />
                  <FormControlLabel value="No" control={<Radio />} label="no" />
                </RadioGroup>
              )}
              name="RadioGroup"
              control={control}
            />
          </section>
          <br />
          <br />
          <section>
            <label>
              <b>
                PERSONS CONSULTED IN DEVELOPMENT, REVIEW AND APPROVAL OF SWMS :
              </b>
            </label>
            <TableContainer sx={{}}>
              <Table
                sx={{
                  minWidth: 650,
                  [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none",
                  },
                }}
                aria-label="caption table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                      <b>Person 1</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Person 2</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Person 3</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Person 4</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">
                        <TextField size="small" />
                      </TableCell>
                      <TableCell align="center">
                        <TextField size="small" />
                      </TableCell>
                      <TableCell align="center">
                        <TextField size="small" />
                      </TableCell>
                      <TableCell align="center">
                        <TextField size="small" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
          <br />
          <Box>
            <Typography variant="h7">
              <b>Key Concepts</b>
            </Typography>
            <Typography p={2} fontSize={"15px"}>
              <b>Hazard-</b> Something in the work environment that has the
              potential to cause harm to a person (injury, illness or death).
              <br />
              <b>Risk -</b> The chance (or likelihood) that a hazard will cause
              that harm.
              <br />
              <b>Control Measure -</b> A thing, work process or system of work
              that controls the OHS hazard or risk
            </Typography>
            <br />
            <Typography variant="h6">
              <b>OHS Risk Matrix and PPE Guide</b>
            </Typography>
            <br />
            <Typography variant="p" fontSize={"17px"}>
              To be used to assess the risk rating for identified risks
              <br />
              <br />
            </Typography>
          </Box>
          <Box>
            <img src={analytic_table} alt="" width={"96.5%"} height={371.72} />
          </Box>
      </Container>

  );
};

const rows = [
  {
    name: "Name",
  },
  {
    name: "Initial",
  },
  {
    name: "Date",
  },
];

export default FirstPage;

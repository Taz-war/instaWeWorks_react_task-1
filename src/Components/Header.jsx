import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid
      container
      // spacing={{ xs: 2, md: 3 }}
      // columns={{ xs: 4, sm: 8, md: 12 }}
      mt={4}
      boxShadow={"0px 8px 17px #ddd, 0px 0px 2px #ddd"}
    >
      <Grid item xs={5}>
        <Box
          textAlign={"left"}
          justifyContent={"space-around"}
          pl={2}
          pb={2}
          mr={3}
          mt={4}
          mb={2}
        >
          <Typography variant="h5">
            <b>Select Event</b>
          </Typography>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mornington Peninsula</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Mornington Peninsula"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          textAlign={"left"}
          justifyContent={"space-around"}
          pl={2}
          pb={2}
          mr={3}
          mt={4}
          mb={2}
        >
          <Typography variant="h6">
            <b>Morninton Peninsula</b>
          </Typography>
          <Typography variant="p" color={"grey"}>
            25/02/2024
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box
          textAlign={"left"}
          justifyContent={"space-around"}
          // border={"1px solid #ddd"}
          pl={2}
          pb={2}
          mr={3}
          mt={4}
          mb={2}
          boxShadow={"0px 8px 17px #ddd, 0px 0px 2px #ddd"}
        >
          <Typography variant="p" fontSize={"15px"} color={"rgb(121, 11, 176)"}>
            <br />
            <b>School's Invited</b>
            <br />
          </Typography>
          <Typography variant="h5">
            <b>76</b>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box
          textAlign={"left"}
          justifyContent={"space-around"}
          // border={"1px solid #ddd"}
          pl={2}
          pb={2}
          mr={3}
          mt={4}
          mb={2}
          boxShadow={"0px 8px 17px #ddd, 0px 0px 2px #ddd"}
        >
          <Typography
            variant="p"
            fontSize={"small"}
            color={"rgb(121, 11, 176)"}
          >
            <br />

            <b>Contacts Invited</b>
            <br />
          </Typography>
          <Typography variant="h5">
            <b>150</b>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

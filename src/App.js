import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Container, Typography } from "@mui/material";
import MultipleSelect from "./Components/Heades";
import { grey } from "@mui/material/colors";
import MultilineTextFields from "./Components/TextFields";
import Stopwatch from "./Components/StopWatch";
import Buttons from "./Components/Buttons";
import { useEffect } from "react";

const ZOHO = window.ZOHO;

function App() {
  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      ZOHO.CRM.UI.Resize({ height: "800", width: "1300", padding: "0px" }).then(
        function (data) {
          console.log(data);
        }
      );
    });


    ZOHO.embeddedApp.init();
  }, []);
  return (
    <Container
      className="App"
      sx={{
        border: "1px solid #f1f1f1",
        p: "50px",
        mt: "3%",
        width: "87%",
        boxShadow: "4px 4px 4px #f1f1f1,-4px -4px 4px #f1f1f1",
      }}
    >
      <Box display={"flex"}>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          width={"40%"}
          pl={2}
        >
          <Typography variant="p" color={grey} mt={2}>
            Services
          </Typography>
          <MultipleSelect />
        </Box>
        <Box textAlign={"right"} width={"60%"}>
          <Stopwatch />
        </Box>
      </Box>
      <MultilineTextFields />
      <Buttons />
    </Container>
  );
}

export default App;

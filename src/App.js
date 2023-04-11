import logo from "./logo.svg";
import "./App.css";
import Headers from "./Components/Header";
import TablePart from "./Components/Table";
import { Container } from "@mui/material";
// import {TablePart} from './Components/Table'

function App() {
  return (
    <div className="App">
      <Container >
        <Headers />
        <TablePart />
      </Container>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage'
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App" >
      <Box justifyContent={"space-around"}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />}/>
          <Route path='SeatAllocation' element={<SecondPage />}/>
        </Routes>
        </BrowserRouter>
      {/* <FirstPage /> */}
      {/* <SecondPage /> */}
      </Box>

    </div>
  );
}

export default App;

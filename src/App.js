import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import SearchAppBar from './Components/Nav';

function App() {
  return (
    <div className="App">
    <SearchAppBar />
      <Table />
    </div>
  );
}

export default App;

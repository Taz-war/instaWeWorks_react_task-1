import "./App.css";
import Table from "./Components/Table";

import Search from "./Components/Search";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";


const ZOHO = window.ZOHO;

function App() {
  const [zohoLoaded, setZohoLoaded] = useState(false);
  const [allData, setAllData] = useState([]);

  
  const [loader,setLoader] = useState(false)

  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad",function(data)
    {
      console.log(data);
      //Custom Bussiness logic goes here
    })
    
    /*
     * initializing the widget.
     */
    ZOHO.embeddedApp.init().then(()=>setZohoLoaded(true));
  }, []);


  useEffect(() => {
    if (zohoLoaded) {
      ZOHO.CRM.API.getAllRecords({
        Entity: "Deals",
        sort_order: "asc",
        per_page: 200,
        page: 1,
      }).then(function (data) {
        setAllData(data.data);
      });
    }
  }, [zohoLoaded]);

  if(loader === true){
    return <p>Loading...............</p>
  }

  return (
    <div className="App">
      <h1>Basic Deal info Widget</h1>
      {/* <SearchAppBar /> */}
      <Stack sx={{boxShadow:"-8px -8px 8px #f1f1f1,8px 8px 8px #f1f1f1",width:"80%",margin:"auto"}}>
        <Search setLoader={setLoader} />
        <Table tableData={allData} />
       
     
      </Stack>
    </div>
  );
}

export default App;

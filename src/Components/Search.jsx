import {
  Alert,
  Button,
  IconButton,
  Modal,
  Snackbar,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
const ZOHO = window.ZOHO;

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Search = ({setLoader}) => {
  const [open, setOpen] = useState(false);
  const [dealName, setDealName] = useState("");
  const [amount, setAmount] = useState("");
  const [openSnackBar,setOpenSnackBar] = useState(false)


  const handleClose = (event,reason) => {
    
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  const AddHandle = () => {
    var recordData = {
      Amount: amount,
      Deal_Name: dealName,
    };
    setOpen(false)
    ZOHO.CRM.API.insertRecord({
      Entity: "Deals",
      APIData: recordData,
      Trigger: ["workflow"],
    }).then(function (data) {
      if (data?.data[0]?.code == "SUCCESS") {
        setOpenSnackBar(true);
        setLoader(true)
        // const handleClose = (event,reason) => {
    
        //   if (reason === 'clickaway') {
        //     return;
        //   }
      
        //   setOpenSnackBar(false);
        // };
      setLoader(false)
    }});
    
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }} padding={2}>
      <TextField
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
        label="Search..."
        sx={{ color: "grey", width: "300px" }}
      />

      <Button
        variant="contained"
        sx={{ alignContent: "right", width: "180px", height: "50px" }}
        onClick={(e) => setOpen(true)}
      >
        Create Contact
      </Button>

      <StyledModal
        open={open}
        // onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color={"grey"} textAlign="center">
            Create New Deal
          </Typography>

          <TextField
            id="standard-basic"
            label="Deal Name"
            variant="standard"
            fullWidth
            onChange={(e) => setDealName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Amount"
            variant="standard"
            fullWidth
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />
          <Button
            variant="contained"
            size="xs"
            fullWidth
            onClick={() => AddHandle()}
            
          >
            Add Deal
          </Button>
        </Box>
      </StyledModal>
      <Snackbar open={openSnackBar} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Data is successfully added!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Search;

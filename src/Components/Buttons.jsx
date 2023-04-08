import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const Buttons = () => {

  return (
    <Box textAlign={"right"} p={4}>
        <Button variant="outlined" sx={{marginRight:"10px"}}>Cancel</Button>
        <Button variant="contained" >Submit</Button>
      </Box>
  )
}

export default Buttons
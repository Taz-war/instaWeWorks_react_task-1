import React, { useState } from 'react'
import {Avatar, Fab, Modal, styled, Tooltip, Typography} from '@mui/material'
import {Add as AddIcon} from '@mui/icons-material'
import { Box } from '@mui/system'

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const [open,setOpen] = useState(false)
  return (
      <>
      <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{position:"fixed" , bottom:"20",left:{xs:"calc(50% - 25px)",md:30}}}>
          <Fab color="primary" aria-label="add">
              <AddIcon />
          </Fab>
      </Tooltip>
          <StyledModal
              open={open}
              onClose={e => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box width={400} height={280}  p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}> 
              <Typography variant='h6' color={"gray"} textAlign="center">
                Create Post
              </Typography>
              <UserBox>
                      <Avatar
                          alt="Travis Howard"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTme35093k341Lnn2dzkrKdl4MQj8Vctbf08OFlvour&s"
                      />
                      <Typography fontWeight={500} variant="span">John Doe</Typography>
              </UserBox>
              </Box>
          </StyledModal>
      </>
  )
}

export default Add

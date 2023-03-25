import { Avatar, AvatarGroup, Box, ImageList, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTme35093k341Lnn2dzkrKdl4MQj8Vctbf08OFlvour&s"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://thumbs.dreamstime.com/b/portrait-handsome-indian-man-casual-look-portrait-handsome-indian-man-196631233.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100}>
          Latest photos
        </Typography>
        <ImageList>
          
        </ImageList>
      </Box>
    </Box>
  );
};

export default RightBar;

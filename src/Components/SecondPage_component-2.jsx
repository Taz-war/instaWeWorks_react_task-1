import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SecondBox = ({control}) => {
  const [show4, setShow4] = useState(false);
  // const { handleSubmit, reset, setValue, control } = useForm({});
  return (
    <Box>
      <br />
      <Typography variant="h5" textAlign={"left"}>
        Hazardous Material
      </Typography>
      <br />
      <hr />
      <br />
      <br />
      <Typography textAlign={"left"} fontSize={"18px"} fontWeight={650}>
        What are the hazards and risks?
      </Typography>
      <br />
      <Typography textAlign={"left"}>Dermatitis</Typography>
      <section>
        <Controller
          render={({ field }) => (
            <RadioGroup aria-label="gender" {...field} row defaultValue={"No"}>
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="yes"
                sx={{ mr: 3 }}
                onClick={() => setShow4(true)}
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="no"
                onClick={() => setShow4(false)}
              />
            </RadioGroup>
          )}
          name="RadioGroup3"
          control={control}
        />
      </section>
      <br />
      {show4 && (
        <Box>
          <Typography textAlign={"left"}>
            Inherent Risk Rating - (Dermatitis)
          </Typography>
          <br />
          <section>
            <Controller
              name="MUI_Slider3"
              control={control}
              // defaultValue={[ 4]}
              render={({ field }) => (
                <PrettoSlider
                  {...field}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={4}
                  step={1}
                  sx={{ width: "50%", pb: "3px" }}
                />
              )}
            />
          </section>
          <br />
          <Typography
            textAlign={"left"}
            fontSize={"18px"}
            fontWeight={650}
            color={"#1976D2"}
          >
            How will the hazards and risk be controlled?
          </Typography>
          <br />
          <Typography textAlign={"left"} fontSize={"18px"} fontWeight={650}>
            Staff are encouraged to wash hands with soap and water for 20 secs
            where possible as an alternative to hand sanitiser
          </Typography>
          <br />
          <br />
          <Typography textAlign={"left"}>
            Residual Risk Rating - (Dermatitis)
          </Typography>
          <br />
          <section>
            <Controller
              name="MUI_Slider4"
              control={control}
              // defaultValue={[ 4]}
              render={({ field }) => (
                <PrettoSlider
                  {...field}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={4}
                  step={1}
                  sx={{ width: "50%", pb: "3px" }}
                />
              )}
            />
          </section>
        </Box>
      )}
    </Box>
  );
};
const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 4,
    label: "4",
  },
];
const PrettoSlider = styled(Slider)({
  color: "#19A4E6",
  height: 13,
  "& .MuiSlider-track": {},
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {},
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 50,
    height: 32,
    borderRadius: "1% 1% 1% 1%",
    backgroundColor: "#19A4E6",
    transformOrigin: "bottom left",

    "&:before": { display: "" },
    "&.MuiSlider-valueLabelOpen": {},
  },
});

export default SecondBox;

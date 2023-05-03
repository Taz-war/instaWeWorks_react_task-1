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

const FirstBox = ({control}) => {
  // const { handleSubmit, reset, setValue, control } = useForm({});
  const [show2, setShow2] = useState(false);

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
      <Typography textAlign={"left"}>
        Workers or others catching COVID-19 (could result in serious illness or
        death).
      </Typography>
      <section>
        <Controller
          render={({ field }) => (
            <RadioGroup aria-label="gender" {...field} row defaultValue={"No"}>
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="yes"
                sx={{ mr: 3 }}
                onClick={() => setShow2(true)}
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="no"
                onClick={() => setShow2(false)}
              />
            </RadioGroup>
          )}
          name="RadioGroup2"
          control={control}
        />
      </section>
      <br />
      {show2 && (
        <Box>
          <Typography textAlign={"left"}>
            Inherent Risk Rating - (Workers or others catching COVID-19 (could
            result in serious illness or death))
          </Typography>
          <br />
          <section>
            <Controller
              name="MUI_Slider1"
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
          <Typography textAlign={"left"}>
            Staff and contractors have been briefed on symptoms of COVID-19 and
            have been told to stay home if they aren’t feeling well. Hygiene
          </Typography>
          <ul>
            <li>
              Avoid contact with others (shaking hands, touching faces, hugging,
              and other intimate contact).
            </li>
            <li>Wearing of disposable nitrile gloves when required on site</li>
            <li>Avoid touching surfaces on client sites without gloves on.</li>
            <li>
              Frequently wash hands with soap and water for at least 20 seconds,
              or use an alcohol-based hand rub. Particular attention must be
              taken when using the toilet before preparing and eating food.
              Alcohol based hand sanitiser is available for all staff and
              contractors
            </li>
            <li>
              Wearing of face mask at all times (as required by prevailing
              Victorian Health Department regulations). Face masks are made
              available for all staff and contractors
            </li>
            <li>
              Cover your mouth when coughing and sneezing with tissue or a
              flexed elbow
            </li>
            <li>Dispose of tissues immediately</li>
            <li>
              Avoid using client staffrooms / common areas for meal breaks.
              Prefer in shaded areas outdoors if weather permits or by yourself
              in vehicle. Social Distancing
            </li>
            <li>
              Staff and contractors to work more than 1.5m away from each other,
              keeping 4sqm distance . Work in different areas on site where
              able. This includes toolbox meetings and meal breaks.
            </li>
          </ul>
          <Typography textAlign={"left"}>
            Residual Risk Rating - (Workers or others catching COVID-19 (could
            result in serious illness or death))
          </Typography>
          <br />
          <section>
            <Controller
              name="MUI_Slider2"
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

export default FirstBox;

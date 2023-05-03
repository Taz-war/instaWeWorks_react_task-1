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
import FirstBox from "../Components/SecondPage_component-1";
import SecondBox from "../Components/SecondPage_component-2";

const SecondPage = ({s,control}) => {
  // const { handleSubmit, reset, setValue, control } = useForm({});
  const [show, setShow] = useState(false);
  const [show3, setShow3] = useState(false);
  // const {s} =props
  s(true)
  // const handleFinalSubmit = (data) => {
  //   console.log(data);
  // };
  return (

      <Container maxWidth="md" sx={{padding:"30px"}}>
        <br />
        <br />
        <Typography
          variant="p"
          fontSize={"17px"}
          fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
        >
          <b>COVID 19 SAFE WORK PLAN</b>
        </Typography>
        <br />
        <br />
        <Typography textAlign={"left"}>
          <b>Task Name :</b> <span className="star"> Attending work site</span>
        </Typography>
        <br />
        <Typography textAlign={"left"} fontSize={"18px"} fontWeight={650}>
          Would this Hazardous Element exist on this worksite?{" "}
        </Typography>
          <br />
          <section>
            <Controller
              name="Checkbox"
              control={control}
              render={({ field }) => (
                <Checkbox onClick={() => setShow(!show)} />
              )}
            />
            <label>
              Attracting COVID-19 from clients, other workers or surfaces
            </label>
          </section>

          {show && (
            <FirstBox control={control}/>
          )}
          
          <section>
            <Controller
              name="Checkbox"
              control={control}
              render={({ field }) => (
                <Checkbox
                  onClick={() => setShow3(!show3)}
                  checked={field.value}
                />
              )}
            />
            <label>Alcohol based sanitiser</label>
          </section>

          {show3 && (
            <SecondBox control={control}/>
          )}

          <br />
          <br />
      </Container>

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
export default SecondPage;

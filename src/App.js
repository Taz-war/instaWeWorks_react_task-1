import "./App.css";
import FirstPage from "./Pages/firstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "rgb(47,158,236)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "rgb(47,158,236)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 30,
  height: 30,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "rgb(47,158,236)",
    boxShadow: "0 0 0 8px  rgb(255,255,255),0 0 0 10px rgb(47,158,236)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "rgb(47,158,236)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "3",
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

function App() {
  const [show, setShow] = useState(true);
  const methods = useForm();
  const getStepContent = (step, control) => {
    switch (step) {
      case 0:
        return <FirstPage setShow={setShow} control={control} />;
      case 1:
        return <SecondPage s={setShow} control={control} />;
      case 2:
        return (
          <ThirdPage
            setShow={setShow}
            control={control}
            setValue={methods.setValue}
          />
        );
    }
  };

  const [activeStep, setActiveStep] = useState(0);
  const [step, setStep] = React.useState(0);
  // const steps = getSteps();
  const handleNext = (data) => {
    if (activeStep < 2) {
      setActiveStep((currentStep) => currentStep + 1);
    }
    console.log(data);
  };
  const handleBack = () => {
    if (activeStep !== -1) {
      setActiveStep((currentStep) => currentStep - 1);
    }
  };
  const handleFinalSubmit = (data) => {
    console.log(data);
  };

  const handleReset = () => {
    setStep(0);
  };
  return (
    <Box pt={4} component={Paper}  margin={"0 auto"} mt={4} p={0} maxWidth={"md"}>
      <Typography
        variant="h5"
        bgcolor={"#494949"}
        color={"#FFFFFF"}
        height={"45px"}
        pt={1}
        textAlign={"center"}
      >
        Furlong Painting - Safe Work Method Statement (SWMS)
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={4} mt={4}>
        <Stepper
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          sx={{ p: "10px" }}
        >
          <Step>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={() => setActiveStep(0)}
            ></StepLabel>
          </Step>
          <Step>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={() => setActiveStep(1)}
            ></StepLabel>
          </Step>
          <Step>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={() => setActiveStep(2)}
            ></StepLabel>
          </Step>
        </Stepper>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => handleFinalSubmit(data))}
          >
            {getStepContent(activeStep, methods.control)}
            <Grid container sx={{ padding: "30px" }}>
              <Grid item xs={6} textAlign={"left"}>
                {show && (
                  <Button
                    variant="filled"
                    sx={{
                      bgcolor: "#494949",
                      color: "#fff",
                      width: "75px",
                      height: "30px",
                      fontSize: "13px",
                      padding: "4px 12px",
                      mb: 3,
                      "&:hover": {
                        backgroundColor: "#494949",
                        color: "#fff",
                      },
                    }}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                )}
              </Grid>
              <Grid item xs={6} textAlign={"right"}>
                {activeStep === 2 ? (
                  <Button
                    type="submit"
                    variant="filled"
                    sx={{
                      bgcolor: "#494949",
                      color: "#fff",
                      width: "75px",
                      height: "30px",
                      fontSize: "13px",
                      padding: "4px 12px",
                      mb: 3,
                      "&:hover": {
                        backgroundColor: "#494949",
                        color: "#fff",
                      },
                    }}
                    onClick={handleNext}
                  >
                    {" Submit"}
                  </Button>
                ) : (
                  <Button
                    // type="submit"
                    variant="filled"
                    sx={{
                      bgcolor: "#494949",
                      color: "#fff",
                      width: "75px",
                      height: "30px",
                      fontSize: "13px",
                      padding: "4px 12px",
                      mb: 3,
                      "&:hover": {
                        backgroundColor: "#494949",
                        color: "#fff",
                      },
                    }}
                    onClick={handleNext}
                  >
                    {" Next"}
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Stack>
      {/* <FirstPage /> */}
      {/* <SecondPage /> */}
      {/* <ThirdPage /> */}
    </Box>
  );
}

export default App;

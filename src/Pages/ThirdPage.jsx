import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Controller } from "react-hook-form";

import SignatureCanvas from "react-signature-canvas";

const ThirdPage = ({ setShow, control, setValue }) => {
  setShow(true);
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();
 
  const handleClear = () => {
    sign.clear();
  };
  const handleGenerate = (data) => {
    // setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    setValue(data, sign.getTrimmedCanvas().toDataURL("image/png"));
  };
  // console.log(sign);
  // console.log(url);
  return (
    <Container maxWidth="md" sx={{ padding: "30px" }}>
      <Typography textAlign={"left"} fontSize={"17.5px"} mb={6}>
        This SWMS has been developed in consultation with the relevant employer
        and workers on site. I have read the above SWMS and I understand its
        contents. I confirm that I have the skills and training, including
        relevant certification to conduct the task as described. I agree to
        comply with safety requirements within this SWMS including risk control
        measures, safe work instructions and Personal Protective Equipment as
        described. I will refrain from tasks for which I do not have the
        appropriate skills, training or certification and inform the site
        foreperson / Furlong Management immediately.
      </Typography>

      <section>
        <label>Name</label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              sx={{ mt: "10px", mb: "30px" }}
            />
          )}
          name="Client1"
          control={control}
        />
      </section>
      <section>
        <Typography variant="subtitle3">Signature 1</Typography>
        <Box
          sx={{
            border: "1px solid #ddd",
            width: "92%",
            borderRadius: "10px",
          }}
        >
          <SignatureCanvas
            canvasProps={{
              width: 770,
              height: 200,
              className: "sigCanvas",
            }}
            ref={(data) => setSign(data)}
            fullWidth
            name="Signature1"
          />
        </Box>
        <Box textAlign={"left"} mt={3}>
          <Button
            onClick={handleClear}
            variant="contained"
            sx={{
              bgcolor: "#f1f1f1",
              color: "black",
              boxShadow: "none",
              border: "none",
              "&:hover": { bgcolor: "#f1f1f1" },
              mr: "10px",
            }}
          >
            Clear
          </Button>
          <Button
            onClick={() => handleGenerate("sign1_url")}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </section>
      <br />
      <section>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Date</label>
          <DemoContainer components={["DatePicker"]}>
            <DemoItem>
              <DatePicker
                sx={{ width: "100%" }}
                renderInput={(params) => {
                  console.log(params);
                  return (
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="datetime-local"
                          sx={{ mt: "10px", mb: "30px", width: "50%" }}
                          size="small"
                          inputProps={{
                            ...field.inputProps,
                            placeholder: "tt.mm.jjjj",
                          }}
                        />
                      )}
                      name="date"
                      control={control}
                    />
                  );
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </section>
      <br />

      {/* second repeat */}
      <section>
        <label>Name</label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              sx={{ mt: "10px", mb: "30px" }}
            />
          )}
          name="Client2"
          control={control}
        />
      </section>
      <section>
        <Typography variant="subtitle3">Signature 2</Typography>
        <Box
          sx={{
            border: "1px solid #ddd",
            width: "92%",
            borderRadius: "10px",
          }}
        >
          <SignatureCanvas
            canvasProps={{
              width: 770,
              height: 200,
              className: "sigCanvas",
            }}
            ref={(data) => setSign(data)}
            fullWidth
            name="Signature2"
          />
        </Box>
        <Box textAlign={"left"} mt={3}>
          <Button
            onClick={handleClear}
            variant="contained"
            sx={{
              bgcolor: "#f1f1f1",
              color: "black",
              boxShadow: "none",
              border: "none",
              "&:hover": { bgcolor: "#f1f1f1" },
              mr: "10px",
            }}
          >
            Clear
          </Button>
          <Button
            onClick={() => handleGenerate("sign2_url")}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </section>
      <br />
      <section>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Date</label>
          <DemoContainer components={["DatePicker"]}>
            <DemoItem>
              <DatePicker
                sx={{ width: "100%" }}
                renderInput={(params) => {
                  console.log(params);
                  return (
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="datetime-local"
                          sx={{ mt: "10px", mb: "30px", width: "50%" }}
                          size="small"
                          inputProps={{
                            ...field.inputProps,
                            placeholder: "tt.mm.jjjj",
                          }}
                        />
                      )}
                      name="date"
                      control={control}
                    />
                  );
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </section>
      <br />

      {/* third repeat */}
      <section>
        <label>Name</label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              sx={{ mt: "10px", mb: "30px" }}
            />
          )}
          name="Client3"
          control={control}
        />
      </section>
      <section>
        <Typography variant="subtitle3">Signature 3</Typography>
        <Box
          sx={{
            border: "1px solid #ddd",
            width: "92%",
            borderRadius: "10px",
          }}
        >
          <SignatureCanvas
            canvasProps={{
              width: 770,
              height: 200,
              className: "sigCanvas",
            }}
            ref={(data) => setSign(data)}
            fullWidth
            name="Signature3"
          />
        </Box>
        <Box textAlign={"left"} mt={3}>
          <Button
            onClick={handleClear}
            variant="contained"
            sx={{
              bgcolor: "#f1f1f1",
              color: "black",
              boxShadow: "none",
              border: "none",
              "&:hover": { bgcolor: "#f1f1f1" },
              mr: "10px",
            }}
          >
            Clear
          </Button>
          <Button
            onClick={() => handleGenerate("sign3_url")}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </section>
      <br />
      <section>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Date</label>
          <DemoContainer components={["DatePicker"]}>
            <DemoItem>
              <DatePicker
                sx={{ width: "100%" }}
                renderInput={(params) => {
                  console.log(params);
                  return (
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="datetime-local"
                          sx={{ mt: "10px", mb: "30px", width: "50%" }}
                          size="small"
                          inputProps={{
                            ...field.inputProps,
                            placeholder: "tt.mm.jjjj",
                          }}
                        />
                      )}
                      name="date"
                      control={control}
                    />
                  );
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </section>
      <br />
    </Container>
  );
};

export default ThirdPage;

import React from "react";
import { StylesProvider } from "@material-ui/core/styles";

import {
  Paper,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  CircularProgress
} from "@material-ui/core";
import "date-fns";
import styled from "styled-components";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const PaperStyled = styled(Paper)`
  padding: 2rem 4rem;
  height: 88%;
`;

const FormControlStyled = styled(FormControl)`
  width: 100%;
`;

const FormControlStyledCheckBox = styled(FormControl)`
  padding: 0rem;
  padding-top: 1rem;
  width: 100%;
`;

const FormControlStyledDateBox = styled(FormControl)`
  padding: 0rem;
  padding-top: 2rem;
  width: 100%;
`;

const KeyboardDatePickerStyled = styled(KeyboardDatePicker)`
  .MuiInputBase-root {
    padding-top: 2rem;
  }
`;
const CircularProgressStyled = styled(CircularProgress)`
  position: absolute;
  bottom: 10%;
  right: 0;
  width:1rem !important;
  height:1rem !important;
`;
class AddTechnician extends React.Component<any, any> {
  render() {
    return (
      <StylesProvider injectFirst>
        <PaperStyled>
          <Grid container justify="space-between" spacing={10}>
            <Grid item xs={5}>
              <FormControlStyled>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControlStyled>
            </Grid>
            <Grid item xs={5}>
              <FormControlStyled>
                <InputLabel htmlFor="my-input">Second Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControlStyled>
            </Grid>
          </Grid>
          <Grid container justify="space-between" spacing={10}>
            <Grid item xs={5}>
              <FormControlStyled>
                <InputLabel htmlFor="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select id="demo-simple-select">
                  <MenuItem value={5}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControlStyled>
            </Grid>
            <Grid item xs={5}>
              <FormControlStyledCheckBox>
                <FormControlLabel control={<Checkbox />} label="Is Permanent" />
              </FormControlStyledCheckBox>
            </Grid>
          </Grid>
          <Grid container justify="space-between" spacing={10}>
            <Grid item xs={7}>
              <FormControlStyled>
                <TextField
                  id="standard-textarea"
                  rows="10"
                  label="Comments"
                  placeholder="Comments"
                  multiline
                />

              </FormControlStyled>
            </Grid>
            <Grid item xs={5}>
              <FormControlStyledDateBox>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePickerStyled
                    variant="inline"
                    format="MM/dd/yyyy"
                    value={new Date()}
                    onChange={() => {}}
                    id="date-picker-inline"
                    label="Date of Joining"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControlStyledDateBox>
            </Grid>
          </Grid>
        </PaperStyled>
      </StylesProvider>
    );
  }
}

export default AddTechnician;

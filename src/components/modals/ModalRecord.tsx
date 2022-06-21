import { FC } from "react";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import "../modalCallBack/Modal.scss";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fieldInputAlert,
  validateAlert,
  successAlert,
} from "../../app/slices/alertsSlice";

import {
  isRecordOpen,
  recordTelValueChange,
  recordNameValueChange,
  recordDateValueChange,
  recordDoctorValueChange,
  postRecord,
} from "../../app/slices/modalSlice";

const ModalRecord: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [validationName, setValidationName] = React.useState(false);
  const [validationTel, setValidationTel] = React.useState(false);

  const dispatch = useAppDispatch();

  const recordIsOpen = useAppSelector((state) => state.modal.RecordIsOpen);
  const inputTelValue = useAppSelector((state) => state.modal.RecordTelValue);
  const inputNameValue = useAppSelector((state) => state.modal.RecordNameValue);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState<Date | null>(
    new Date("2018-01-01T00:00:00.000Z")
  );

  useEffect(() => {
    if (recordIsOpen) {
      setOpen(true);
    }
  }, [recordIsOpen]);

  useEffect(() => {
    if (inputNameValue.length >= 3) {
      setValidationName(true);
    } else {
      setValidationName(false);
    }
  }, [inputNameValue]);

  useEffect(() => {
    const validatePhoneNumberRegex = /^\+?[1-9][0-9]{11,11}$/;
    if (validatePhoneNumberRegex.test(inputTelValue)) {
      setValidationTel(true);
    } else {
      setValidationTel(false);
    }
  }, [inputTelValue]);

  const validate = () => {
    if (!inputTelValue || !inputNameValue) {
      dispatch(fieldInputAlert(true));
      return;
    }

    const validatePhoneNumberRegex = /^\+?[1-9][0-9]{11,11}$/;
    if (
      !validatePhoneNumberRegex.test(inputTelValue) ||
      inputNameValue.length < 3
    ) {
      dispatch(validateAlert(true));
      return;
    }

    dispatch(recordTelValueChange(""));
    dispatch(recordNameValueChange(""));
    dispatch(isRecordOpen());
    setOpen(false);

    dispatch(
      postRecord({
        id: inputTelValue + "." + new Date().toLocaleTimeString(),
        phone: inputTelValue,
        date: new Date().toLocaleString(),
        name: inputNameValue,
        doctor: "akim",
      })
    );
    dispatch(successAlert(true));
  };

  const handleClose = () => {
    dispatch(isRecordOpen());
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="modal">
            <Box
              className="modal__form"
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className="modal__form-input"
                id="outlined-basic"
                label="Номер телефона"
                variant="outlined"
                type="tel"
                placeholder="+123456789090"
                onChange={(e) => dispatch(recordTelValueChange(e.target.value))}
                value={inputTelValue}
                color={validationTel ? "success" : "error"}
              />
              <TextField
                className="modal__form-input"
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                type="text"
                color={validationName ? "success" : "error"}
                onChange={(e) =>
                  dispatch(recordNameValueChange(e.target.value))
                }
                value={inputNameValue}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Responsive"
                  renderInput={(params) => <TextField {...params} />}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(validate);
                }}
              >
                Перезвонить
              </button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalRecord;

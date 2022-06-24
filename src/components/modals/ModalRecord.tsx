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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./Modal.scss";

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
  recordShiftValueChange,
} from "../../app/slices/modalSlice";
import { getDoctors } from "../../app/slices/specialistsSlice";
import Button, { ButtonType, ButtonStyle } from "../Button";

const ModalRecord: FC = () => {
  const [validationName, setValidationName] = React.useState(false);
  const [validationTel, setValidationTel] = React.useState(false);

  const dispatch = useAppDispatch();

  const recordIsOpen = useAppSelector((state) => state.modal.RecordIsOpen);
  const inputTelValue = useAppSelector((state) => state.modal.RecordTelValue);
  const inputNameValue = useAppSelector((state) => state.modal.RecordNameValue);
  const inputDateValue = useAppSelector((state) => state.modal.RecordDateValue);
  const inputShiftValue = useAppSelector(
    (state) => state.modal.RecordShiftValue
  );
  const inputDoctorValue = useAppSelector(
    (state) => state.modal.RecordDoctorValue
  );
  const doctors = useAppSelector((state) => state.specialists.specialists);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(recordDoctorValueChange(event.target.value));
  };

  useEffect(() => {
    if (recordIsOpen) {
      dispatch(getDoctors());
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

    dispatch(
      postRecord({
        id: inputTelValue + "." + new Date().toLocaleTimeString(),
        time: new Date().toLocaleString(),
        phone: inputTelValue,
        date: inputDateValue,
        name: inputNameValue,
        doctor: inputDoctorValue,
        shift: inputShiftValue,
      })
    );
    dispatch(recordTelValueChange(""));
    dispatch(recordNameValueChange(""));
    dispatch(recordDateValueChange(""));
    dispatch(recordDoctorValueChange(""));
    dispatch(recordShiftValueChange(""));
    dispatch(isRecordOpen());
    dispatch(successAlert(true));
  };

  const handleClose = () => {
    dispatch(isRecordOpen());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={recordIsOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={recordIsOpen}>
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
                label="ФИО"
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
                  Специалист
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-standard"
                  value={inputDoctorValue}
                  style={{ color: "green" }}
                  color="success"
                  onChange={handleChange}
                  label="Специалист"
                >
                  {doctors.map((el) => {
                    return (
                      <MenuItem
                        key={el.id}
                        value={el.name}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <p>{el.name}</p>

                        <p style={{ fontSize: ".7rem", display: "block" }}>
                          {el.title}
                        </p>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <p className="form-subtitle">
                Выберите предпочтительную дату и время для посещения
              </p>
              <input
                className="calendar"
                type="date"
                value={inputDateValue}
                onChange={(e) =>
                  dispatch(recordDateValueChange(e.target.value))
                }
              />
              <FormControl style={{ width: "70%" }}>
                <RadioGroup
                  value={inputShiftValue}
                  onChange={(e) =>
                    dispatch(recordShiftValueChange(e.target.value))
                  }
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="8:00 - 14:00"
                    control={<Radio color="success" />}
                    label="8:00 - 14:00"
                  />
                  <FormControlLabel
                    value="14:00 - 20:00"
                    control={<Radio color="success" />}
                    label="14:00 - 20:00"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                type={ButtonType.button}
                style={ButtonStyle.fullfield}
                text="Перезвонить"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(validate);
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalRecord;

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fieldInputAlert,
  validateAlert,
  successAlert,
} from "../../app/slices/alertsSlice";

import {
  isCallBackOpen,
  callBackTelValueChange,
  callBackNameValueChange,
  postCallBack,
} from "../../app/slices/modalSlice";

import "./Modal.scss";

function ModalCallBack() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const [validationName, setValidationName] = React.useState(false);
  const [validationTel, setValidationTel] = React.useState(false);

  const callBackIsOpen = useAppSelector((state) => state.modal.CallBackIsOpen);
  const inputTelValue = useAppSelector((state) => state.modal.CallBackTelValue);
  const inputNameValue = useAppSelector(
    (state) => state.modal.CallBackNameValue
  );
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

    dispatch(callBackTelValueChange(""));
    dispatch(callBackNameValueChange(""));
    dispatch(isCallBackOpen());
    setOpen(false);

    dispatch(
      postCallBack({
        id: inputTelValue + "." + new Date().toLocaleTimeString(),
        phone: inputTelValue,
        date: new Date().toLocaleString(),
        name: inputNameValue,
      })
    );
    dispatch(successAlert(true));
  };

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

  useEffect(() => {
    if (callBackIsOpen) {
      setOpen(true);
    }
  }, [callBackIsOpen]);

  const handleClose = () => {
    dispatch(isCallBackOpen());
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
                onChange={(e) =>
                  dispatch(callBackTelValueChange(e.target.value))
                }
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
                  dispatch(callBackNameValueChange(e.target.value))
                }
                value={inputNameValue}
              />
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
}

export default ModalCallBack;

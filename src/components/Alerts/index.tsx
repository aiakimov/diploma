import { EventHandler, FC, useEffect, useState } from "react";

import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  fieldInputAlert,
  validateAlert,
  successAlert,
} from "../../app/slices/alertsSlice";
import { Snackbar } from "@mui/material";

const Alerts: FC = () => {
  const isOpenfieldInputAlert = useAppSelector(
    (store) => store.alerts.fieldInput
  );
  const isOpenValidateAlert = useAppSelector(
    (store) => store.alerts.validateAlert
  );
  const isOpenSuccessAlert = useAppSelector(
    (store) => store.alerts.successAlert
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <Snackbar
        open={isOpenfieldInputAlert}
        autoHideDuration={2000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          dispatch(fieldInputAlert(false));
        }}
      >
        <Alert
          severity="error"
          variant="filled"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(fieldInputAlert(false));
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          заполните все поля!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isOpenValidateAlert}
        autoHideDuration={2000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          dispatch(validateAlert(false));
        }}
      >
        <Alert
          severity="error"
          variant="filled"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(validateAlert(false));
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          проверьте правильность введенных данных!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isOpenSuccessAlert}
        autoHideDuration={2000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          dispatch(successAlert(false));
        }}
      >
        <Alert
          variant="filled"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(successAlert(false));
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          мы перезвоним в ближайшее время!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Alerts;

import { FC, useEffect } from "react";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

import "./ToBackBtn.scss";
import { Link, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isSelestedMenuItem } from "../../app/slices/navigationSlice";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import {
  isBackBtnVisible,
  isScrollingWindow,
} from "../../app/slices/toBackBtnSlice";

import { zeroingScrollY } from "../Navigation";

export enum BackBtn {
  up,
  back,
}

interface PropsToBackBtn {
  to?: BackBtn;
}

const zeroingSmoothScrollY = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ToBackBtn: FC<PropsToBackBtn> = ({ to }) => {
  const dispatch = useAppDispatch();
  const oldHref = useAppSelector((state) => state.toBackBtn.oldHref);
  const oldSelestedNavItem = useAppSelector(
    (state) => state.toBackBtn.oldNavIndex
  );
  const isScrolling = useAppSelector((state) => state.toBackBtn.isScrolling);
  const isBackBtn = useAppSelector((state) => state.toBackBtn.isBackBtn);
  const burgerIsOpen = useAppSelector((state) => state.burger.isOpen);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.clientHeight > window.screen.height &&
        window.scrollY > 50
      ) {
        dispatch(isScrollingWindow(true));
      } else {
        dispatch(isScrollingWindow(false));
      }
    });
  }, []);

  useEffect(() => {
    if (burgerIsOpen) {
      dispatch(isScrollingWindow(false));
      dispatch(isBackBtnVisible(false));
    } else {
      if (window.scrollY > 200) {
        dispatch(isScrollingWindow(true));
      }
      dispatch(isBackBtnVisible(true));
    }
  }, [burgerIsOpen]);

  if (to) {
    return (
      <>
        {isBackBtn && (
          <Link
            to={oldHref}
            className="to-back-btn"
            onClick={() => {
              dispatch(isSelestedMenuItem(oldSelestedNavItem));
              zeroingScrollY();
            }}
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </Link>
        )}
      </>
    );
  }
  return (
    <>
      {isScrolling && (
        <div
          className="to-up-btn"
          onClick={() => {
            zeroingSmoothScrollY();
          }}
        >
          <ArrowUpwardIcon fontSize="large" />
        </div>
      )}
    </>
  );
};

export default ToBackBtn;

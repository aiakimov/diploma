import { FC, useEffect } from "react";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

import "./ToBackBtn.scss";
import { Link, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isSelestedMenuItem } from "../../app/slices/navigationSlice";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { isScrollingWindow } from "../../app/slices/toBackBtnSlice";
import { zeroingScrollY } from "../Navigation";

export enum BackBtn {
  up,
  back,
}

interface PropsToBackBtn {
  to: BackBtn;
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
  const burgerIsOpen = useAppSelector((state) => state.burger.isOpen);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        dispatch(isScrollingWindow(true));
      } else {
        dispatch(isScrollingWindow(false));
      }
    });
  }, []);

  if (to) {
    return (
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

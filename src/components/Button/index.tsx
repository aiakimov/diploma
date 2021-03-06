import { FC, useCallback } from "react";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

import "./Button.scss";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import { isSelestedMenuItem } from "../../app/slices/NavigationSlice";
import { toBackButton } from "../../app/slices/toBackBtnSlice";

import { menuLinks } from "../Navigation";
import { zeroingScrollY } from "../Navigation";
import { link } from "fs";

export enum ButtonStyle {
  gradient = " button--gradient",
  fullfield = "button",
}
export enum ButtonType {
  link,
  navLink,
  button,
}

interface ButtonProps {
  text: string;
  style: ButtonStyle;
  type: ButtonType;
  href?: string;
  pageLink?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  text,
  style,
  type,
  href,
  pageLink,
  onClick,
}) => {
  const dispatch = useAppDispatch();

  const findLink = useCallback(() => {
    const index = menuLinks.findIndex((el) => el.link === pageLink);
    return index;
  }, []);

  if (type === ButtonType.button) {
    return (
      <button onClick={onClick} className={style}>
        {text}
      </button>
    );
  }

  if (type === ButtonType.link) {
    return (
      <a href={href} className={style}>
        {text}
        <ArrowRightAltRoundedIcon
          style={{ fontSize: "20px", padding: "0 0 0 5px" }}
        />
      </a>
    );
  }

  return (
    <Link
      to={pageLink || "/"}
      className={style}
      onClick={() => {
        dispatch(toBackButton(String(window.location.href)));

        dispatch(isSelestedMenuItem(findLink()));
        zeroingScrollY();
      }}
    >
      <span> {text}</span>
      <ArrowRightAltRoundedIcon
        style={{ fontSize: "20px", padding: "0 0 0 5px" }}
      />
    </Link>
  );
};

export default Button;

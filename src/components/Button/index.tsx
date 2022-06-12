import { FC } from "react";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

import "./Button.scss";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import { isSelestedMenuItem } from "../../app/slices/NavigationSlice";

import { menuLinks } from "../Navigation";
import { zeroingScrollY } from "../Navigation";

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
}

const Button: FC<ButtonProps> = ({ text, style, type, href, pageLink }) => {
  const dispatch = useAppDispatch();

  const findLink = () => {
    const index = menuLinks.findIndex((el) => el.link === pageLink);
    return index;
  };

  if (type === 2) {
    return <button className={style}>{text}</button>;
  }

  if (type === 0) {
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
        dispatch(isSelestedMenuItem(findLink()));
        zeroingScrollY();
      }}
    >
      {text}
      <ArrowRightAltRoundedIcon
        style={{ fontSize: "20px", padding: "0 0 0 5px" }}
      />
    </Link>
  );
};

export default Button;

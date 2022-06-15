import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import logo from "../../img/logo/big-logo-white.png";
import Burger from "../Burger";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isSelestedMenuItem } from "../../app/slices/navigationSlice";
import { burgerMenuIsOpen } from "../../app/slices/burgerSlice";

import "./Navigation.scss";
import { toBackButton } from "../../app/slices/toBackBtnSlice";

export const menuLinks = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "О клинике",
    link: "/about",
  },
  {
    name: "Услуги",
    link: "/services",
  },
  {
    name: "Специалисты",
    link: "/specialists",
  },
  {
    name: "Отзывы",
    link: "/reviews",
  },
  {
    name: "Контакты",
    link: "/contacts",
  },
];
export const zeroingScrollY = () => {
  window.scrollTo(0, 0);
};

const Navigation: FC = () => {
  const dispatch = useAppDispatch();
  const Selested = useAppSelector((state) => state.navigation.Selested);
  const burgerMenuOpen = useAppSelector((state) => state.burger.isOpen);

  return (
    <nav className="navigation">
      <NavLink title="На главную" to="/" className="navigation__logo">
        <img
          src={logo}
          onClick={() => {
            dispatch(isSelestedMenuItem(0));
            zeroingScrollY();
            if (burgerMenuOpen) {
              dispatch(burgerMenuIsOpen());
            }
          }}
          className="navigation__logo-img"
        ></img>
      </NavLink>
      <Burger />
      <ul className="navigation__list">
        {menuLinks.map((link, index) => {
          return (
            <AnimatePresence>
              <li key={link.name} className="navigation__list-item">
                <NavLink
                  onClick={() => {
                    dispatch(toBackButton(String(window.location.href)));
                    dispatch(isSelestedMenuItem(index));
                    zeroingScrollY();
                  }}
                  className="navigation__list-item-link"
                  to={link.link}
                >
                  {link.name}

                  {Selested === index && <ActiveLine />}
                </NavLink>
              </li>
            </AnimatePresence>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

const ActiveLine: FC = () => {
  return (
    <AnimatePresence>
      <motion.div layoutId="activeItem" className="active-line" />;
    </AnimatePresence>
  );
};

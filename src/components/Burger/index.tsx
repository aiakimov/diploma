import { FC } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Burger.scss";
import { menuLinks } from "../Navigation";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { burgerMenuIsOpen } from "../../app/slices/burgerSlice";
import { isScrollingWindow } from "../../app/slices/toBackBtnSlice";

const Burger: FC = () => {
  const dispatch = useAppDispatch();

  const burgerIsOpen = useAppSelector((state) => {
    return state.burger.isOpen;
  });

  return (
    <>
      <button onClick={() => dispatch(burgerMenuIsOpen())} className="burger">
        {!burgerIsOpen ? (
          <MenuIcon fontSize="large" />
        ) : (
          <CloseIcon fontSize="large" />
        )}
      </button>
      <AnimatePresence>
        {burgerIsOpen && (
          <motion.ul
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "100vh",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ damping: 30 }}
            className="burger__list"
          >
            {menuLinks.map((link) => {
              return (
                <li key={link.name} className="burger__list-item">
                  <NavLink
                    onClick={() => {
                      dispatch(burgerMenuIsOpen());
                    }}
                    to={link.link}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;

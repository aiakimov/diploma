import { FC } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Widget.scss";
import { menuLinks } from "../Navigation";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { widgetMenuIsOpen } from "../../app/slices/widgetSlice";

import main from "../../img/widget/main.png";
import call from "../../img/widget/call.png";
import callback from "../../img/widget/callback.png";
import calendar from "../../img/widget/calendar.png";
import cancel from "../../img/widget/cancel.png";

const Widget: FC = () => {
  const dispatch = useAppDispatch();

  const widgetIsOpen = useAppSelector((state) => {
    return state.widget.isOpen;
  });

  return (
    <>
      <button
        onClick={() => dispatch(widgetMenuIsOpen())}
        className={widgetIsOpen ? "widget no-animation" : "widget"}
      >
        <motion.div className="widget-wrapper">
          {!widgetIsOpen ? (
            <img src={main} className="callback-img" />
          ) : (
            <img src={cancel} className="cancel-img" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {widgetIsOpen && (
          <motion.ul
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ damping: 30 }}
            className="widget__list"
          >
            <a href="tel:+375444851882" className="widget__list-item">
              <img src={call} alt="" />
              <h4>Позвонить</h4>
            </a>
            <li className="widget__list-item">
              <img src={callback}></img>
              <h4>Заказать звонок</h4>
            </li>
            <li className="widget__list-item">
              <img src={calendar} alt="" />
              <h4>Записаться</h4>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Widget;

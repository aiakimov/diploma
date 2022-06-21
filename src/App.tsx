import { FC, useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/404/Error";
import Specialists from "./components/Specialists";
import Doctor from "./components/Specialists/Doctor";
import Services from "./components/Services";
import ServicesByType from "./components/Services/ServicesByType";
import Widget from "./components/Widget";
import ToBackBtn, { BackBtn } from "./components/ToBackBtn";
import ModalCallBack from "./components/modals/ModalCallBack";
import ModalRecord from "./components/modals/ModalRecord";
import Alerts from "./components/Alerts";
import Reviews from "./components/Reviews";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ToBackBtn to={BackBtn.up} />
      <Widget />
      <Alerts />
      <AnimatePresence initial={false} exitBeforeEnter>
        <LayoutGroup>
          <Routes location={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:type" element={<ServicesByType />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/specialists/:id" element={<Doctor />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </LayoutGroup>
      </AnimatePresence>{" "}
      <ModalCallBack />
      <ModalRecord />
    </>
  );
}

export default App;

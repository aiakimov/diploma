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

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence>
        <LayoutGroup>
          <Routes location={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:type" element={<ServicesByType />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/specialists/:id" element={<Doctor />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </LayoutGroup>
      </AnimatePresence>
    </>
  );
}

export default App;

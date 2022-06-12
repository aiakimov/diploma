import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/404/Error";

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
            <Route path="*" element={<Error />} />
          </Routes>
        </LayoutGroup>
      </AnimatePresence>
    </>
  );
}

export default App;

import { motion } from "framer-motion";
import { FC } from "react";
import "./Error.scss";

import img from "../../img/404.jpg";

const Error: FC = () => {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0 },
      }}
      className="error"
    >
      <img src={img} alt="" />
    </motion.section>
  );
};

export default Error;

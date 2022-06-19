import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { getDoctors } from "../../app/slices/specialistsSlice";
import { isSelestedMenuItem } from "../../app/slices/navigationSlice";
import { Container } from "@mui/system";
import ToBackBtn, { BackBtn } from "../ToBackBtn";

import "./Doctor.scss";
import Footer from "../Footer";

const Doctor: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(getDoctors());
    dispatch(isSelestedMenuItem(3));
  }, []);
  const doctors = useAppSelector((state) => state.specialists.specialists);
  const thisDoctor = doctors[Number(id) - 1];
  return (
    <motion.div
      className="doctor"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0 },
      }}
    >
      <ToBackBtn to={BackBtn.back} />
      <Container>
        <h1 className="doctor-title">{thisDoctor.name}</h1>
        <div className="doctor-wrapper">
          <div className="doctor-wrapper__title">
            <img src={thisDoctor.photo} alt="" />
          </div>
          <div className="doctor-wrapper__contant">
            <h3>{thisDoctor.title}</h3>
            <span>{thisDoctor.about}</span>
            <p>{thisDoctor.education}</p>
          </div>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
export default Doctor;

import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getDoctors } from "../../app/slices/specialistsSlice";

import Button from "../Button";
import { ButtonStyle, ButtonType } from "../Button";

import "./Specialists.scss";

const Specialists: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, []);
  const doctors = useAppSelector((state) => state.specialists.specialists);
  const loading = useAppSelector(
    (state) => state.specialists.loadingSpecialists
  );

  return (
    <motion.div
      className="specialists"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.1 },
      }}
    >
      <Container>
        {" "}
        {loading && <div className="loader"></div>}
        <h1 className="title">Наши специалисты</h1>
        <h3 className="specialists-subtitle">
          Здесь вы можете ознакомиться с краткой биографией врачей, которые
          работают в нашей стоматологической клинике.
        </h3>
        <ul className="specialists__list">
          {!loading &&
            doctors.map((el) => (
              <li className="specialists__list-item" key={el.id}>
                <img src={el.photo} alt="" />
                <h3 className="specialists__list-item-subtitle">{el.name}</h3>
                <h4>{el.title}</h4>
                <Button
                  type={ButtonType.navLink}
                  text="подробнее"
                  style={ButtonStyle.fullfield}
                  pageLink={String(el.id)}
                />
              </li>
            ))}
        </ul>
      </Container>
    </motion.div>
  );
};
export default Specialists;

import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { getServicesByType, getServices } from "../../app/slices/servicesSlice";
import { isSelestedMenuItem } from "../../app/slices/navigationSlice";
import { Container } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";

import "./Services.scss";

const ServicesByType: FC = () => {
  const { type } = useParams();
  const dispatch = useAppDispatch();

  const services = useAppSelector((state) => state.services.servicesByType);
  const descriptions = useAppSelector((state) => state.services.services);
  const loading = useAppSelector((state) => state.services.loadingServices);

  useEffect(() => {
    dispatch(getServicesByType(String(type)));
    dispatch(isSelestedMenuItem(2));
  }, []);

  return (
    <motion.div
      className="service"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.1 },
      }}
    >
      <Container>
        {loading && <div className="loader"></div>}
        {!loading &&
          descriptions.map((el) => {
            if (el.type === type) {
              return (
                <div key={el.type} className="service__header">
                  <h1 className="title">{el.title}</h1>
                  <img src={el.img} alt="" />
                  <h2>{el.description}</h2>
                </div>
              );
            }
          })}
        {!loading && (
          <ul className="service__list">
            {services.map((el) => {
              return (
                <li className="service__list-item" key={el.title}>
                  <CircleIcon />
                  <div className="service__list-item-contant">
                    <h3>{el.title}</h3>
                    <p>{el.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </motion.div>
  );
};
export default ServicesByType;

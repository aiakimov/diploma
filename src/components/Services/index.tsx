import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getServices } from "../../app/slices/servicesSlice";

import Button, { ButtonStyle, ButtonType } from "../Button";

import "./Services.scss";
import Footer from "../Footer";

const Services: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, []);

  const services = useAppSelector((state) => state.services.services);
  const loading = useAppSelector((state) => state.services.loadingServices);

  return (
    <motion.div
      className="services"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0 },
      }}
    >
      <Container>
        <h1 className="title">Услуги Swiss Smile</h1>
        <span className="services-description">
          Обладатели здоровых и красивых зубов чаще становятся успешными
          личностями, в сравнении с людьми, которые не следят за состоянием
          полости рта. Современные технологии и швейцарские стандарты лечения в
          «Swiss Smile» позволяют сохранить здоровье, а также красоту зубов на
          долгие годы. Мы убеждены, что достичь максимального результата в уходе
          за зубами можно только при комплексном подходе. Наша клиника «Swiss
          Smile» в Москве — премиум-стоматология, занимающая лидирующие позиции
          на мировом рынке стоматологических услуг.
          <br />
        </span>
        <h2 className="services-subtitle">
          Самым взыскательным пациентам клиники доступен полный спектр
          стоматологических услуг:
        </h2>
        <ul className="services__list">
          {loading && <div className="loader"></div>}
          {!loading &&
            services.map((el) => (
              <li className="services__list-item" key={el.type}>
                <img className="services__list-item-img" src={el.img} alt="" />
                <div className="services__list-item-contant">
                  <h3>{el.title}</h3>
                  <p>{el.body}</p>{" "}
                  <Button
                    type={ButtonType.navLink}
                    text="подробнее"
                    style={ButtonStyle.fullfield}
                    pageLink={String(el.type)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </Container>
      {!loading && <Footer />}
    </motion.div>
  );
};
export default Services;

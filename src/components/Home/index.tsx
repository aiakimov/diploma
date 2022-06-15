import { FC } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

import "./Home.scss";
import swissLogo from "../../img/logo/logo.png";
import logo from "../../img/logo/big-logo-white.png";
import { ButtonStyle, ButtonType } from "../Button";
import Button from "../Button";

const Home: FC = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0 },
      }}
    >
      <section className="intro">
        <Container
          style={{
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="intro__wrapper">
            <img src={logo} />
            <h1 className="title">
              Знаменитая швейцарская стоматология* в Москве
            </h1>
            <span>*в составе мировой сети «Swiss Smile»</span>
            <Button
              href="https://www.swiss-smile.com/"
              text="перейти"
              style={ButtonStyle.fullfield}
              type={ButtonType.link}
            />
          </div>
        </Container>
      </section>
      <section className="about">
        <Container>
          <h2 className="title">У нас как в Швейцарии!</h2>

          <div className="about-contant">
            <p>
              <img src={swissLogo} alt="" />
              Клиника <a href="https://www.swiss-smile.com/">«Swiss Smile»</a> в
              Москве является единственной стоматологической клиникой на
              территории России, которая предоставляет своим пациентам настоящее
              швейцарское качество услуг.
            </p>
            <p>
              <img src={swissLogo} alt="" />
              Мы занимаем сегодня одну из лидирующих позиций на рынке
              стоматологических услуг в сегменте премиум класса. Переступая
              порог сети клиник{" "}
              <a href="https://www.swiss-smile.com/">«Swiss Smile»</a> в Москве,
              в Цюрихе или в Санкт-Моритце — будьте уверены, вы получите только
              самое лучшее!
            </p>
            <p>
              <img src={swissLogo} alt="" />
              Специалисты клиники работают по европейским стандартам и проходят
              обязательное обучение в Швейцарии. Главное достоинство клиники —
              междисциплинарный подход к каждому пациенту, подразумевающий
              совместную работу всех врачей клиники.
            </p>
            <p>
              <img src={swissLogo} alt="" />
              Стоматология{" "}
              <a href="https://www.swiss-smile.com/">«Swiss Smile»</a> была
              создана специально для взыскательных пациентов, для тех, кто особо
              требователен к качеству лечения и ожидает получить наивысший
              уровень сервиса и комфорта.
            </p>
            <Button
              style={ButtonStyle.fullfield}
              type={ButtonType.navLink}
              text="подробнее"
              pageLink="/about"
            />
          </div>
        </Container>
      </section>
      <div className="blue"></div>
    </motion.div>
  );
};

export default Home;

import { FC } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

import "./Home.scss";

import swissLogo from "../../img/logo/logo.png";
import logo from "../../img/logo/big-logo-white.png";

import icon1 from "../../img/Home/guarantee/icons/1.png";
import icon2 from "../../img/Home/guarantee/icons/2.png";
import icon3 from "../../img/Home/guarantee/icons/3.png";
import icon4 from "../../img/Home/guarantee/icons/4.png";

import phoneIcon from "../../img/widget/call.png";

import { ButtonStyle, ButtonType } from "../Button";
import Button from "../Button";
import Footer from "../Footer";

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
      <section className="record">
        <Container>
          <div className="record__wrapper">
            <img src={phoneIcon} alt="icon" />
            <a href="tel:+375444851882">
              <h1 className="title">+123-45-67-89</h1>
            </a>
            <p>
              Записаться на прием в клинику вы можете по телефону с 09:00 до
              21:00 (Пн-Пт), с 09:00 до 20:00 (Сб), Вс — выходной, или заполните
              форму заявки (мы перезвоним вам для уточнения деталей):
            </p>
            <Button
              text="Записаться на прием"
              type={ButtonType.button}
              style={ButtonStyle.gradient}
            />
          </div>
        </Container>
      </section>
      <section className="guarantee">
        <h2 className="title">Гарантии и уровень обслуживания</h2>
        <Container>
          <div className="guarantee__wrapper ">
            <div className="guarantee__box guarantee__box--reverse">
              <img src={icon1} alt="" />
              <p>На лечение и протезирование даем гарантию — до 5 лет.</p>
            </div>
            <div className="guarantee__box ">
              <img src={icon2} alt="" />
              <p>Гарантия анонимности личной информации.</p>
            </div>
            <div className="guarantee__box guarantee__box--reverse">
              <img src={icon3} alt="" />
              <p>
                Уровень качества обслуживания в нашей клинике соответствуют
                самым высоким мировым стандартам.
              </p>
            </div>
            <div className="guarantee__box">
              <img src={icon4} alt="" />
              <p>
                Полная стерильность операций — благодаря патентованным
                технологиям.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Home;

import { FC } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import Footer from "../Footer";

import "./Contacts.scss";

import img from "../../img/contacts/kontakty.jpg";

const Contacts: FC = () => {
  return (
    <motion.div
      className="contacts"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0 },
      }}
    >
      <section className="contacts__solution">
        <Container>
          <img src={img} alt="" />
          <h3>«Swiss Smile» — мировая премиальная стоматология</h3>
          <p>
            ЦАО, Хамовники — самое сердце столицы. Здесь, в историческом центре
            Москвы расположено единственное представительство «Swiss Smile» в
            России, где Вы можете ощутить высококачественное швейцарское
            обслуживание. Наш адрес — город Москва, Всеволожский переулок, д. 2,
            стр. 2. Подробнее ознакомиться с месторасположением и картой проезда
            можно ниже на этой странице. Уточнить интересующую информацию Вы
            можете по телефонам, указанным на нашем сайте. «Swiss Smile» —
            единственная Швейцарская стоматология в ЦАО. Основной сайт клиники в
            Швейцарии: https://www.swiss-smile.com/
          </p>
        </Container>
      </section>
      <section className="contacts__info">
        <Container>
          <div className="contacts__info-wrapper">
            <div className="contacts__info-text">
              <div>
                <span>Адрес клиники:</span>
                <br /> г. Москва, Всеволожский переулок, д. 2, стр. 2
              </div>
              <div>
                <span>График работы:</span>
                <br />с 09:00 до 21:00 (Пн-Пт),
                <br /> с 09:00 до 20:00 (Сб),
                <br /> с 10:00 до 16:00 (Вс).
              </div>
            </div>
            <div className="contacts__info-links">
              <a href="tel:+1234567890" aria-label="тел.+1234567890">
                <PhoneIcon /> тел.+1234567890
              </a>
              <a
                href="mailto:info@swiss-smile.pro"
                aria-label="info@swiss-smile.pro"
              >
                <EmailIcon /> info@swiss-smile.ok
              </a>
              <a href="https://api.whatsapp.com/send?phone=1234567890">
                <WhatsAppIcon /> WhatsApp: +1234567890
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section className="contacts__map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb3b099e5a3421c92e5a39ccebe6ddf344cd280eb1c0ae34d06baa3670e4e2d8&amp;source=constructor"
          width="100%"
          height="300"
          style={{
            marginBottom: "50px",
          }}
        ></iframe>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Contacts;

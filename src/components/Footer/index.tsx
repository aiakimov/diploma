import { Container } from "@mui/system";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <section className="footer">
      <Container>
        <div className="footer__wrapper">
          <SocialLinks />
          <div className="footer-navlinks">
            <Link
              to="/polzovatelskoe-soglashenie"
              className="footer-navlinks-item"
            >
              Пользовательское соглашение
            </Link>
            <Link
              to="/politika-konfidentsialnosti"
              className="footer-navlinks-item"
            >
              Политика конфидециальности
            </Link>
          </div>
        </div>
        <p>
          Клиника «Swiss Smile» ОГРН: 1147746185762, ИНН: 7704857549, КПП:
          770401001 Лицензия на осуществление медицинской деятельности №
          ЛО-77-01-016119 от 29.05.2018 г.
        </p>
        <p className="typing">developed by theAkim</p>
      </Container>
    </section>
  );
};

export default Footer;

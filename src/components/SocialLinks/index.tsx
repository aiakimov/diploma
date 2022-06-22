import { FC } from "react";

import "./SocialLinks.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialLinks: FC = () => {
  return (
    <div className="social-links">
      <a href="https://t.me/TheAkim">
        <TelegramIcon fontSize="large" />
      </a>
      <a href="https://www.instagram.com/the_akim/">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="https://ru-ru.facebook.com/JohnnyDepp">
        <FacebookIcon fontSize="large" />
      </a>
      <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
        <TwitterIcon fontSize="large" />
      </a>
    </div>
  );
};
export default SocialLinks;

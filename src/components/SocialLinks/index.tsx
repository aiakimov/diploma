import { FC } from "react";

import "./SocialLinks.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialLinks: FC = () => {
  return (
    <div className="social-links">
      <a href="">
        <TelegramIcon fontSize="large" />
      </a>
      <a href="">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="">
        <FacebookIcon fontSize="large" />
      </a>
      <a href="">
        <TwitterIcon fontSize="large" />
      </a>
    </div>
  );
};
export default SocialLinks;

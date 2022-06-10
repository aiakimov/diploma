import { FC } from "react";
import { Container } from "@mui/material";
import Navigation from "../Navigation";

import "./Header.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <Container>
        <Navigation />
      </Container>
    </div>
  );
};

export default Header;

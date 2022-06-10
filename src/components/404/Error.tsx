import { flexbox } from "@mui/system";
import { FC } from "react";

import img from "../../img/404.jpg";

const Error: FC = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        width: "100vw",
        backgroundColor: "rgb(0 180 223)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: -3,
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          maxHeight: "700px",
          height: "70%",
        }}
      />
    </div>
  );
};

export default Error;

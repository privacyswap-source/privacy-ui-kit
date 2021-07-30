import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10H4V19H0V10ZM14 6H18V19H14V6ZM7 0H11V19H7V0Z" fill="white" />
    </Svg>
  );
};

export default Icon;

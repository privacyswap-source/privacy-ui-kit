import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 0V20H2V16H0V14H2V11H0V9H2V6H0V4H2V0H6ZM18.005 0C19.107 0 20 0.898 20 1.99V18.01C20 19.109 19.107 20 18.005 20H8V0H18.005Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;

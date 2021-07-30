import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 7H6V9H15L10 4V7ZM5 11L10 16V13H14V11H5Z"
        fill="white"
      />
    </Svg>

    // <Svg viewBox="0 0 24 24" {...props}>
    //   <image width="25" height="25" href='/images/tradeicon.png'/>
    // </Svg>
  );
};

export default Icon;

import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 6L17.371 7.749C17.751 7.9 18 8.269 18 8.677V18C18 18.552 17.552 19 17 19H1C0.448 19 0 18.552 0 18V8.677C0 8.268 0.249 7.9 0.629 7.749L5 6H13ZM17 11H5V16H17V11ZM13 0C13.552 0 14 0.448 14 1V5H4V1C4 0.448 4.448 0 5 0H13Z"
        fill="white"
      />
    </Svg>

    // <Svg viewBox="0 0 24 24" {...props}>
    //   <image width="25" height="25" href='/images/poolicon.png'/>
    // </Svg>
  );
};

export default Icon;

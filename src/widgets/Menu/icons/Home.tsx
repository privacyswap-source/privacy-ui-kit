import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V10H0L10.327 0.612C10.5111 0.444478 10.7511 0.351643 11 0.351643C11.2489 0.351643 11.4889 0.444478 11.673 0.612L22 10H19V19Z"
        fill="white"
      />
    </Svg>

    // <Svg viewBox="0 0 24 24" {...props}>
    //   <image width="25" height="25" href='/images/homeicon.png'/>

    // </Svg>
  );
};

export default Icon;

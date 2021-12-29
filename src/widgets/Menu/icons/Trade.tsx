import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.8396 20.1642V6.54645" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9173 16.0681L16.8395 20.1648L12.7617 16.0681" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6.91115 3.83289V17.4507" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.8335 7.929L6.91127 3.83234L10.9891 7.929" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </Svg>
  );
};

export default Icon;

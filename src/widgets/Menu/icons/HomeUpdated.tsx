import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" height="32" id="Layer_1" viewBox="0 0 32 32" width="32"><path d="M14.1947,3.7572a2.5909,2.5909,0,0,1,3.6694.0086l10.333,10.401a2.6022,2.6022,0,0,1,.7563,1.8226L28.98,21.98,29,26.3888A2.5983,2.5983,0,0,1,26.405,29H24V17L16,9,12.4734,5.4735Z" fill="#4285f4"/><path d="M14.1161,3.7658,3.7831,14.1668a2.6022,2.6022,0,0,0-.7563,1.8226L3,21.98,7.98,17l8-8,3.5266-3.5265L17.7855,3.7572A2.5909,2.5909,0,0,0,14.1161,3.7658Z" fill="#ea4435"/><path d="M8,24V17L3.02,21.98,3,26.3888A2.5983,2.5983,0,0,0,5.595,29H8Z" fill="#fbc02d"/><rect fill="#00ac47" height="5" width="16" x="8" y="24"/></Svg>
  );
};

export default Icon;




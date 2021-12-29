import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" id="Layer_1" version="1.1" viewBox="0 0 128 128" >
      <circle cx="85" cy="45" fill="none" r="8" stroke="#00AEEF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/><path d="  M102.6476822,65.245285l-40.2463036,40.1161652c-3.1256676,3.1155624-8.1839256,3.1114655-11.3045425-0.0091476  l-26.7890854-26.789093c-3.1289177-3.1289139-3.1234951-8.2035599,0.0121021-11.3257828l40.077301-39.9063568  C65.8964539,25.8381672,67.9261017,25,70.0419083,25H97c4.4182816,0,8,3.5817223,8,8v26.5792809  C105,61.7055016,104.1535873,63.7442589,102.6476822,65.245285z" fill="none" stroke="#00AEEF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
      </Svg>
  );
};

export default Icon;



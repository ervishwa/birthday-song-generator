import cateborylogo from "../ui-images/cadbury-logo.png";
import logo2 from "../ui-images/logo2.png";
import hamburger from "../ui-images/hamburger.png";
import { useState } from "react";
import SidePanelContainer from "../controls/SidePanelContainer";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handelClick = () => {
    console.log("heloo");
    setIsVisible(!isVisible);
  };

  return (
    <div className="bg-blue-10 px-6 flex justify-between items-center gap-12 sticky top-0 z-10">
      <div className="flex items-center justify-center">
        <img className="h-12 md:h-8" src={cateborylogo} alt="" />
        <img className="h-32 md:h-20" src={logo2} alt="" />
      </div>
      <div>
        {isVisible ? (
          <SidePanelContainer widthPercentage="1/2" handelClick={handelClick}>
            <Sidebar handelClick={handelClick} />
          </SidePanelContainer>
        ) : (
          <img
            className="h-10 md:h-5"
            src={hamburger}
            alt=""
            onClick={handelClick}
          />
        )}
      </div>
    </div>
  );
}

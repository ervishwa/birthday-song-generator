import cateborylogo from "../ui-images/cadbury-logo.png";
import logo2 from "../ui-images/logo2.png";
import hamburger from "../ui-images/hamburger.png";

export default function Navbar() {
  return (
    <div className="bg-blue-10 px-6 flex justify-between items-center gap-12">
      <div className="flex items-center justify-center">
        <img className="h-12 md:h-8" src={cateborylogo} alt="" />
        <img className="h-32 md:h-20" src={logo2} alt="" />
      </div>
      <div>
        <img className="h-10 md:h-5" src={hamburger} alt="" />
      </div>
    </div>
  );
}

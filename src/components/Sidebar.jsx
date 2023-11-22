import cross from "../ui-images/cross.png";
import mdlzlogoreversed from "../ui-images/mdlz-logo-reversed.png";

export default function Sidebar({ handelClick }) {
  return (
    <div className="bg-bg-landing bg-cover bg-no-repeat flex flex-col justify-between h-screen">
      <div className="flex justify-end">
        <img
          className="h-8 m-6"
          src={cross}
          alt="CROSS SIGN"
          onClick={handelClick}
        />
      </div>
      <div>
        <div className="p-6 border-y border-y-gray-400 text-right">
          <p className="text-white font-gibsonsemibold">How To Participate</p>
        </div>
        <div className="p-6 border-b border-b-gray-400 text-right">
          <p className="text-white font-gibsonsemibold">Term & Conditions</p>
        </div>
        <div className="p-6 border-b border-b-gray-400 text-right">
          <p className="text-white font-gibsonsemibold">Privacy Policy</p>
        </div>
        <div className="p-6 border-b border-b-gray-400 text-right">
          <p className="text-white font-gibsonsemibold">Contact Us</p>
        </div>
      </div>
      <div className="bg-white flex justify-center p-4">
        <img src={mdlzlogoreversed} className="h-14" alt="MDLZ LOGO" />
      </div>
    </div>
  );
}

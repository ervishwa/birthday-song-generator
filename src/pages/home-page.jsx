import Form from "../controls/Form";
import celebrations from "../ui-images/celebrations.png";
import asset1 from "../ui-images/asset-1.png";
import yellowtone from "../ui-images/yellow-tone.png";
import progressbar from "../ui-images/progress-bar.png";
import { useState } from "react";

export default function Home() {
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  return (
    <div
      className={`bg-bg-landing w-screen h-auto bg-cover bg-no-repeat text-center p-2 relative ${
        isOtpModalOpen && "blur-md"
      } `}
    >
      <img src={progressbar} className="mx-auto mt-10 w-64" alt="" />
      <img className="mx-auto" src={celebrations} alt="" />
      <p className="text-white text-lg mb-2 font-gibsonsemibold absolute top-[350px] left-36">
        Register to create
      </p>
      <div className="mb-1">
        <Form
          isOtpModalOpen={isOtpModalOpen}
          setIsOtpModalOpen={setIsOtpModalOpen}
        />
      </div>
      <img
        src={asset1}
        className="absolute left-1 bottom-5 md:left-20"
        alt="ASEET"
      />
      <img
        src={yellowtone}
        className="absolute right-10 bottom-12 h-24 md:right-40"
        alt="YELLOW TONE"
      />
    </div>
  );
}

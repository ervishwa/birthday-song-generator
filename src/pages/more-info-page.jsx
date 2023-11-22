import { useState } from "react";
import MorewInfoForm1 from "../components/MoreInfoForm1";
import asset1 from "../ui-images/asset-1.png";
import balloon from "../ui-images/balloon.png";
import message from "../ui-images/message.png";
import MoreInfoForm2 from "../components/MoreInfoForm2";
import progressbar3 from "../ui-images/progress-bar3.png";

export default function MoreInfo() {
  const [showMoreQuestion, setShowMoreQuestion] = useState(false);
  return (
    <div>
      <img src={progressbar3} className="mx-auto my-4" alt="" />
      <div className="flex justify-around md:justify-around mt-4">
        <img
          src={asset1}
          className="h-20 relative bottom-[-190px] left-6"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-white font-gibsonsemibold">
            Tell us a little more about them...
          </p>
          <img src={message} alt="" />
        </div>
        <img
          src={balloon}
          className="h-20 relative bottom-[-180px] right-5"
          alt=""
        />
      </div>
      {showMoreQuestion ? (
        <MoreInfoForm2 />
      ) : (
        <MorewInfoForm1 handelAnswerMore={setShowMoreQuestion} />
      )}
    </div>
  );
}

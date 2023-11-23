import capgift from "../ui-images/cap-gift.png";
import asset1 from "../ui-images/asset-1.png";
import balloon from "../ui-images/balloon.png";
import UserInfoForm from "../controls/UserInfoForm";
import progressbar1 from "../ui-images/progress-bar1.png";

export default function InfoPage() {
  return (
    <div className="bg-bg-landing h-screen w-screen bg-cover bg-no-repeat text-center p-2 relative">
      <img className="mx-auto mb-6 mt-2 w-64" src={progressbar1} alt="" />
      <p className="text-white text-xl font-gibsonsemibold">
        Tell us about your loved one...
      </p>
      <div className="flex justify-between">
        <img className="h-20 relative top-28 left-2" src={asset1} alt="" />
        <div>
          <img src={capgift} alt="" />
          <p className="text-center text-2xl  text-white relative top-[-45px] font-gibsonsemibold">
            Their Name
          </p>
        </div>
        <img className="h-20 relative top-28 right-12" src={balloon} alt="" />
      </div>
      <UserInfoForm />
    </div>
  );
}

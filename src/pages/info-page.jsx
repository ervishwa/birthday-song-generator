import capgift from "../ui-images/cap-gift.png";
import asset1 from "../ui-images/asset-1.png";
import balloon from "../ui-images/balloon.png";
import UserInfoForm from "../controls/UserInfoForm";

export default function InfoPage() {
  return (
    <div className="bg-bg-landing h-screen w-screen bg-cover bg-no-repeat text-center p-2 relative">
      <p className="text-white text-xl">Tell us about your loved one...</p>
      <div className="flex justify-between">
        <img className="h-20 relative top-28 left-2" src={asset1} alt="" />
        <div>
          <img src={capgift} alt="" />
          <p className="text-center text-2xl  text-white relative top-[-45px]">
            Their Name
          </p>
        </div>
        <img className="h-20 relative top-28 right-12" src={balloon} alt="" />
      </div>
      <UserInfoForm />
    </div>
  );
}

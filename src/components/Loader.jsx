import asset1 from "../ui-images/asset-1.png";
import purpleMusicIcon from "../ui-images/purple-music-tone.png";
import purpletone from "../ui-images/purple-tone.png";
import yellowtone from "../ui-images/yellow-tone.png";
import rock from "../ui-images/Icons/rock.png";

export default function Loader() {
  return (
    <div className="p-5 h-screen">
      <img className="ml-12 mt-20" src={asset1} alt="" />
      <p className="text-white text-3xl text-center my-4">
        Please wait while we compose your song...
      </p>
      <div className="flex justify-between">
        <img src={purpleMusicIcon} alt="" className="h-16 animate-pulse" />
        <div className="bg-yellow-400 rounded-full h-44 w-44 animate-ping">
          <img className="h-48" src={rock} alt="" />
        </div>
        <img src={yellowtone} alt="" className="h-16 animate-pulse" />
      </div>
      <div className="flex justify-between">
        <img
          src={purpletone}
          alt=""
          className="h-24 ml-12 mt-32 animate-ping"
        />
        <img src={asset1} alt="" className="h-24 mr-8 mt-8 animate-bounce" />
      </div>
    </div>
  );
}

import asset1 from "../ui-images/asset-1.png";
import purpleMusicIcon from "../ui-images/purple-music-tone.png";
import yellowtone from "../ui-images/yellow-tone.png";
import balloon from "../ui-images/balloon.png";
import balloon2 from "../ui-images/balloon2.png";
import celebrationbg from "../ui-images/celebration-bg-hashtag.png";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import playbutton from "../ui-images/play-button.png";
import Button from "../controls/Button";

export default function DownloadPage() {
  return (
    <div className="p-5">
      <p className="text-3xl text-white text-center m-5">
        Your unique song is ready!
      </p>
      <div className="flex">
        <div className="flex flex-col justify-evenly px-5">
          <img src={asset1} className="h-20" alt="" />
          <img src={purpleMusicIcon} className="h-20" alt="" />
          <img src={balloon} className="h-20" alt="" />
        </div>
        <div className="border border-yellow-500 flex flex-col items-center rounded-3xl overflow-hidden">
          <p className="text-yellow-400 text-center mt-8">
            Happy Birthday Ronit!
          </p>
          <div className="flex flex-col justify-center items-center relative mb-8">
            <img src={celebrationbg} alt="" />
            <img
              src={playbutton}
              alt=""
              className="absolute z-10 top-[230px] h-28"
            />
            <p className="text-white">A song for you made by Rhea</p>
          </div>

          <p className="text-white text-3xl w-3/4 text-center">
            It's your boy. gotta give a shoutout to Ronit.
          </p>

          <div className="flex mt-8 w-full  overflow-hidden">
            <div className="border-r border-r-blue-800 text-center flex-1 bg-yellow-500 p-5 flex justify-center gap-2 items-center">
              <p>Share</p>
              <ShareRoundedIcon />
            </div>
            <div className="text-center flex-1 bg-yellow-500 p-5 flex justify-center gap-2 items-center">
              <p>Download</p>
              <span class="material-symbols-outlined">download</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly px-5">
          <img src={balloon2} alt="" className="h-20" />
          <img src={yellowtone} alt="" className="h-20" />
          <img src={asset1} alt="" className="h-20" />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button name="Redeem Gift" theme="primary" size="sm" />
        <Button name="Create Again" theme="primary" size="sm" />
      </div>
    </div>
  );
}

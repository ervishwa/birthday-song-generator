import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../controls/Button";
import celebrationbg from "../ui-images/celebration-bg-hashtag.png";
import birthdaySong from "../audio/birthday-song.mp3";

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const navlink = useNavigate();

  const handelClick = () => {
    navlink("home");
  };

  useEffect(() => {
    // const audio = new Audio(birthdaySong);
    // audio.muted = true;
    // audio.play();

    // TODO: can't able to play song because new browser policy have to look new way for it.

    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  }, []);
  return (
    <div className="h-screen w-screen">
      <div className="bg-bg-landing bg-cover bg-no-repeat h-full w-full flex justify-center items-center flex-col">
        <img
          className="decoration-transparent cursor-pointer"
          src={celebrationbg}
          alt=""
        />
        <p className="text-lg text-white landing-page-heading font-DairyMilkFont">
          A unique birthday song for everyone!
        </p>
        <p className="text-white">
          इस birthday पर कुछ, अच्छा हो जाए कुछ मीठा हो जाए,
        </p>
        {showContent && (
          <div className="text-center">
            <p className="text-4xl mt-12 mb-7 md:mt-7 text-white font-gibsonsemibold">
              Welcome, Rhea!
            </p>
            <Button
              name={"Continue"}
              theme={"primary"}
              size={"sm"}
              onClick={handelClick}
            />
            <p
              className="text-white mt-3 underline underline-offset-[5px] text-2xl cursor-pointer font-gibsonregular"
              onClick={handelClick}
            >
              New signup
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

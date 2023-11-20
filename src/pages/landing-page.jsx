import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import celebrationbg from "../ui-images/celebration-bg-hashtag.png";

export default function LandingPage() {
  const navlink = useNavigate();

  const handelClick = () => {
    console.log("clicking continue button on landing page");
    navlink("/home");
  };
  return (
    <div className="h-screen w-screen">
      <div className="bg-bg-landing bg-cover bg-no-repeat h-full w-full flex justify-center items-center flex-col">
        <img
          className="decoration-transparent cursor-pointer"
          src={celebrationbg}
          alt=""
        />
        <p className="text-lg text-white">
          A unique birthday song for everyone!
        </p>
        <p className="text-white">
          इस जन्मदिन पर कुछ, अच्छा हो जाए कुछ मीठा हो जाए,
        </p>
        <div className="text-center">
          <p className="text-4xl mt-12 mb-7 md:mt-7 text-white">
            Welcome, Rhea!
          </p>
          <Button
            name={"Continue"}
            theme={"primary"}
            size={"sm"}
            onClick={handelClick}
          />
          <p className="text-white mt-3 underline underline-offset-[5px] text-2xl cursor-pointer">
            New signup
          </p>
        </div>
      </div>
    </div>
  );
}

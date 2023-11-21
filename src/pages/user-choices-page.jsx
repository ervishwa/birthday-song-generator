import purpleMusicIcon from "../ui-images/purple-music-tone.png";
import headphone from "../ui-images/headphone.png";
import balloon2 from "../ui-images/balloon2.png";
import ChoiceType from "../components/ChoiceType";
import happy from "../ui-images/Icons/happy.png";
import romantic from "../ui-images/Icons/romantic.png";
import funny from "../ui-images/Icons/funny.png";
import motivational from "../ui-images/Icons/motivational.png";
import calm from "../ui-images/Icons/calm.png";
import rap from "../ui-images/Icons/rap.png";
import rock from "../ui-images/Icons/rock.png";
import pop from "../ui-images/Icons/pop.png";
import desi from "../ui-images/Icons/desi.png";
import edm from "../ui-images/Icons/edm.png";
import male from "../ui-images/Icons/male.png";
import female from "../ui-images/Icons/female.png";
import Button from "../controls/Button";
import asset1 from "../ui-images/asset-1.png";

const Mood = {
  Happy: happy,
  Romantic: romantic,
  Funny: funny,
  Motivational: motivational,
  calm: calm,
};

const Genre = {
  Rap: rap,
  Rock: rock,
  Pop: pop,
  Desi: desi,
  EDM: edm,
};

const singerType = {
  Male: male,
  Female: female,
};

const handelClick = () => {
  console.log("hello from user-choices-page");
};

export default function UserChoicePage() {
  return (
    <div className="bg-bg-landing h-full w-screen bg-cover bg-no-repeat text-center p-2 relative">
      <div className="flex md:justify-around">
        <img
          src={purpleMusicIcon}
          className="h-16 relative bottom-[-350px]"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-white">
            What would you like their song's vibe to be?
          </p>
          <img src={headphone} alt="" />
        </div>
        <img
          src={balloon2}
          className="h-20 relative bottom-[-180px] right-4"
          alt=""
        />
      </div>
      <div className="px-4 overflow-scroll h-96 mb-4">
        <ChoiceType choices={Mood} choicetype="Mood" />
        <ChoiceType choices={Genre} choicetype="Genre" />
        <ChoiceType choices={singerType} choicetype="Singer's voice" singer />
      </div>
      <div className="relative">
        <div className="">
          <Button
            name={"Proceed"}
            theme={"primary"}
            size={"sm"}
            onClick={handelClick}
          />
          <img
            className="h-20 absolute top-[-8px] right-4"
            src={asset1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

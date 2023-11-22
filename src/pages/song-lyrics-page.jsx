import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import axios from "axios";

const tempdata = "lorem2dsjdnsjdnsdnsdnsjdsjkndjdnsd";

export default function LyricsPage() {
  const [data, setData] = useState(tempdata);

  const {
    name,
    gender,
    petName,
    whatmakesAngry,
    funniestThing,
    whatMakeSmile,
    favouriteMovie,
    favouriteSport,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const createSong = () => {
    navigate("/download");
  };

  const url = "";

  const getdata = async () => {
    const data = await axios.get(url);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    console.log(
      name,
      gender,
      petName,
      whatmakesAngry,
      funniestThing,
      whatMakeSmile,
      favouriteMovie,
      favouriteSport
    );
    //call the gedata function here.
  }, []);

  return (
    <div className="p-4 text-center">
      <p className="text-white text-3xl m-4">Your song's lyrics are ready!</p>
      <Button name="Version 1" theme="primary" size="xs"></Button>
      <div className="bg-white text-blue-950 text-2xl overflow-scroll h-[600px] rounded-xl p-8 text-start m-4">
        {data}
      </div>
      <div className="flex gap-2 mt-16">
        <Button name="Recreate Lyrics" theme="tertiary" size="sm" />
        <Button
          name="Create Song"
          theme="primary"
          size="sm"
          onClick={createSong}
        />
      </div>
    </div>
  );
}

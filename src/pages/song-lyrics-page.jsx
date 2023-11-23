import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import axios from "axios";
import Loader from "../components/Loader";
import progressbar4 from "../ui-images/progress-bar4.png";

export default function LyricsPage() {
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const [err, setError] = useState("");

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

  const url = "https://birthday-song-generator.onrender.com/getlyrics";

  const getdata = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, {
        name,
        gender,
        petName,
        whatmakesAngry,
        funniestThing,
        whatMakeSmile,
        favouriteMovie,
        favouriteSport,
      });
      console.log(response);
      const lyrics = response.data.data;
      setData(lyrics);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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
    getdata();
  }, []);

  if (isloading) {
    return <Loader />;
  }
  if (err) {
    return <h1>Something went Wrong try Again.. Please</h1>;
  }
  return (
    <div className="p-4 text-center">
      <img src={progressbar4} className="mx-auto w-64" alt="" />
      <p className="text-white text-3xl m-4 font-gibsonsemibold">
        Your song's lyrics are ready!
      </p>
      <Button name="Version 1" theme="primary" size="xs"></Button>
      <div className="bg-white text-2xl overflow-scroll h-[600px] rounded-xl p-8 text-start m-4 font-gibsonregular text-blue-10">
        {data}
      </div>
      <div className="flex gap-2 mt-16">
        <Button
          name="Recreate Lyrics"
          theme="tertiary"
          size="xs"
          onClick={getdata}
        />
        <Button
          name="Create Song"
          theme="primary"
          size="xs"
          onClick={createSong}
        />
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import axios from "axios";
import Loader from "../components/Loader";

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

  const url = "http://localhost:5050/generate-song-lyrics";

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
      const lyrics = response.data.lyrics;
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

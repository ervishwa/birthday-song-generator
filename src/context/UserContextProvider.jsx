const { createContext, useState } = require("react");

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [petName, setPetName] = useState("");
  const [whatmakesAngry, setWhatmakesAngry] = useState("");
  const [funniestThing, setFunniestThing] = useState("");
  const [whatMakeSmile, setWhatMakeSmile] = useState("");
  const [favouriteMovie, setFavouriteMovie] = useState("");
  const [favouriteSport, setFavouriteSport] = useState("");

  const contextValue = {
    name,
    setName,
    gender,
    setGender,
    petName,
    setPetName,
    whatmakesAngry,
    setWhatmakesAngry,
    funniestThing,
    setFunniestThing,
    whatMakeSmile,
    setWhatMakeSmile,
    favouriteMovie,
    setFavouriteMovie,
    favouriteSport,
    setFavouriteSport,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

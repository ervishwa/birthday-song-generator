import { useState } from "react";

export default function ChoiceType({ choices, choicetype, singer }) {
  const [selectedChoice, setSelectedChoice] = useState("Romantic");

  const getClasses = (choiceName) => {
    if (choiceName === selectedChoice) {
      return "bg-yellow-400";
    } else {
      return "bg-white";
    }
  };
  return (
    <div className="m-4 border-4 border-yellow-400 rounded-3xl mb-16">
      <div className="bg-yellow-400 h-8 rounded-t-xl">
        <p className="text-blue-900">{choicetype}</p>
      </div>
      <div className="flex justify-around p-3">
        {Object.keys(choices).map((currChoice) => {
          if (singer) {
            return (
              <div
                key={currChoice}
                className="flex flex-col gap-2 justify-center p-4"
              >
                <div
                  className={`${getClasses(
                    currChoice
                  )} p-4 rounded h-24 w-40 flex justify-center relative`}
                  onClick={() => setSelectedChoice(currChoice)}
                >
                  <img
                    className="h-24 absolute top-[-14px]"
                    src={`${choices[currChoice]}`}
                    alt=""
                  />
                </div>
                <p className="text-white">{currChoice}</p>
              </div>
            );
          }
          return (
            <div
              key={currChoice}
              className="flex flex-col gap-2 justify-center"
            >
              <div
                className={`${getClasses(
                  currChoice
                )} p-4 rounded-full h-20 w-20`}
                onClick={() => setSelectedChoice(currChoice)}
              >
                <img className="h-12" src={`${choices[currChoice]}`} alt="" />
              </div>
              <p className="text-white">{currChoice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

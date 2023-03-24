import React from "react";
import { WordDetailsProps } from "./Types/types";

const WordDetails: React.FC<WordDetailsProps> = ({ result }) => {
  console.log(result);
  const { word, phonetics, meanings } = result;

  const playAudio = () => {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <div className="card mt-20">
      <div className="p-20">
        <h3>Word</h3>
        <div className="flex">
          <p>{word}</p>

          <p className="pl-20"> {meanings[0].partOfSpeech} </p>
          <p className="pl-20"> {phonetics[0].text} </p>
          <div className="pl-20">
            <p className="audio" onClick={playAudio}>
              {" "}
              play audio{" "}
            </p>
          </div>
        </div>

        <div>
          <h3>Meaning:</h3>
          <p>{meanings[0].definitions[0].definition}</p>
        </div>

        <div>
          <h2>Synonyms </h2>
          <p>
            {meanings[0].synonyms.map((item: any, index: any) => {
              return <p key={index}>{item}</p>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordDetails;

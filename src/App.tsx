import React, { useState } from "react";
import axios from "axios";
import WordDetails from "./components/WordDetails";
import "./App.css";
import { Word } from "./components/Types/types";

const App: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [result, setResult] = useState<null | Word>(null);
  const api: string = "https://api.dictionaryapi.dev/api/v2/entries/en";
  const handleSearch = async () => {
    try {
      const res = await axios.get(`${api}/${keyword}`);

      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  };
  const handleClear = () => {
    setKeyword("");
    setResult(null);
  };

  return (
    <div className="App">
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button className="button" type="submit" onClick={handleSearch}>
        Search
      </button>
      <button
        disabled={!result}
        className="button"
        type="submit"
        onClick={handleClear}
      >
        Clear
      </button>
      {result && <WordDetails {...{ result }} />}
    </div>
  );
};

export default App;

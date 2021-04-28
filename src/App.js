import React, { useState } from "react";
import "./App.css";
import scores from "./scores";
import Countries from "./Countries";
import WorldTable from "./WorldTable";

function App() {
  scores.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const [sort, setSort] = useState("descending");

  const toggleSort = () => {
    setSort((sort) => {
      if (sort === "descending") {
        return "ascending";
      } else {
        return "descending";
      }
    });
  };

  let worldData = [];
  scores.forEach((data) => {
    worldData = worldData.concat(data.scores).sort((a, b) => {
      return b.s - a.s;
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <WorldTable worldData={worldData} />
        <h1> High Scores Per Country</h1>
        <button
          type="button"
          onClick={toggleSort}
          className="btn btn-success mx-auto"
        >
          Sort Score
        </button>
        <Countries countries={scores} sort={sort} />
      </header>
    </div>
  );
}

export default App;

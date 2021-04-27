// import React, { useState } from "react";
import "./App.css";
import scores from "./scores";
import Countries from "./Countries";

function App() {
  scores.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  return (
    <div className="App">
      <header className="App-header">
        <h1> High Scores Per Country</h1>
        <Countries countries={scores} />
      </header>
    </div>
  );
}

export default App;

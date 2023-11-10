import React from "react";
import "./App.css";
import Intro from "../Intro";
import Series from "../../containers/Series";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series Lists</h1>
      </header>
      <Intro message={"Here you can find all of your most loved series"} />
      <Series />
    </div>
  );
}

export default App;

import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';


function App() {


  return (
    <div className="App container-fluid">
      <div className="row">
      </div>
      <div className="row border bg-light d-flex flex-column">
        <Header />
        <Hangman />
      </div>
    </div>
  );
}

export default App;
import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';


function App() {


  return (
    <div className="App">
      <div className="">
        <Header />
        <Hangman />
      </div>
    </div>
  );
}

export default App;
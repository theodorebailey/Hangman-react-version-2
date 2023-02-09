import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';
import Season from './Season'


function App() {


  return (
    <div className="App">
      <div className="">
        <Header />
        <Hangman />
        <Season />
      </div>
    </div>
  );
}

export default App;
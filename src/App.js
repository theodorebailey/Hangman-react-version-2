import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';
import Season from './Season'


function App() {


  return (
    <div className="App">
        <Header />
        <Hangman />
        <Season />
    </div>
  );
}

export default App;
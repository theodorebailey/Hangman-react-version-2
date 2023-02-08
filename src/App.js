import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';
import Help from './components/Help'

function App() {
  return (
    <div className="App">
      <Header />
      <Hangman />
      <Help />
    </div>
  );
}

export default App;
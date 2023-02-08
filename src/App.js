import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';
import Help from './components/Help'

function App() {
  return (
    <div className="App container-fluid">
      <div className="row border bg-light">
      <Header />
      <Hangman />
      <Help />
      </div>
    </div>
  );
}

export default App;
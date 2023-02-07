import React from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';

function App() {
  return (
    <div className="App">
      <Header />
      <Hangman />
    </div>
  );
}

export default App;
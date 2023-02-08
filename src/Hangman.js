import React, { Component } from "react";
import { selectedWord } from './Dictionary';
import Newcomp from './components/Newcomp';

import './App.css';

import img0 from './hangmandrawings/state1.GIF';
import img1 from './hangmandrawings/state2.GIF';
import img2 from './hangmandrawings/state3.GIF';
import img3 from './hangmandrawings/state4.GIF';
import img4 from './hangmandrawings/state5.GIF';
import img5 from './hangmandrawings/state6.GIF';
import img6 from './hangmandrawings/state7.GIF';
import img7 from './hangmandrawings/state8.GIF';
import img8 from './hangmandrawings/state9.GIF';
import img9 from './hangmandrawings/state10.gif';
import img10 from './hangmandrawings/state11.GIF';   

class Hangman extends Component {

  static defaultProps = {
    maxWrong: 10,
    images: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
  };

  constructor(props) {
    super(props);
    this.state = {
      wrongLetters: 0,
      guessed: new Set(),
      answer: selectedWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      wrongLetters: 0,
      guessed: new Set(),
      answer: selectedWord(),
    });
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      wrongLetters: st.wrongLetters + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  generateKeypad() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        type="button" 
        className={`btn btn-dark border border-success`}
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.wrongLetters >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "Congrats, You have won the Game";
    if (gameOver) gameState = "Better Luck Next Time";
    let restart = gameOver || isWinner;
    return (
      <div>
        <img src={this.props.images[this.state.wrongLetters]} />
        <p>
          Guessed Left: {this.props.maxWrong - this.state.wrongLetters} /{" "}
          {this.props.maxWrong}
        </p>
        <p className="">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="">{gameState}</p>
        {restart && (
          <button type="button" className="btn btn-primary" onClick={this.reset}>
            Reset game?
          </button>
        )}
        <div className="container mt-4">
        <div>
            <h3>Instructions</h3>
            <p>Use the keypad to guess the correct characters of the word before it is too late!</p>
        </div>
      </div>
      <Newcomp />
      </div>
    );
  }
}

export default Hangman;
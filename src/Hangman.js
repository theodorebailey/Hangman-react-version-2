import React, { Component } from "react";
import { selectedWord } from './Dictionary';
import Buttoncomp from './components/Buttoncomp';

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
        {letter.toUpperCase()}
      </button>
    ));
  }

  render() {
    // game over is evaluated to state, if wrong letters exceeds maximum wrong guesses
    const gameOver = this.state.wrongLetters >= this.props.maxWrong;
    // winning results from evaluation of guessedWord joined value equaling states dictionary word
    const winningGame = this.guessedWord().join("") === this.state.answer;
    // variable set to function generate keypad to populate page with usable keys
    let keyPadGenerator = this.generateKeypad();

    // if guessed word === states answer
    if (winningGame) {
      // reassign keypad value of string referring to game state win or loss
      keyPadGenerator = "Winner";
      // else if wrongletters === maximum wrong guesses of 10
    } else if (gameOver) {
      // reassign keypad value of string referring to game state win or loss
      keyPadGenerator = "Game Over";
    }

    // restartGame is either 
    let restartGame = gameOver || winningGame;
    return (
      <div className="container">
        {/* populate game with hangman images dependent on wrongLetter count */}
        <img src={this.props.images[this.state.wrongLetters]} />
        <div className="container mt-4">
          Guesses Left: {this.props.maxWrong - this.state.wrongLetters} / {" "}
          {this.props.maxWrong}
        </div>
        <div className="">
          {!gameOver ? this.guessedWord(): this.state.answer.toUpperCase()}
        </div>
        {/* populate game with generated keypad */}
        <div className="">{keyPadGenerator}</div>
        {restartGame && (
          <button type="button" className="btn btn-primary m-4" onClick={this.reset}>
            Reset game?
          </button>
        )}
        <div className="container mt-4">
        <div>
            <h3>Instructions</h3>
            <p>Use the keypad to guess the correct characters of the word before it is too late!</p>
        </div>
      </div>
      <Buttoncomp />
      <br />
      <Buttoncomp />
      <br />
      <Buttoncomp />
      <br />
      <Buttoncomp />
      <br />
      <Buttoncomp />
      </div>
    );
  }
}

export default Hangman;
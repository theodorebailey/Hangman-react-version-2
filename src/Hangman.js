import React, { Component } from "react";
import { selectedWord } from './Dictionary';
import Buttoncomp from './components/Buttoncomp';

import './App.css';

// Import hangman image files
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

// create class component with built in state object
class Hangman extends Component {

  // set default component properties
  static defaultProps = {
    maxWrong: 10,
    images: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
  };

  // create consutructor with states
  constructor(props) {
    super(props);
    this.state = {
      // wrong letters preset
      wrongLetters: 0,
      // Set lets us store our unique values
      guessed: new Set(),
      // answer set to selected word function return value
      answer: selectedWord(),
    };
    // use bind to set value to this keyword
    this.handleGuess = this.handleGuess.bind(this);
    // use bind again for reset
    this.reset = this.reset.bind(this);
  }

  // reset function required to reset information to original settings
  reset() {
    this.setState({
      // reset will reset values
      wrongLetters: 0,
      // Set data back
      guessed: new Set(),
      // create a new selected word
      answer: selectedWord(),
    });
  }

  // guessed word function
  guessedWord() {
    // return answer .split, map letters if true selected populate or populate blank space
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  // handle keypad
  handleGuess(e) {
    // event, grab letter
    let letter = e.target.value;
    // set state to letter
    this.setState((state) => ({
      // add letter to guessed letters
      guessed: state.guessed.add(letter),
      // evaluate wrong letter based on if answer includes letter
      wrongLetters: state.wrongLetters + (state.answer.includes(letter) ? 0 : 1),
    }));
  }

  // generate keypad
  generateKeypad() {
    // return string split then mapped and set items to parameter letter
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      // return a button
      <button
        type="button" 
        className={`btn btn-dark border border-success`}
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {/* populate buttons with letter set to uppercase */}
        {letter.toUpperCase()}
      </button>
    ));
  }

  // class components requrie render
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
        <div className="m-4"> {this.props.maxWrong !== this.state.wrongLetters.length}
        {/* Guesses left is max guesses minus wrong letters */}
        Guesses Left: {this.props.maxWrong - this.state.wrongLetters} / {" "}
        {this.props.maxWrong}
        <br />
        {/* if game not over, tertiary operator to  */}
        {!gameOver ? this.guessedWord(): this.state.answer.toUpperCase()} 
        </div>
        {/* populate game with generated keypad or win or loss statement */}
        <div className="mt-4">{keyPadGenerator}</div>
        {/* reset game button */}
          <button type="button" className="btn btn-primary m-4" onClick={this.reset}>
            Reset game?
          </button>
        <div className="container mt-4">
      </div>
      {/* Dancing components */}
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
import React, { Component } from "react";
// import { selectedWord } from './components/Dictionary';
import { selectedWord } from './Dictionary';
import { Bordercolour} from './Bordercolour';
import { Buttoncolour } from './Buttoncolour';
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
        class={`btn ${Buttoncolour()} border ${Bordercolour()}`}
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
      <div className="Hangman">
        <img src={this.props.images[this.state.wrongLetters]} alt="HangMan" />
        <p>
          Guessed Left: {this.props.maxWrong - this.state.wrongLetters} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the Programming Language</p>
        <p className="">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="">{gameState}</p>
        {restart && (
          <button type="button" class="btn btn-primary" onClick={this.reset}>
            Reset game?
          </button>
        )}
        <Newcomp />
      </div>
    );
  }
}

export default Hangman;
import React from 'react'

// requires our event listener

let guesses = 11;

// pass down wrongLetters as paramter, remember to destructor (unpack values nested in our array / objects)
const Wrongletters = ({wrongLetters}) => {



  // generateKeypad () {
  //   return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
  //     <button key={letter} value={letter} onClick={this.handleGuess} disabled={this.state.guess.has(letter)}>{letter}</button>
  //   ))
  // }


  return (
    <div className="wrong-letters">
        <div>
            {/* if greater than 0 AND  */}
            {/* {wrongLetters.length > 0 && <p>Wrong</p>} */}
            {/* map through letters, use index i, set key to i in span and   */}
            {wrongLetters
                .map( (letter, i) => <span key={i}>{letter.toUpperCase()}</span>)
                // reduce will add our comma between every span which will be assigned our letters
                .reduce((prev, curr) => prev == null ? [curr] : [prev, ', ', curr], null)}
        </div>
        { guesses - wrongLetters.length == 1 && <p className="guesses">You have: {guesses - wrongLetters.length} guess left, make it count.. </p> }
        { (guesses - wrongLetters.length !== 0) && (guesses - wrongLetters.length !== 1) && <p className="guesses">You have: {guesses - wrongLetters.length} guesses left</p> }
    </div>
  )
}

export default Wrongletters
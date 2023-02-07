import { Dictionary } from './components/Dictionary';

// set words to dictionary
let words = Dictionary.split("\n");
// use Math to select random word from dictionary
let selectedWord = words[Math.floor(Math.random() * words.length)];
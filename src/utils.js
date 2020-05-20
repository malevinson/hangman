import wordList from "an-array-of-english-words";
import { NOT_GUESSED_CHAR } from "./constants";

export const getRandomWord = () =>
  wordList[Math.floor(Math.random() * wordList.length)].split("");

export const getUpdatedDisplayWord = ({
  displayWord,
  char,
  wordToGuess,
}) =>
  displayWord.map((displayChar, i) => {
    if (displayChar !== NOT_GUESSED_CHAR) return displayChar;
    if (wordToGuess[i] === char.toLowerCase()) return char;

    return NOT_GUESSED_CHAR;
  });

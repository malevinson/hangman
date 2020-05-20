import React, { Fragment, useState, useEffect } from "react";
import { times } from "lodash";
import {
  NOT_GUESSED_CHAR,
  NUM_OF_WRONG_GUESSES,
  STARTING_CHAR,
  ALPHABET_LENGTH,
} from "./constants";
import Hangman from "./Hangman";
import { getRandomWord, getUpdatedDisplayWord } from "./utils";
import {
  Main,
  CharClickable,
  CharWrapper,
  Left,
  Status,
  Content,
  DisplayPhrase,
  WordToGuess,
} from "./appStyles";

function App() {
  const [guessedChars, setGuessedChars] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(
    NUM_OF_WRONG_GUESSES
  );
  const [wordToGuess, setWordToGuess] = useState(() => getRandomWord());
  const [displayWord, setDisplayWord] = useState(
    wordToGuess.map(() => NOT_GUESSED_CHAR)
  );

  useEffect(() => {
    setDisplayWord(wordToGuess.map(() => NOT_GUESSED_CHAR));
    setGuessedChars([]);
    setRemainingGuesses(NUM_OF_WRONG_GUESSES);
  }, [wordToGuess]);


  const handleClickChar = (char) => {
    if (guessedChars.includes(char)) return;

    setGuessedChars((prevState) => [...prevState, char]);

    if (wordToGuess.includes(char.toLowerCase())) {
      setDisplayWord(
        getUpdatedDisplayWord({ displayWord, char, wordToGuess })
      );
    } else {
      setRemainingGuesses(remainingGuesses - 1);
    }
  };

  const handleClickNewGame = () => setWordToGuess(getRandomWord());

  const renderGameSummary = () => (
    <Fragment>
      {!remainingGuesses ? (
        <p>
          Sorry, you lost! The word was
          <WordToGuess>{` ${wordToGuess.join("").toUpperCase()}`}</WordToGuess>.
          <br/>
          Check your console if you need help 😉 
        </p>
      ) : (
        <p>You win! 🎉</p>
      )}
    </Fragment>
  );

  const renderDisplayPhrase = () => (
    <DisplayPhrase>
      {displayWord.map((char, i) => (
        <Fragment key={i}>
          {i > 0 && <span> </span>}
          <span>{char}</span>
        </Fragment>
      ))}
    </DisplayPhrase>
  );

  const renderCharEntry = () => (
    <CharWrapper>
      {times(ALPHABET_LENGTH, (i) => {
        let char = String.fromCharCode(STARTING_CHAR + i);

        return (
          <CharClickable
            key={char}
            isDisabled={guessedChars.includes(char)}
            onClick={() => handleClickChar(char)}
          >
            {char}
          </CharClickable>
        );
      })}
    </CharWrapper>
  );

  const isGameOver =
    !remainingGuesses || !displayWord.includes(NOT_GUESSED_CHAR);

  console.log(wordToGuess.join(''));
  console.log({ displayWord, remainingGuesses, guessedChars })

  return (
    <Main>
      {renderDisplayPhrase()}
      <Content>
        <Left>
          <Status>
            <div>Remaining Missed Guesses: {remainingGuesses}</div>
            <div>
              <button onClick={handleClickNewGame}>
                {isGameOver ? "Play Again" : "Reset Game"}
              </button>
            </div>
          </Status>
          {isGameOver ? renderGameSummary() : renderCharEntry()}
        </Left>
        <Hangman remainingGuesses={remainingGuesses}></Hangman>
      </Content>
    </Main>
  );
}

export default App;


import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';

import Hangman from './components/Hangman/Hangman';
import Word from './components/Word/Word';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Message from './components/Message/Message';
import PopUp from './components/PopUp/PopUp';

import showMessage from './utils/showMessage';

const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const words = ['programming', 'react', 'redux'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters) => [...correctLetters, letter]);
          } else {
            showMessage(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);

            // updateWrongLettersEl();
          } else {
            showMessage(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [correctLetters, playable, wrongLetters]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);

    selectedWord = words[random];
  }
  // console.log(playable);
  return (
    <>
      <GameContainer>
        <GlobalStyle />
        <Hangman wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        {showNotification && <Message />}
      </GameContainer>

      <PopUp
        playAgain={playAgain}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
      />
    </>
  );
};

export default App;

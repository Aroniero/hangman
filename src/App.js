import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';
import theme from './theme/theme';

import Hangman from './components/Hangman/Hangman';
import Word from './components/Word/Word';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Message from './components/Message/Message';
import PopUp from './components/PopUp/PopUp';

import useHandleGame from './App.hook';

const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const [
    selectedWord,
    correctLetters,
    wrongLetters,
    showNotification,
    setPlayable,
    playAgain,
  ] = useHandleGame();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;

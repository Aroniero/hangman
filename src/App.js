import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';
import theme from './theme/theme';

import { GameContainer, Header } from './App.style';

import Hangman from './components/Hangman/Hangman';
import Word from './components/Word/Word';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Message from './components/Message/Message';
import PopUp from './components/PopUp/PopUp';

import useHandleGame from './App.hook';

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
      <GlobalStyle />
      <GameContainer>
        <Header>
          <Hangman wrongLetters={wrongLetters} />
          <WrongLetters wrongLetters={wrongLetters} />
        </Header>
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

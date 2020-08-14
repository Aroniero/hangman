import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';
import theme from './theme/theme';

import Hangman from './components/Hangman/Hangman';
import Word from './components/Word/Word';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Message from './components/Message/Message';
import PopUp from './components/PopUp/PopUp';

import backgroundImg from './assets/images/backgroundImg.png';

import useHandleGame from './App.hook';

const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 40%;
`;

const Header = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  min-height: 600px;

  /* align-items: center; */
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

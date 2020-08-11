import React, { useEffect } from 'react';
import styled from 'styled-components';
import checkWin from '../utils/checkWin';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  background-color: white;
  padding: 20px 30px;
  border-radius: 10px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 150px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
`;

const PopUp = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    console.log('You won');
    finalMessage = 'Congratulations! You won';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    console.log('You Lost');

    finalMessage = 'You lost';
    finalMessageRevealWord = `... the word was ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  console.log(checkWin(correctLetters, wrongLetters, selectedWord));
  return (
    <>
      {finalMessage !== '' ? (
        <Container>
          <Card>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <Button onClick={playAgain}>Play again</Button>
          </Card>
        </Container>
      ) : null}
    </>
  );
};

export default PopUp;

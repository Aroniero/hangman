import React, { useEffect } from 'react';
import { Container, Card, Button } from './PopUp.style';
import checkWin from '../../utils/checkWin';

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

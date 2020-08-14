import { useEffect } from 'react';
import checkWin from '../../utils/checkWin';

const useCheckWin = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
}) => {
  let finalMessage = '';
  let revealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You lost';
    revealWord = `...the word was "${selectedWord}"`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return [finalMessage, revealWord];
};

export default useCheckWin;

import { useState, useEffect } from 'react';
import showMessage from './utils/showMessage';

const words = ['veroni', 'react', 'redux'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const useHandleGame = () => {
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

  return [
    selectedWord,
    correctLetters,
    wrongLetters,
    showNotification,
    setPlayable,
    playAgain,
  ];
};

export default useHandleGame;

import React, { useState, useEffect } from "react";

import LetterBox from "./components/LetterBox/LetterBox";
import Hangman from "./components/Hangman/Hangman";
import GlobalStyle from "./theme/GlobalStyles";
import Word from "./components/Word/Word";
import styled from "styled-components";
import Message from "./components/Message/Message";

const App = () => {
  const [word, setWord] = useState("andrzej");
  const [letters, setLetters] = useState([
    { value: "a", isFound: false },
    { value: "n", isFound: false },
    { value: "d", isFound: true },
    { value: "r", isFound: false },
    { value: "z", isFound: false },
    { value: "e", isFound: false },
    { value: "j", isFound: false },
  ]);
  const [missedLetters, setMissedLetters] = useState([]);
  const [missedCounter, setMissedCounter] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  // const extractLetters = (w) => {
  //   return w.split("").map((letter) => {
  //     return {
  //       value: letter,
  //       isFound: false,
  //     };
  //   });
  // };
  useEffect(() => {
    window.addEventListener("keypress", (event) => {
      checkLetter(event);
    });

    return () => {
      window.removeEventListener("keypress", (event) => {
        checkLetter(event);
      });
    };
  });
  const checkLetter = ({ key }) => {
    if (word.includes(key)) {
      const newLetters = letters.map(({ value, isFound }) => {
        isFound === true && value === key && setErrorMessage();
        value === key && (isFound = true);
        return { value: value, isFound: isFound };
      });
      console.log(newLetters);
      setLetters(newLetters);
    } else if (missedLetters.includes(key)) {
      return setErrorMessage();
    } else {
      setMissedLetters([...missedLetters, key]);
      console.log(missedLetters);
      setMissedCounter(missedCounter + 1);
      return;
    }
  };

  const setErrorMessage = () => {
    setErrorMsg("Try to use another one");

    setTimeout(function () {
      setErrorMsg("");
    }, 7000);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Hangman />
      <div>
        Litery zmissowane {missedLetters}, licznik nietrafionych liter
        {missedCounter}
      </div>
      <Word letters={letters} />
      <Message errorMessage={errorMsg} />
    </div>
  );
};

export default App;

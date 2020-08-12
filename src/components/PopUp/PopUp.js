import React from 'react';
import { Container, Card, Button } from './PopUp.style';

import useCheckWin from './PopUp.hook';

const PopUp = (props) => {
  const [finalMessage, revealWord] = useCheckWin(props);

  return (
    <>
      {finalMessage !== '' ? (
        <Container>
          <Card>
            <h2>{finalMessage}</h2>
            <h3>{revealWord}</h3>
            <Button onClick={props.playAgain}>Play again</Button>
          </Card>
        </Container>
      ) : null}
    </>
  );
};

export default PopUp;

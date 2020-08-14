import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: white;
  padding: 30px 20px;
  border-radius: 20px;
  text-align: center;
  font-size: 0.8em;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 150px;
  margin: 30px auto 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
  text-transform: uppercase;
  outline: none;
  font-weight: bold;
  background-color: rgb(214, 214, 177);
  :hover {
    transform: scale(1.1);
  }
`;

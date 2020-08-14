import styled from 'styled-components';

export const WordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  gap: 2px;
  padding: 0 10px;
  width: 100%;

  @media (${({ theme }) => theme.media.md}) {
    max-width: 700px;
    margin: 0 auto;
  }
  @media (${({ theme }) => theme.media.md}) {
    gap: 5px;
    max-width: 900px;
  }
  @media (${({ theme }) => theme.media.xl}) {
    max-width: 1000px;
    margin-top: 100px;
  }
`;

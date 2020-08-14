import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 40px auto;

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.smallest};

  @media (${({ theme }) => theme.media.md}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

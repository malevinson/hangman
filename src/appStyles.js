import styled from "styled-components";

export const Main = styled.main`
  margin: 30px;
  text-align: center;
`;

export const CharClickable = styled.span`
  width: 13%;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${({ isDisabled }) => isDisabled && `opacity: .5;`}
`;

export const WordToGuess = styled.span`
  color: red;
  font-weight: bold;
`;

export const CharWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 25px;
  justify-content: center;
`;

export const Left = styled.div`
  width: 500px;
`;

export const Status = styled.div`
  padding-bottom: 25px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const DisplayPhrase = styled.div`
  font-size: 40px;
  padding-bottom: 100px;
`;

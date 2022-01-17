import * as color from './constants/colors';
import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background-color: ${color.mint};
  color: white;
  padding: 1.2em;
  width: 20rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 1.5rem auto 0 auto;
  font-size: 1rem;
  max-width: 90vw;

  &:hover {
    opacity: 0.8
  }

  &:disabled {
    background-color: rgba(255,255,255,0.1);
    cursor: not-allowed;
    color: white;
  }
`

export const ButtonSecondary = styled.button`
  background-color: white;
  color: ${color.black};
  padding: 1.2em;
  width: 20rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 1.5rem auto 0 auto;
  font-size: 1rem;
  max-width: 90vw;

  &:hover {
    opacity: 0.8
  }

  &:disabled {
    background-color: rgba(255,255,255,0.1);
    cursor: not-allowed;
    color: white;
  }
`

export const Label = styled.label`
  width: 25rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 1rem;
  max-width: 90vw;
`

export const Input = styled.input`
  padding: .5rem;
  width: 25rem;
  height: 3rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 1.7rem;
  color: ${color.black};
  margin-top: .5rem;
  text-transform: uppercase;
  max-width: 90vw;
`

export const ErrorMessage = styled.p`
  color: ${color.red};
  max-width: 90vw;
  margin: 1rem 0 0 0;
`

export const Header = styled.div`
  width: 100vw;
  height: 5rem;
  box-shadow: 0px 2px 10px #000;
  margin-bottom: 0.8rem;
`

export const RoomCode = styled.p`
  font-size: 3rem;
  border-bottom: 1px solid rgba(255,255,255,.3);
  width: 25rem;
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  max-width: 90vw;
  cursor: pointer;
`

export const PlayersList = styled.div`
  width: 25rem;
  max-width: 90vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export const PlayerItem = styled.div<{ isCurrent: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: ${({ isCurrent }) => isCurrent ? color.blue : 'unset'};
  }
`;

export const Loading = styled.p`
  font-size: 1.2rem;
  width: 25rem;
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  max-width: 90vw;
`

export const InformationContainer = styled.div`
  width: 100vw;
  border-bottom: 1px solid rgba(255,255,255,.3);
  text-align: center;
  padding-bottom: 1rem;

  & > h1 {
    margin: 0.9rem 0;
  }

  & > p {
    margin: 0.1rem 0;
    font-size: 1.5rem;
  }
`

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const GambleButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  & > button {
    flex-grow: 1;
    color: white;
    padding: 1.5em;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  & > button:hover {
    opacity: 0.8
  }

  & > button:disabled {
    background-color: rgba(255,255,255,0.1);
    cursor: not-allowed;
    color: white;
  }
`

export const GreenButton = styled.button`
  background-color: ${color.mint};
`

export const BlueButton = styled.button`
  background-color: ${color.blue};
`

export const RedButton = styled.button`
  background-color: ${color.red};
`

export const QuestionInput = styled.input`
  padding: .5rem;
  width: calc(100% - 1rem);
  height: 3rem;
  border: none;
  font-size: 1.7rem;
  color: ${color.black};
  margin-top: .5rem;
`

export const AnswerContainer = styled.div`
  border-top: 1px solid rgba(255,255,255,.3);
  max-width: 100vw;

  & > h2 {
    text-align: center;
    overflow: auto;
  }
`

export const GameContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const HistoryLine = styled.h4<{ correct: boolean }>`
  margin: 1rem auto;
  color: ${({ correct }) => correct ? color.mint : color.red};
  max-width: 90vw;
  overflow: auto;
  text-align: center
`
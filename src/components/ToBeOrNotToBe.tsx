import { useState } from "react";
import { AnswerContainer, GambleButtonsWrapper, GreenButton, RedButton } from "../styles";
import { answer } from "../utils/ajax";

type ToBeOrNotToBeProps = {
  code: string;
  question: string;
  questionPlayer: string;
}

export const ToBeOrNotToBe:React.FC<ToBeOrNotToBeProps> = ({ code, question, questionPlayer }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleAnswer = (ans: boolean) => {
    setLoading(true);
    answer(code, ans);
  }

  return (
    <AnswerContainer>
      <h2>{question.replace('?', '')}? ({questionPlayer})</h2>
      <GambleButtonsWrapper>
        <RedButton onClick={() => handleAnswer(false)} disabled={loading}>No</RedButton>
        <GreenButton onClick={() => handleAnswer(true)} disabled={loading}>Yes</GreenButton>
      </GambleButtonsWrapper>
    </AnswerContainer>
  )
}
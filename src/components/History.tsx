import { HistoryLine } from "../styles";

type HistoryProps = {
  questions: Record<string, any>[]
}

export const History: React.FC<HistoryProps> = ({ questions }) => {
  return (
    <div>
    {questions.map(({ question, answer, player, type }, i) => {
      if(type === 'guess'){
        return (
          <HistoryLine key={i} correct={answer}>{player} guessed "{question}"</HistoryLine>
        )
      }

      return (
        <HistoryLine key={i} correct={answer}>{question.replace('?', '')}? ({player})</HistoryLine>
      )
    })}
    </div>
  );
}
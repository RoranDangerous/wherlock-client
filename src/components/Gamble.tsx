import { useState } from "react"
import { BlueButton, GambleButtonsWrapper, GreenButton, QuestionInput } from "../styles";
import { ask, guess } from "../utils/ajax";

type GambleProps = {
  code: string;
  guesses: string;
  questions: number;
}

export const Gamble: React.FC<GambleProps> = ({ code, guesses, questions }) => {
  const [thought, setThought] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (fn: (code: string, thought: string) => Promise<Response>) => async () => {
    if(!thought){
      return;
    }
    setLoading(true);
    await fn(code, thought);
  }

  return (
    <div>
      <QuestionInput value={thought} maxLength={128} onChange={({ target }) => setThought(target.value)}/>
      <GambleButtonsWrapper>
        <BlueButton onClick={handleClick(ask)} disabled={questions <= 0 || loading}>Ask ({questions})</BlueButton>
        <GreenButton onClick={handleClick(guess)} disabled={loading}>Guess ({guesses})</GreenButton>
      </GambleButtonsWrapper>
    </div>
  )
}
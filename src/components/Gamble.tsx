import { useState } from "react"
import { BlueButton, GambleButtonsWrapper, GreenButton, QuestionInput } from "../styles";
import { ask, guess } from "../utils/ajax";

type GambleProps = {
  code: string;
  guesses: string;
}

export const Gamble: React.FC<GambleProps> = ({ code, guesses }) => {
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
        <BlueButton onClick={handleClick(ask)} disabled={loading}>Ask</BlueButton>
        <GreenButton onClick={handleClick(guess)} disabled={loading}>Guess ({guesses})</GreenButton>
      </GambleButtonsWrapper>
    </div>
  )
}
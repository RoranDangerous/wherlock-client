import { useMemo } from "react";
import { InformationContainer, Word } from "../styles";
import { getPlayer } from "../utils/auth"

type InformationProps = {
  game: Record<string, any>;
}

export const Information: React.FC<InformationProps> = ({ game }) => {
  const currentPlayer = useMemo(getPlayer, []);
  const wordmaster = useMemo(() => game.playersPosition[game.turn], [game, currentPlayer]);
  const guesser = useMemo(() => game.playersPosition[game.guesser], [game, currentPlayer]);
  const isWordmaster = wordmaster === currentPlayer;

  return (
    <InformationContainer>
      <h1>Waiting for {game.word && !game.question ? guesser : wordmaster}</h1>
      {game.category && <p>{game.category}:&nbsp;<Word>{isWordmaster || game.isGuessed ? game.word : (game.word as string).split('').map(ch => ch === ' ' ? ch : '_')}</Word></p>}
    </InformationContainer>
  )
}
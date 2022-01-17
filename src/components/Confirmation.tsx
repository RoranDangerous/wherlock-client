import { ButtonPrimary, PlayerItem, PlayersList, RoomCode } from "../styles";
import { startGame } from "../utils/ajax"
import { getPlayer } from "../utils/auth";

type ConfirmationProps = {
  code: string;
  players: Record<string, Record<string, any>>;
  canConfirm: boolean;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ code, players, canConfirm }) => {
  const onButtonClick = async () => {
    await startGame(code, getPlayer());
  }

  const sortByScore = (player1: string, player2: string) => (players[player2].score as number) - (players[player1].score as number);

  return (
    <>
      <RoomCode onClick={() => navigator.clipboard.writeText(window.location.href)}>{code}</RoomCode>
      <PlayersList>
        {Object.keys(players).sort(sortByScore).map((player, i) => (
          <PlayerItem isCurrent={player === getPlayer()} key={player}>
            <p>{i+1}. {player}</p>
            <p>{players[player].score}</p>
          </PlayerItem>
        ))}
      </PlayersList>
      {
        canConfirm && (
          <ButtonPrimary onClick={onButtonClick} disabled={Object.keys(players).length <= 1}>Lock the door</ButtonPrimary>
        )
      }
    </>
  )
}
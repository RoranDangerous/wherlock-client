import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import { Confirmation } from "../components/Confirmation";
import { Gamble } from "../components/Gamble";
import { IdentifyYourself } from "../components/IdentifyYourself";
import { Information } from "../components/Information";
import { ToBeOrNotToBe } from "../components/ToBeOrNotToBe";
import { WordSelection } from "../components/WordSelection";
import { History as GameHistory } from "../components/History";
import { GameContainer, GameWrapper, Loading } from "../styles";
import { socialize } from "../utils/ajax";
import { getPlayer } from "../utils/auth";

export const GamePage = () => {
  const { code: codeFromParams } = useParams();
  const code = useMemo(() => codeFromParams ?? '', [codeFromParams]);
  const [error, setError] = useState<boolean>(false);
  const [game, setGame] = useState<Record<string,any>>();
  const [currentPlayer, setCurrentPlayer] = useState<string>(getPlayer);
  const turnPlayer = useMemo(() => game?.playersPosition && game.playersPosition[game.turn], [game]);
  const guesser = useMemo(() => game?.playersPosition && game.playersPosition[game.guesser], [game]);
  const iWordmaster = useMemo(() => turnPlayer === currentPlayer, [turnPlayer, currentPlayer]);
  const iAnswer = useMemo(() => turnPlayer === currentPlayer && game?.question, [turnPlayer, game, currentPlayer])
  const iGuess = useMemo(() => guesser === currentPlayer && game?.word && !game?.question, [guesser, game, currentPlayer]);
  const guessesLeft = useMemo(() => game?.players[currentPlayer]?.guesses, [game, currentPlayer])

  useEffect(() => {
    let socket: Socket;

    if(!error){
      setCurrentPlayer(getPlayer());
      socket = socialize(code, (data) => {
        setGame(data)
      },
      () => setError(true));
    }

    return () => {
      socket?.disconnect();
    };
  }, [code, error])

  if(error){
    return (
      <IdentifyYourself onFinish={() => setError(false)} code={code ?? ''}/>
    )
  }

  if(!game){
    return (
      <Loading>Wiping tables... Give me a second!</Loading>
    )
  }

  if(!game.inProgress){
    return (
      <Confirmation code={code ?? ''} players={game.players} canConfirm={game.queen === currentPlayer} />
    )
  }

  return (
    <GameWrapper>
      <Information game={game} />
      <GameContainer>
        {iWordmaster && !game.word && <WordSelection code={code ?? ''} />}
        <GameHistory questions={game.questions} />
      </GameContainer>
      {iAnswer && <ToBeOrNotToBe code={code ?? ''} question={game.question} questionPlayer={game.questionPlayer}/>}
      {iGuess && !game.isGuessed && <Gamble key={guessesLeft} code={code ?? ''} guesses={game.players[currentPlayer].guesses}/>}
    </GameWrapper>
  )
}
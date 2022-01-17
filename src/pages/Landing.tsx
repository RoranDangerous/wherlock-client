import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary, ErrorMessage, Header, Input, Label } from "../styles";
import { createGame, joinGame } from "../utils/ajax";
import { getPlayer, setPlayer } from "../utils/auth";

const isCodeValid = (code: string) => {
  const re = /^[A-Z]{4}$/;
  return !!code.match(re);
}

export const LandingPage = () => {
  const [code, setCode] = useState<string>('');
  const [name, setName] = useState<string>(getPlayer());
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const handleRoomCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCode(value.toUpperCase());
  }

  const handlePlayerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setName(value.toUpperCase());
    setPlayer(value.toUpperCase());
  }

  const handleCreate = async() => {
    const code = await createGame(name);
    navigate('/'+code);
  }

  const handleJoin = async () => {
    const { error } = await joinGame(code, name);

    if (!error) {
      navigate('/'+code);
    }
    else {
      setError(error)
    }
  }

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Label>Room Code</Label>
      <Input placeholder="Enter 4-letter code" maxLength={4} value={code} onChange={handleRoomCodeChange}/>
      <Label>Name</Label>
      <Input placeholder="Enter your name" maxLength={25} value={name} onChange={handlePlayerNameChange}/>
      <ButtonPrimary onClick={handleJoin} disabled={!isCodeValid(code)}>Join Game</ButtonPrimary>
      <ButtonSecondary onClick={handleCreate} disabled={!name}>Create New</ButtonSecondary>
    </>
  )
}
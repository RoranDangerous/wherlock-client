import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary, ErrorMessage, Input, Label } from "../styles";
import { joinGame } from "../utils/ajax";
import { getPlayer, setPlayer } from "../utils/auth";

type IdentifyYourselfProps = {
  code: string;
  onFinish: () => void
}

export const IdentifyYourself: React.FC<IdentifyYourselfProps> = ({ code, onFinish }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>(getPlayer);
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  
  const handleClick = async () => {
    setLoading(true);
    const { error } = await joinGame(code, name);

    if(!error){
      onFinish();
    }
    else{
      setError(error);
      setLoading(false);
    }
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setName(value.toUpperCase());
    setPlayer(value.toUpperCase());
  }

  return (
    <>
      <ErrorMessage>{error}</ErrorMessage>
      <Label>Name</Label>
      <Input placeholder="Enter your name" value={name} maxLength={25} onChange={onNameChange} disabled={loading}/>
      <ButtonPrimary onClick={handleClick} disabled={name.length === 0 || loading}>Join Game</ButtonPrimary>
      <ButtonSecondary onClick={() => navigate('/')}>Back</ButtonSecondary>
    </>
  )
}
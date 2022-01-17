import { useEffect, useState } from "react";
import { ButtonSecondary } from "../styles";
import { getWords, setWord } from "../utils/ajax";

type WordSelectionProps = {
  code: string;
}

export const WordSelection: React.FC<WordSelectionProps> = ({ code }) => {
  const [options, setOptions] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    (async() => {
      const words = await getWords();
      setOptions(words);
    })();
  }, [])

  const selectWord = async (option: Record<string, string>) => {
    await setWord(code, option.word, option.category);
  }

  return (
    <>
      {options.map((option) => (<ButtonSecondary key={option.word} onClick={() => selectWord(option)}>{option.word}</ButtonSecondary>))}
    </>
  );
}
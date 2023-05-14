import { useState } from "react";

interface IOnTextChange {
  (text: string): void;
}

interface IUseInput {
  (): {
    text: string;
    onTextChange: IOnTextChange;
  };
}

export const useInput: IUseInput = () => {
  const [text, setText] = useState("");
  const onTextChange: IOnTextChange = (text) => setText(text);

  return {
    text,
    onTextChange,
  };
};

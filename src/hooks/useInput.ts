import { useState } from "react";

const useInput = (
  validFn?: (value: string) => boolean
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  boolean,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
    if (validFn) {
      setIsValid(validFn(e.target.value));
    }
  };

  return [value, onChange, isValid, setValue];
};

export default useInput;

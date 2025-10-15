import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React, { useCallback, useState } from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = useCallback(
    debounce((value: string) => console.log(value), 200),
    []
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      value={inputValue}
      onChange={handleInputChange}
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
    />
  );
}

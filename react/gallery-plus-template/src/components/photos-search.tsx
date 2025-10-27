import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React, { useCallback, useState } from "react";
import { debounce } from "../helpers/utils";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");
  const { filters } = usePhotos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = useCallback(
    debounce((value: string) => {
      filters.setQ(value);
    }, 200),
    [filters.setQ]
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

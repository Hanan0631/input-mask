import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import hints from "./cities";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestion, setFilteredSuggestion] = useState("");

  const capitalizeValue = (str) => {
    const splitStr = str.split(" ");
    const capitalizedStrArray = splitStr.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const newStr = capitalizedStrArray.join(" ");
    setInputValue(newStr);
  };

  useEffect(() => {
    const handleChange = () => {
      const newSuggestion = hints.find((hint) => hint.startsWith(inputValue));
      setFilteredSuggestion(newSuggestion);
      if (!newSuggestion) {
        toast("Please type the proper word!", {
          style: {
            border: "1px solid #407088",
            color: "#132743",
            backgroundColor: "#fdb44b",
            position: "relative",
            top: "400px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          },
        });
      } else if (newSuggestion === inputValue) {
        toast(`the city you are looking for is ${newSuggestion}!`, {
          style: {
            border: "1px solid #407088",
            color: "#ffb5b5",
            backgroundColor: "#132743",
            position: "relative",
            top: "400px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          },
        });
      }
    };
    handleChange();
  }, [inputValue]);

  return (
    <div
      className="input"
      data-placeholder={inputValue ? filteredSuggestion : null}
    >
      <input
        type="text"
        onChange={(e) => capitalizeValue(e.target.value)}
        value={inputValue}
      />
      <Toaster />
    </div>
  );
};

export default Input;

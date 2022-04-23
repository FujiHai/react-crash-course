import { useState, useTransition } from "react";
import NAMES from "./data.json";

export const UseTransitionList = () => {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item) => {
        return (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        );
      })}
    </div>
  );
};

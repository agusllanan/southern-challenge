import { useEffect, useState } from "react";
import { useSearchContext } from "@hooks/useSearchContext";
import { datePickerToday } from "@services/helpers/getDateToday";

export const SearchInput = ({ type, searchTerms, placeholder }) => {
  const { setSearchContext, searchContext } = useSearchContext();
  const [input, setInput] = useState("");
  const today = datePickerToday;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (type === "number") {
      setSearchContext({ ...searchContext, inputSearch: Number(input) });
      return;
    }
    setSearchContext({ ...searchContext, inputSearch: input });
  }, [input]);

  return (
    <>
      <div className="flex flex-col w-1/5">
        <label className="text-gray-600 text-sm">Search by {searchTerms}</label>
        <input
          type={type}
          className="bg-slate-600 space-x-3 w-full appearance-none rounded-xl py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:border-purple-500 mt-3 p-3"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
          max={today}
        ></input>
      </div>
    </>
  );
};

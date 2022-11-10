import { useEffect, useState } from "react";
import { useSearchContext } from "@hooks/useSearchContext";

export const SearchFilter = ({ options, firstOption, searchTerms }) => {
  const [selectedOptions, setSelectedOptions] = useState("");
  const { setSearchContext, searchContext } = useSearchContext();

  const handleSelectChange = (e) => {
    setSelectedOptions(e.target.value);
  };

  useEffect(() => {
    if (searchTerms === "camera") {
      setSearchContext({ ...searchContext, camera: selectedOptions });
      return;
    }
    setSearchContext({ ...searchContext, rover: selectedOptions });
  }, [selectedOptions]);

  return (
    <>
      <div className="flex flex-col w-1/5">
        <label className="text-gray-600 text-sm">Search by {searchTerms}</label>
        <select
          value={selectedOptions}
          onChange={handleSelectChange}
          className="bg-slate-600 space-x-3 w-full appearance-none rounded-xl py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:border-purple-500 mt-3 p-3"
        >
          <option disabled value="">
            {firstOption}
          </option>
          {options.map((option) => {
            return (
              <option key={option.name} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

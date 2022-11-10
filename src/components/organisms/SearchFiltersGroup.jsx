import { useState } from "react";
import { TEXTS } from "@constants/TEXTS";
import { SearchFilter } from "@molecules/SearchFilter";
import { SearchInput } from "@molecules/SearchInput";
import { CAMERA_OPTIONS, ROVER_OPTIONS } from "@constants/FILTER_OPTIONS";
import { Button } from "@atoms/Button";
import { useSearchContext } from "@hooks/useSearchContext";

export const SearchFiltersGroup = () => {
  const { FILTER_GROUP, SEARCH_METHODS } = TEXTS;
  const [searchMethod, setSearchMethod] = useState(SEARCH_METHODS.martial_sol);
  const { setSearchContext, searchContext } = useSearchContext();

  const onClick = () => {
    if (searchMethod === SEARCH_METHODS.martial_sol) {
      setSearchMethod(SEARCH_METHODS.earth_date);
      setSearchContext({ ...searchContext, searchFor: "sol" });
      return;
    }
    setSearchMethod(SEARCH_METHODS.martial_sol);
    setSearchContext({ ...searchContext, searchFor: "earth_date" });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-auto my-4">
        <p className="text-xl text-gray-600">{FILTER_GROUP.title}</p>
      </div>
      <div className="flex flex-row justify-around w-full my-4">
        <SearchFilter
          firstOption="Select a camera"
          searchTerms="camera"
          options={CAMERA_OPTIONS}
        />
        <SearchFilter
          firstOption="Select a Rover"
          searchTerms="rover"
          options={ROVER_OPTIONS}
        />

        {searchMethod === SEARCH_METHODS.martial_sol ? (
          <SearchInput type="date" searchTerms="Earth Day" />
        ) : (
          <SearchInput
            type="number"
            searchTerms="Martial Sol"
            placeholder="Enter a number"
          />
        )}
      </div>
      <div className="flex flex-row w-full justify-around">
        <Button onClick={onClick} text={`Search by ${searchMethod}`} />
        <Button />
      </div>
    </>
  );
};

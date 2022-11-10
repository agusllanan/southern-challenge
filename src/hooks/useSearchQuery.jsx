import { useContext } from "react";
import { useQuery } from "react-query";
import SearchContext from "@context/SearchContext";
import { getImagesFromFilters } from "@services/api/calls";

export const useSearchQuery = () => {
  const { searchContext } = useContext(SearchContext);
  const { rover, searchFor, inputSearch, camera, page } = searchContext;

  const query = useQuery(
    ["searchQuery"],
    () => getImagesFromFilters(rover, searchFor, inputSearch, camera, page),
    {
      staleTime: Infinity,
    }
  );
  return query;
};

import { useQuery } from "react-query";
import { getImages } from "@services/api/calls";

export const useImageQuery = () => {
  const query = useQuery(["todayImages"], getImages, {
    staleTime: 1000 * 60 * 60,
  });
  return query;
};

import { useState } from "react";

export const useContextValues = () => {
  const [context, setContext] = useState([]); // if we need to use it
  const [searchContext, setSearchContext] = useState({
    rover: "",
    searchFor: "",
    inputSearch: "",
    camera: "",
    page: 1,
    dataSwitch: false,
  });

  return {
    context,
    setContext,
    searchContext,
    setSearchContext,
  };
};

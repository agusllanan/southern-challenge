import { useSearchQuery } from "@hooks/useSearchQuery";
import { useSearchContext } from "@hooks/useSearchContext";

export const Button = ({ text, onClick }) => {
  const { setSearchContext, searchContext } = useSearchContext();
  const { refetch, isRefetching } = useSearchQuery();

  const clickToRefetch = () => {
    setSearchContext({ ...searchContext, page: 1, dataSwitch: true });
    refetch();
  };

  return (
    <button
      className="relative my-3 w-1/5 inline-flex items-center justify-center p-0.7 mb-2 mr-2 overflow-hidden text-lg font-bold rounded-xl group bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white group-hover:from-purple-600 group-hover:to-pink-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
      onClick={onClick || clickToRefetch}
      disabled={isRefetching}
    >
      <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-750 bg-slate-700 rounded-md group-hover:bg-opacity-0 group-hover:text-xl">
        {text || "SEARCH"}
      </span>
    </button>
  );
};

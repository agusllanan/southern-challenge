import { useSearchContext } from "@hooks/useSearchContext";
import { useSearchQuery } from "@hooks/useSearchQuery";

export const PageButtons = () => {
  const { setSearchContext, searchContext } = useSearchContext();
  const { refetch, isRefetching } = useSearchQuery();

  const onClickNext = () => {
    setSearchContext({ ...searchContext, page: searchContext.page + 1 });
    refetch();
  };

  const onClickPrev = () => {
    setSearchContext({ ...searchContext, page: searchContext.page - 1 });
    refetch();
  };

  return (
    <>
      <div className="p-3 space-x-10 justify-around items-center flex flex-row w-full">
        <button
          className="bg-purple-600 p-2 rounded-lg"
          disabled={searchContext.page === 1 || isRefetching}
          onClick={onClickPrev}
        >
          Prev page
        </button>
        <p className="mx-10">{searchContext.page}</p>
        <button
          onClick={onClickNext}
          disabled={isRefetching}
          className="bg-purple-600 p-2 rounded-lg"
        >
          Next page
        </button>
      </div>
    </>
  );
};

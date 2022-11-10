import Head from "next/head";
import { TEXTS } from "@constants/TEXTS";
import { FilterBox } from "@molecules/FiltersBox";
import { SearchFiltersGroup } from "@organisms/SearchFiltersGroup";
import { useSearchQuery } from "@hooks/useSearchQuery";
import { showThroughData } from "@helpers/showThroughData";
import { useAppContext } from "@hooks/useAppContext";

const Home = () => {
  const { HOME } = TEXTS;
  const { data, isLoading, isError } = useSearchQuery();
  const { context } = useAppContext();

  const hasContext = context.length > 0;

  return (
    <div className="p-0.5">
      <Head>
        <title> View to Mars </title>
        <meta
          name="description"
          content="This is for Southern code challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto flex-1 flex flex-col justify-center items-center p-2">
        <div className="w-full flex flex-row h-auto justify-center">
          <h1 className="font-extrabold text-5xl bg-clip-text text-transparent m-2 bg-gradient-to-r from-pink-600 to-purple-600">
            {`${HOME.title}`}
          </h1>
          <p className="text-5xl bg-none">🚀</p>
        </div>
        <SearchFiltersGroup />
        <div className="flex w-[90%] flex-col">
          {showThroughData(data, isLoading, isError)}
          {hasContext && <FilterBox />}
        </div>
      </main>
    </div>
  );
};

export default Home;

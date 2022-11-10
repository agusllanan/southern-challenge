import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppContext from "@context/AppContext";
import SearchContext from "@context/SearchContext";
import { useContextValues } from "@hooks/useContextValues";
import "@styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const { context, setContext, searchContext, setSearchContext } =
    useContextValues();
  return (
    <AppContext.Provider value={{ context, setContext }}>
      <SearchContext.Provider value={{ searchContext, setSearchContext }}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SearchContext.Provider>
    </AppContext.Provider>
  );
}

export default MyApp;

import { TEXTS } from "@constants/TEXTS";
import { useAppContext } from "@hooks/useAppContext";
import { useSearchContext } from "@hooks/useSearchContext";

export const NoFoundText = ({ title, error }) => {
  const { context } = useAppContext();
  const { dataSwitch } = useSearchContext();
  const { NO_FOUND_TITLE } = TEXTS;

  return (
    <div className={context ? "w-full" : "w-3/4"}>
      {dataSwitch ? (
        <>
          <h3 className="text-white font-bold w-full mt-10 mb-4 text-5xl">
            {title || NO_FOUND_TITLE.fetched}
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-400">
            {NO_FOUND_TITLE.fetchedLine}
          </p>
        </>
      ) : (
        <>
          <h3 className="text-white font-bold w-full mt-10 mb-4 text-5xl">
            {title || NO_FOUND_TITLE.default}
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-400">
            {NO_FOUND_TITLE.line}
          </p>
        </>
      )}
      {error && (
        <>
          <h3 className="text-white font-bold w-full mt-10 mb-4 text-5xl">
            {title || NO_FOUND_TITLE.errorMessage}
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-400">
            {NO_FOUND_TITLE.errorLine}
          </p>
        </>
      )}
    </div>
  );
};

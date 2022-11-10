const { Loading } = require("@atoms/Loading");
const { RenderThroughData } = require("@molecules/RenderThroughData");

export const showThroughData = (data, isLoading, error) => {
  return (
    <>
      {isLoading ? (
        <Loading isFullScreen isBig />
      ) : (
        <RenderThroughData photos={data?.photos} error={error} />
      )}
    </>
  );
};

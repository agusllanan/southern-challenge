import { Card } from "@atoms/Card";
import { Loading } from "@atoms/Loading";
import { PageButtons } from "@atoms/PageButtons";

export const PhotosGrid = ({ photos }) => {
  return (
    <>
      {!photos ? (
        <Loading isFullScreen isBig />
      ) : (
        <>
          <div className="flex flex-col">
            <div className="grid grid-cols-5 gap-10 space-y-5 my-10 h-auto w-full place-items-center">
              <Card images={photos} />
            </div>
            <PageButtons />
          </div>
        </>
      )}
    </>
  );
};

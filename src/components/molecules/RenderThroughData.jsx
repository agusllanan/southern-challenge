import { PhotosGrid } from "@molecules/PhotosGrid";
import { NoFoundDataText } from "@atoms/NoFoundDataText";

export const RenderThroughData = ({ photos, error }) => {
  const hasPhotos = photos.length > 0;

  return hasPhotos ? (
    <PhotosGrid photos={photos} />
  ) : (
    <NoFoundDataText error={error} />
  );
};

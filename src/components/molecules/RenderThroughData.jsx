import { PhotosGrid } from "@molecules/PhotosGrid";
import { NoFoundText } from "@atoms/NoFoundText";

export const RenderThroughData = ({ photos, error }) => {
  const hasPhotos = photos.length > 0;

  return hasPhotos ? (
    <PhotosGrid photos={photos} />
  ) : (
    <NoFoundText error={error} />
  );
};

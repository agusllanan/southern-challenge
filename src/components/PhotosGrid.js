import Image from "next/image";
import Loading from "./atoms/Loading";

const PhotosGrid = ({ photos }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 my-4 h-auto w-full">
        {!photos ? (
          <Loading />
        ) : (
          photos.map((photo) => {
            const { rover, earth_date, camera } = photo;
            return (
              <div
                key={photo.id}
                className="my-10 h-auto w-auto shadow-sm justify-self-center justify-items-center bg-white rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg flex flex-col"
              >
                <Image
                  src={photo.img_src}
                  alt={photo.img_src}
                  width={400}
                  height={400}
                  className="justify-self-center justify-items-center p-4"
                />
                <div className="justify-self-center pl-4 py-2">
                  <p>Rover: {rover?.name}</p>
                  <p>Date: {earth_date}</p>
                  <p>Camera: {camera?.name}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default PhotosGrid;

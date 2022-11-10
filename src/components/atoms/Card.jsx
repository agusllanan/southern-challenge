import Image from "next/image";

export const Card = ({ images }) => {
  return images.map((image) => {
    const { rover, earth_date, camera } = image;
    return (
      <div key={image.id} className="relative group">
        <div className="absolute -inset-1 rounded-lg blur opacity-60 bg-gradient-to-r from-pink-600 to bg-purple-600 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative backdrop-filter backdrop-blur-lg max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 justify-self-center justify-items-center">
          <Image
            className="rounded-t-lg"
            src={image.img_src}
            alt={image.img_src}
            width={400}
            height={400}
            priority
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Rover: {rover?.name}
            </h5>
            <p className="mb-3 font-normal text-gray-400">Date: {earth_date}</p>
            <p className="mb-3 font-normal text-gray-400">
              Camera: {camera?.name}
            </p>
          </div>
        </div>
      </div>
    );
  });
};

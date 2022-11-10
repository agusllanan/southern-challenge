import axios from "axios";
import { getTodayDate } from "@helpers/getDateToday";

const API = process.env.NEXT_PUBLIC_NASA_API; // https://api.nasa.gov/mars-photos/api/v1/rovers
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getImagesFromFilters = async (
  rover,
  searchFor,
  inputSearch,
  camera,
  page
) => {
  const cameraOptions = (camera) => {
    if (camera === "all") {
      return "";
    }
    return `&camera=${camera}`;
  };

  const { data } = await axios.get(
    `${API}/${rover || "curiosity"}/photos?${searchFor || "earth_date"}=${
      inputSearch || getTodayDate
    }${camera ? cameraOptions(camera) : ""}&page=${
      page || 1
    }&api_key=${API_KEY}`
  );
  return data;
};

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key={API_KEY}
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key={API_KEY}

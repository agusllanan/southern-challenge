import axios from "axios";

const API = process.env.NEXT_PUBLIC_NASA_API; // https://api.nasa.gov/mars-photos/api/v1/rovers/
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

//Rovers: Curiosity Opportunity Spirit
// Cameras:
// FHAZ
// RHAZ
// MAST
// CHEMCAM
// MAHLI
// MARDI
// NAVCAM
// PANCAM
// MINITES

// Por default tengo que traer las ultimas fotos del dia de la fecha date today

export const getAllImages = async () => {
  const { data } = await axios.get(
    `${API}curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`
  );
  return data;
};

// va a ser llamado a traves de un evento idle, se va a guardar un state que sera null o vacio. Se modifica una vez seleccionado el rover.

export const getImagesFromRover = async (rover) => {
  const { data } = await axios.get(`${API}api_key=${API_KEY}`);
  return data;
};

// va a ser llamado a traves de un evento idle, se va a guardar un state que sera null o vacio. Se modifica una vez seleccionado el camara.

export const getImagesFromCamera = async (camera) => {
  const { data } = await axios.get(`${API}api_key=${API_KEY}`);
  return data;
};

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

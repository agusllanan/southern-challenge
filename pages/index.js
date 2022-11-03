import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import SearchFilters from "../src/components/SearchFilters";
import { getAllImages } from "../api/calls";
import PhotosGrid from "../src/components/PhotosGrid";

export default function Home() {
  const { data, error, isLoading } = useQuery(["images"], getAllImages);

  return (
    <div className="p-0.5">
      <Head>
        <title> Look to Mars </title>
        <meta
          name="description"
          content="This is for Southern code challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto flex-1 flex flex-col justify-center items-center p-2">
        <h1 className="text-4xl m-2 text-white">Welcome to the Mars!!</h1>
        <div className="flex flex-row justify-around w-2/3">
          <SearchFilters placeholder="camera" />
          <SearchFilters placeholder="rover" />
          <SearchFilters placeholder="Earthdate" />
          <SearchFilters placeholder="Sol" />
        </div>
        <PhotosGrid photos={data?.photos} />
      </main>
      <footer className="flex-1 flex flex-row justify-center items-center border-t-2 border-cyan-900 space-y-2 p-2">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// todo: Los filtros tienen que ser visibles para mayor usabilidad, se guarda en un state claramente un array. El cual se hace un map y renderiza los estados?

// tres rovers: Curiosity	Opportunity	Spirit
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

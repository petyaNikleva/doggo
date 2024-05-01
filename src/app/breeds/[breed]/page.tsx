import { Metadata } from "next";
import Link from "next/link";
import { notFound } from 'next/navigation';

import getBreedImages from "@/app/lib/getBreedImages";
import DogCard from "@/components/DogCard/DogCard";
import DogGridContainer from "@/components/DogGridContainer/DogGridContainer"; 
import { capitalizeFirstLetter } from "@/utils";
import { IoArrowBackCircleOutline } from "react-icons/io5";

type Params = {
  params: {
    breed: string;
  };
};

export function generateMetadata({ params: { breed } }: Params): Metadata {
 
  return {
    title: capitalizeFirstLetter(breed),
    description: `Breed galery page of ${breed}`,
  }

}
export default async function BreedPage({ params: { breed } }: Params) {
  const imagesData: string[] = await getBreedImages(breed);

  if (imagesData === undefined) return notFound();

  return (
    <main className="main">
      <h1>{capitalizeFirstLetter(breed)}</h1>
      <Link href="/"><IoArrowBackCircleOutline size={36}/></Link>
      <DogGridContainer> 
        {imagesData.map(imgUrl => <DogCard key={imgUrl} url={imgUrl} withFavouriteIcon />)}
      </DogGridContainer>
    </main>
  );
}

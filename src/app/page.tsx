import { getAllDogsWithRandomImages } from "./lib/getDogs";
import BreedListing from "@/components/BreedListing/BreedListing";

export default async function Home() {
  const dogs = await getAllDogsWithRandomImages();
  return (
    <main className="main">
      <BreedListing dogs={dogs} />
    </main>
  );
}

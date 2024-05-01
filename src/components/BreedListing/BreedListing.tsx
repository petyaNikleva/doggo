'use client'

import { useState } from "react";
import DogCard from "@/components/DogCard/DogCard";
import DogGridContainer from "@/components/DogGridContainer/DogGridContainer";
import SearchBar from "../SearchBar/SearchBar";

type BreedListingProps = {
  dogs: { 
    breed: string,
    url: string; 
  }[];
};

export default function BreedListing({ dogs }: BreedListingProps) {
  const [search, setSearch] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Breeds</h1>
      <SearchBar value={search} onChange={handleInputChange} /> 
      <DogGridContainer>
        {dogs
          .filter((dog) => dog.breed.toLowerCase().includes(search.toLowerCase()))
          .map((dog) => (
            <DogCard key={dog.url} title={dog.breed} url={dog.url} />
        ))}
      </DogGridContainer>
    </>
  );
}
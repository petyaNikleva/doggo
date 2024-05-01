"use client";

import { useAppContext } from "@/context";
import DogGridContainer from "@/components/DogGridContainer/DogGridContainer";
import DogCard from "@/components/DogCard/DogCard";

import styles from "./page.module.css";

export default function Favourite() {
  const { favouriteUrls } = useAppContext();
  return (
    <main className="main">
      <h1 className={styles.favHeader}>Favourites</h1>
      <DogGridContainer>
        {favouriteUrls
          .map((dogImgUrl) => (
            <DogCard key={dogImgUrl} url={dogImgUrl} withFavouriteIcon/>
          ))}
      </DogGridContainer>
    </main>
  );
}

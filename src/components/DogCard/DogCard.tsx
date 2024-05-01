"use client";

import Link from "next/link";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import ImageComponent from "../ImageComponent/ImageComponent";
import { useAppContext } from "@/context";
import styles from "./DogCard.module.css";

type DogCardProps = {
  title?: string;
  url: string;
  withFavouriteIcon?: boolean;
};

export default function DogCard({ title, url, withFavouriteIcon }: DogCardProps) {
  const { favouriteUrls, setFavouriteUrls, isFavourite } = useAppContext();

  const handleFavouriteClick = () => {
    const updatedFavouriteUrls = isFavourite(url)
      ? favouriteUrls.filter((x) => x !== url)
      : [...favouriteUrls, url];

    setFavouriteUrls(updatedFavouriteUrls);
  };

  return (
    <div className={styles.breedAndImgContainer}>
      {title ? (
      <Link href={`/breeds/${title}`}>
        <ImageComponent url={url} />
      </Link>
    ) : (
      <ImageComponent url={url} />
    )}

      {withFavouriteIcon && (
        <>
          {isFavourite(url) ? (
            <IoStarSharp
              size={48}
              className={styles.starIcon}
              onClick={handleFavouriteClick}
            />
          ) : (
            <IoStarOutline
              size={48}
              className={styles.starIcon}
              onClick={handleFavouriteClick}
            />
          )}
        </>
      )}
      {!withFavouriteIcon && <div className={styles.dogName}>{title}</div>}
    </div>
  );
}

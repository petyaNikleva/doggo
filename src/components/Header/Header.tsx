'use client'

import Link from "next/link"
import styles from "./Header.module.css";
import { useAppContext } from "@/context";

const Header = () => {
  const {favouriteUrls} = useAppContext();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/' className={styles.logo}>
            Doggo
        </Link>
        <Link href='/breeds/favourites' className={styles.favoutires}>
            Favourite: {favouriteUrls.length}
        </Link>
      </nav>
    </header>
  )
}

export default Header;
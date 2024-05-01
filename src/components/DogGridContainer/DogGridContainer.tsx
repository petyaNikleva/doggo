import styles from "./DogGridContainer.module.css";
import { ReactNode } from "react";

type DogGridContainerProps = {
  children: ReactNode; 
};

export default function DogGridContainer({ children }: DogGridContainerProps) { 
  return (
    <div className={styles.dogGridContainer}>
      {children}
    </div>
  );
}
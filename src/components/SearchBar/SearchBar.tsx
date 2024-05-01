import React from "react";
import styles from './SearchBar.module.css'

type SeachBarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export default function SearchBar({value, onChange}: SeachBarProps) {

  return (
    <input
      type="text"
      placeholder="Type to filter"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}
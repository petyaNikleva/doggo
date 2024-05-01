"use client";

import React, { createContext, useState, useContext } from "react";

type AppContextType = {
    favouriteUrls: string[];
    setFavouriteUrls: React.Dispatch<React.SetStateAction<string[]>>;
    isFavourite: (url:string) => boolean;
  };

const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [favouriteUrls, setFavouriteUrls] = useState<string[]>([]);

  const isFavourite = (url: string) => {
    return favouriteUrls.includes(url)
  }

  return (
    <AppContext.Provider
      value={{
        favouriteUrls,
        setFavouriteUrls,
        isFavourite
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

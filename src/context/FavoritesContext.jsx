import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(product) {
    setFavorites((prev) =>
      prev.find((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
  }

  function removeFromFavorites(id) {
    setFavorites((prev) => prev.filter((i) => i.id !== id));
  }

  function isFavorite(id) {
    return favorites.some((i) => i.id === id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

function getKey(user) {
  return user ? `favorites_${user.uid}` : null;
}

export function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [authToast, setAuthToast] = useState("");

  // załaduj ulubione po zalogowaniu
  useEffect(() => {
    if (user === undefined) return; // loading
    if (user) {
      try {
        const saved = JSON.parse(localStorage.getItem(getKey(user))) || [];
        setFavorites(saved);
      } catch { setFavorites([]); }
    } else {
      setFavorites([]);
    }
  }, [user]);

  // zapisuj ulubione do localStorage
  useEffect(() => {
    const key = getKey(user);
    if (key && user) {
      localStorage.setItem(key, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  function toggleFavorite(product) {
    if (!user) {
      setAuthToast("Zaloguj się, aby dodać produkt do ulubionych.");
      return false;
    }
    setFavorites((prev) =>
      prev.find((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
    return true;
  }

  function removeFromFavorites(id) {
    setFavorites((prev) => prev.filter((i) => i.id !== id));
  }

  function isFavorite(id) {
    return favorites.some((i) => i.id === id);
  }

  function dismissAuthToast() {
    setAuthToast("");
  }

  return (
    <FavoritesContext.Provider value={{
      favorites, toggleFavorite, removeFromFavorites, isFavorite,
      authToast, dismissAuthToast
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

function getKey(user) {
  return user ? `cart_${user.uid}` : null;
}

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [authToast, setAuthToast] = useState("");

  // załaduj koszyk po zalogowaniu
  useEffect(() => {
    if (user === undefined) return; // loading
    if (user) {
      try {
        const saved = JSON.parse(localStorage.getItem(getKey(user))) || [];
        setCartItems(saved);
      } catch { setCartItems([]); }
    } else {
      setCartItems([]);
    }
  }, [user]);

  // zapisuj koszyk do localStorage
  useEffect(() => {
    const key = getKey(user);
    if (key && user) {
      localStorage.setItem(key, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  function addToCart(product) {
    if (!user) {
      setAuthToast("Zaloguj się, aby dodać produkt do koszyka.");
      return false;
    }
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    return true;
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function changeQuantity(id, delta) {
    setCartItems((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
        .filter((i) => i.quantity > 0)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  function dismissAuthToast() {
    setAuthToast("");
  }

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const subtotal   = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping   = subtotal > 0 && subtotal >= 500 ? 0 : 15;
  const total      = subtotal + shipping;

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, changeQuantity, clearCart,
      totalItems, subtotal, shipping, total,
      authToast, dismissAuthToast
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
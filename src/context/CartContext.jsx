import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
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

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const subtotal   = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping   = subtotal > 0 && subtotal >= 500 ? 0 : 15;
  const total      = subtotal + shipping;

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, changeQuantity, clearCart,
      totalItems, subtotal, shipping, total
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
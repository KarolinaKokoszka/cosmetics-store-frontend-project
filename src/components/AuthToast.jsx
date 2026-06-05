import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import "./AuthToast.css";

function AuthToast() {
  const { authToast: cartToast, dismissAuthToast: dismissCart } = useCart();
  const { authToast: favToast, dismissAuthToast: dismissFav } = useFavorites();

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const msg = cartToast || favToast;
    if (msg) {
      setMessage(msg);
      setVisible(true);
    }
  }, [cartToast, favToast]);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setVisible(false);
      dismissCart();
      dismissFav();
    }, 4000);
    return () => clearTimeout(t);
  }, [visible, dismissCart, dismissFav]);

  if (!visible) return null;

  return (
    <div className="auth-toast">
      <div className="auth-toast__content">
        <svg className="auth-toast__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span className="auth-toast__text">{message}</span>
        <Link
          to="/login"
          className="auth-toast__link"
          onClick={() => { setVisible(false); dismissCart(); dismissFav(); }}
        >
          Zaloguj się
        </Link>
      </div>
    </div>
  );
}

export default AuthToast;
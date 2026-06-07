import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart }      from "../context/CartContext";
import "./UlubionePage.css";

import { useState, useCallback } from "react";
import Toast from "../components/Toast";


function UlubiionePage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const [toast, setToast] = useState({ visible: false, message: "" });
  const showToast  = useCallback((msg) => setToast({ visible: true, message: msg }), []);
  const hideToast  = useCallback(() => setToast((t) => ({ ...t, visible: false })), []);


  return (
    <div className="fav">
      <h1 className="fav__title">Ulubione</h1>

      {favorites.length === 0 ? (
        <div className="fav__empty">
          <p>Nie masz jeszcze żadnych ulubionych produktów.</p>
          <Link to="/pielegnacja" className="fav__empty-link">Przeglądaj produkty</Link>
        </div>
      ) : (
        <div className="fav__list">
          {favorites.map((product) => (
            <div key={product.id} className="fav__item">
              <Link to={`/produkt/${product.id}`} className="fav__img-wrap">
                <img
                  src={product.images?.[0] || "/images/placeholder.jpg"}
                  alt={product.name}
                  className="fav__img"
                />
              </Link>

              <div className="fav__info">
                <div className="fav__info-top">
                  {product.badge && (
                    <span className="fav__badge">{product.badge}</span>
                  )}
                  <Link to={`/produkt/${product.id}`} className="fav__name">
                    {product.name}
                  </Link>
                  <p className="fav__desc">{product.shortDesc}</p>
                </div>

                <div className="fav__info-bottom">
                  <button
                    className="fav__add-btn"
                    onClick={() => {
                      const added = addToCart(product);
                      if (added) {
                        showToast("Dodano do koszyka!");
                      }
                    }}
                  >
                    DODAJ DO KOSZYKA
                  </button>
                  <span className="fav__price">{product.price},00 PLN</span>
                </div>
              </div>

              <button
                className="fav__remove"
                onClick={() => removeFromFavorites(product.id)}
                aria-label="Usuń z ulubionych"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      )}
      <Toast message={toast.message} visible={toast.visible} onHide={hideToast} />
    </div>
  );
}

export default UlubiionePage;
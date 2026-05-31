import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useCallback } from "react";
import "./KoszykPage.css";

import Toast from "../components/Toast";

const FREE_SHIPPING_THRESHOLD = 500;

function KoszykPage() {
  const { cartItems, removeFromCart, changeQuantity, subtotal, shipping, total } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  const toFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  const [toast, setToast] = useState({ visible: false, message: "" });
  const showToast  = useCallback((msg) => setToast({ visible: true, message: msg }), []);
  const hideToast  = useCallback(() => setToast((t) => ({ ...t, visible: false })), []);


  return (
    <div className="cart">
      <h1 className="cart__title">Twój Koszyk</h1>

      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Twój koszyk jest pusty.</p>
          <Link to="/pielegnacja" className="cart__empty-link">Przeglądaj produkty</Link>
        </div>
      ) : (
        <div className="cart__layout">
          {/* Lista produktów */}
          <div className="cart__items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart__item">
                <Link to={`/produkt/${item.id}`} className="cart__item-img-wrap">
                  <img
                    src={item.images?.[0] || "/images/placeholder.jpg"}
                    alt={item.name}
                    className="cart__item-img"
                  />
                </Link>

                <div className="cart__item-info">
                  <div className="cart__item-top">
                    <div>
                      {item.badge && (
                        <span className="cart__item-badge">{item.badge}</span>
                      )}
                      <Link to={`/produkt/${item.id}`} className="cart__item-name">
                        {item.name}
                      </Link>
                      <p className="cart__item-desc">{item.shortDesc}</p>
                    </div>
                    <button
                      className="cart__item-remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Usuń"
                    >🗑</button>
                  </div>

                  <div className="cart__item-bottom">
                    <div className="cart__qty">
                      <button
                        className="cart__qty-btn"
                        onClick={() => changeQuantity(item.id, -1)}
                      >−</button>
                      <span className="cart__qty-num">{item.quantity}</span>
                      <button
                        className="cart__qty-btn"
                        onClick={() => changeQuantity(item.id, 1)}
                      >+</button>
                    </div>
                    <span className="cart__item-price">
                      {(item.price * item.quantity).toFixed(2).replace(".", ",")} PLN
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Hint darmowa dostawa */}
            {toFreeShipping > 0 && (
              <div className="cart__shipping-hint">
                <span>🚚</span>
                <span>Brakuje Ci tylko <strong>{toFreeShipping.toFixed(2).replace(".", ",")} PLN</strong> do darmowej dostawy!</span>
              </div>
            )}
          </div>

          {/* Podsumowanie */}
          <aside className="cart__summary">
            <h2 className="cart__summary-title">Podsumowanie</h2>

            <div className="cart__summary-rows">
              <div className="cart__summary-row">
                <span>Suma produktów</span>
                <span>{subtotal.toFixed(2).replace(".", ",")} PLN</span>
              </div>
              <div className="cart__summary-row">
                <span>Dostawa</span>
                <span>{shipping === 0 ? "Darmowa" : `${shipping},00 PLN`}</span>
              </div>
            </div>

            <div className="cart__summary-total">
              <span>Suma</span>
              <div>
                <p className="cart__summary-total-price">
                  {total.toFixed(2).replace(".", ",")} PLN
                </p>
                <p className="cart__summary-vat">ZAWIERA PODATEK VAT</p>
              </div>
            </div>

            <div className="cart__promo">
              <p className="cart__promo-label">KOD PROMOCYJNY</p>
              <div className="cart__promo-input-wrap">
                <input
                  type="text"
                  placeholder="Wpisz kod tutaj..."
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="cart__promo-input"
                />
                <button className="cart__promo-apply">Zastosuj</button>
              </div>
            </div>

            <button
              className="cart__buy-btn"
              onClick={() => navigate("/checkout")}
            >
              KUP TERAZ →
            </button>

            <div className="cart__badges">
              <p>🔒 Bezpieczne płatności SSL</p>
              <p>↩ 30 dni na darmowy zwrot</p>
            </div>
          </aside>
        </div>
      )}
      <Toast message={toast.message} visible={toast.visible} onHide={hideToast} />
    </div>
  );
}

export default KoszykPage;
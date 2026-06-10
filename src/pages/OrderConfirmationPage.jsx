import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./OrderConfirmationPage.css";

function OrderConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const order = state?.order;

  useEffect(() => {
    if (!location.state?.order) {
      navigate("/koszyk", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="confirm">
      <div className="confirm__inner">

        <div className="confirm__icon">✓</div>
        <h1 className="confirm__title">Zamówienie złożone!</h1>
        <p className="confirm__subtitle">
          Dziękujemy za zakup. Potwierdzenie zostanie wysłane na Twój adres e-mail.
        </p>

        {order && (
          <div className="confirm__summary">
            <h2 className="confirm__summary-title">Podsumowanie zamówienia</h2>

            <div className="confirm__items">
              {order.items.map((item, i) => (
                <div key={i} className="confirm__item">
                  <div className="confirm__item-img-wrap">
                    {item.images?.[0] && (
                      <img src={item.images[0]} alt={item.name} className="confirm__item-img" />
                    )}
                  </div>
                  <div className="confirm__item-info">
                    <p className="confirm__item-name">{item.name}</p>
                    <p className="confirm__item-qty">Ilość: {item.quantity}</p>
                  </div>
                  <p className="confirm__item-price">
                    {(item.price * item.quantity).toFixed(2)} PLN
                  </p>
                </div>
              ))}
            </div>

            <div className="confirm__totals">
              <div className="confirm__total-row">
                <span>Wartość produktów</span>
                <span>{order.subtotal?.toFixed(2)} PLN</span>
              </div>
              <div className="confirm__total-row">
                <span>Dostawa</span>
                <span>{order.shipping === 0 ? "GRATIS" : `${order.shipping?.toFixed(2)} PLN`}</span>
              </div>
              <div className="confirm__total-row confirm__total-row--total">
                <span>Razem</span>
                <span>{order.total?.toFixed(2)} PLN</span>
              </div>
            </div>
          </div>
        )}

        <div className="confirm__actions">
          <Link to="/" className="confirm__btn confirm__btn--primary">
            Wróć do sklepu
          </Link>
          <Link to="/moje-konto" className="confirm__btn confirm__btn--outline">
            Moje zamówienia
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OrderConfirmationPage;
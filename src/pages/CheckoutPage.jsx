import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CheckoutPage.css";

const PAYMENT_METHODS = [
  { id: "card", label: "Karta płatnicza", icon: "💳" },
  { id: "blik", label: "Blik",             icon: "📱" },
  { id: "p24",  label: "Przelewy24",       icon: "🏦" },
];

function CheckoutPage() {
  const { total, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({
    firstName: "", lastName: "", address: "",
    postal: "", city: "", phone: ""
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    const filled = Object.values(form).every((v) => v.trim() !== "");
    if (!filled) { alert("Uzupełnij wszystkie pola."); return; }
    clearCart();
    navigate("/zamowienie-zlozone");
  }

  return (
    <div className="checkout">
      <h1 className="checkout__title">Finalizacja zamówienia</h1>

      <div className="checkout__layout">
        <div className="checkout__left">
          {/* Dane do wysyłki */}
          <div className="checkout__section">
            <div className="checkout__section-header">
              <div className="checkout__section-icon">🚚</div>
              <h2 className="checkout__section-title">Dane do wysyłki</h2>
            </div>

            <div className="checkout__form">
              <div className="checkout__row">
                <div className="checkout__field">
                  <label className="checkout__label">Imię</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange}
                    placeholder="Jan" className="checkout__input" />
                </div>
                <div className="checkout__field">
                  <label className="checkout__label">Nazwisko</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange}
                    placeholder="Kowalski" className="checkout__input" />
                </div>
              </div>

              <div className="checkout__field">
                <label className="checkout__label">Adres</label>
                <input name="address" value={form.address} onChange={handleChange}
                  placeholder="ul. Kosmetyczna 42/3" className="checkout__input" />
              </div>

              <div className="checkout__row">
                <div className="checkout__field">
                  <label className="checkout__label">Kod pocztowy</label>
                  <input name="postal" value={form.postal} onChange={handleChange}
                    placeholder="00-001" className="checkout__input" />
                </div>
                <div className="checkout__field">
                  <label className="checkout__label">Miasto</label>
                  <input name="city" value={form.city} onChange={handleChange}
                    placeholder="Warszawa" className="checkout__input" />
                </div>
              </div>

              <div className="checkout__field">
                <label className="checkout__label">Numer telefonu</label>
                <div className="checkout__phone-wrap">
                  <span className="checkout__phone-prefix">+48</span>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    placeholder="123 456 789" className="checkout__input checkout__input--phone" />
                </div>
              </div>
            </div>
          </div>

          {/* Metoda płatności */}
          <div className="checkout__section">
            <div className="checkout__section-header">
              <div className="checkout__section-icon">💳</div>
              <h2 className="checkout__section-title">Metoda płatności</h2>
            </div>

            <div className="checkout__payment-methods">
              {PAYMENT_METHODS.map((m) => (
                <button
                  key={m.id}
                  className={`checkout__payment-btn ${payment === m.id ? "checkout__payment-btn--active" : ""}`}
                  onClick={() => setPayment(m.id)}
                >
                  <span className="checkout__payment-icon">{m.icon}</span>
                  <span className="checkout__payment-label">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Podsumowanie */}
        <aside className="checkout__summary">
          <h2 className="checkout__summary-title">Do zapłaty</h2>

          <div className="checkout__summary-total">
            <span>Suma</span>
            <div>
              <p className="checkout__summary-price">
                {total.toFixed(2).replace(".", ",")} PLN
              </p>
              <p className="checkout__summary-vat">ZAWIERA PODATEK VAT</p>
            </div>
          </div>

          <button className="checkout__submit-btn" onClick={handleSubmit}>
            ZAMAWIAM I PŁACĘ
          </button>

          <div className="checkout__trust">
            <p>🔒 Bezpieczne płatności SSL</p>
            <p>↩ 30 dni na darmowy zwrot</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;
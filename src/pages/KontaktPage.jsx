import { useState } from "react";
import "./KontaktPage.css";

const TOPICS = [
  "Zamówienie",
  "Zwrot / Reklamacja",
  "Dostawa",
  "Produkt",
  "Inne",
];

function KontaktPage() {
  const [form, setForm] = useState({ email: "", topic: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!form.email.trim()) {
      e.email = "Podaj adres e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Nieprawidłowy format adresu e-mail.";
    }
    if (!form.topic) e.topic = "Wybierz temat.";
    if (!form.message.trim()) e.message = "Wpisz wiadomość.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSent(true);
    setForm({ email: "", topic: "", message: "" });
    setErrors({});
  }

  return (
    <div className="kontakt">
      <div className="kontakt__header">
        <h1 className="kontakt__title">Kontakt</h1>
        <p className="kontakt__subtitle">
          Masz pytania dotyczące naszych produktów lub swojego zamówienia?<br />
          Jesteśmy tu, aby pomóc.
        </p>
      </div>

      <div className="kontakt__layout">
        {/* Dane kontaktowe */}
        <div className="kontakt__info">
          <h2 className="kontakt__info-title">Dane kontaktowe</h2>

          <div className="kontakt__info-items">
            <div className="kontakt__info-item">
              <div className="kontakt__info-icon">
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#6240D5" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="kontakt__info-label">Adres</p>
                <p className="kontakt__info-value">ul. Piękna 12/4<br />00-549 Warszawa<br />Polska</p>
              </div>
            </div>

            <div className="kontakt__info-item">
              <div className="kontakt__info-icon">
                <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="#6240D5" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="kontakt__info-label">Email</p>
                <p className="kontakt__info-value">kontakt@glowi.pl</p>
              </div>
            </div>

            <div className="kontakt__info-item">
              <div className="kontakt__info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6240D5" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="kontakt__info-label">Telefon</p>
                <p className="kontakt__info-value">+48 123 456 789</p>
                <p className="kontakt__info-hours">Pn - Pt. 9:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formularz */}
        <div className="kontakt__form-card">
          <h2 className="kontakt__info-title">Formularz</h2>

          {sent && (
            <div className="kontakt__success">
              <span className="kontakt__success-icon">✓</span>
              Wiadomość została wysłana! Odpiszemy wkrótce.
            </div>
          )}

          <div className="kontakt__form">
            <div className="kontakt__field">
              <label className="kontakt__label">Adres email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jan@example.com"
                className={`kontakt__input ${errors.email ? "kontakt__input--error" : ""}`}
              />
              {errors.email && <p className="kontakt__error">{errors.email}</p>}
            </div>

            <div className="kontakt__field">
              <label className="kontakt__label">Temat</label>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className={`kontakt__select ${errors.topic ? "kontakt__input--error" : ""}`}
              >
                <option value="">Wybierz temat...</option>
                {TOPICS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errors.topic && <p className="kontakt__error">{errors.topic}</p>}
            </div>

            <div className="kontakt__field">
              <label className="kontakt__label">Wiadomość</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Napisz swoją wiadomość tutaj..."
                rows={6}
                className={`kontakt__textarea ${errors.message ? "kontakt__input--error" : ""}`}
              />
              {errors.message && <p className="kontakt__error">{errors.message}</p>}
            </div>

            <button className="kontakt__submit" onClick={handleSubmit}>
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontaktPage;
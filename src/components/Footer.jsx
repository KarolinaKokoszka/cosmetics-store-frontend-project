import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* BRAND */}
        <div className="footer__brand">
          <span className="footer__logo">Glowi</span>
          <p className="footer__tagline">
            ekskluzywna pielęgnacja i makijaż zaprojektowane z myślą o twoim naturalnym blasku.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="mailto:hello@glowi.com" aria-label="Email" className="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
              </svg>
            </a>
          </div>
        </div>

        {/* SKLEP */}
        <div className="footer__col">
          <h4 className="footer__heading">SKLEP</h4>
          <ul className="footer__list">
            <li><Link to="/dostawa"  className="footer__link">Dostawa</Link></li>
            <li><Link to="/zwroty"   className="footer__link">Zwroty</Link></li>
            <li><Link to="/o-nas"    className="footer__link">O nas</Link></li>
          </ul>
        </div>

        {/* INFORMACJE */}
        <div className="footer__col">
          <h4 className="footer__heading">INFORMACJE</h4>
          <ul className="footer__list">
            <li><Link to="/polityka"  className="footer__link">Polityka Prywatności</Link></li>
            <li><Link to="/regulamin" className="footer__link">Regulamin</Link></li>
            <li><Link to="/kontakt"   className="footer__link">Kontakt</Link></li>
          </ul>
        </div>

        {/* DOŁĄCZ DO NAS */}
        <div className="footer__col">
          <h4 className="footer__heading">DOŁĄCZ DO NAS</h4>
          <p className="footer__newsletter-desc">
            Otrzymuj najświeższe informacje o nowościach i promocjach.
          </p>
          <div className="footer__email-wrap">
            <input
              type="email"
              placeholder="Twój e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__email-input"
              aria-label="Adres e-mail"
            />
            <button className="footer__email-btn" aria-label="Zapisz się">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 GLOWI. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
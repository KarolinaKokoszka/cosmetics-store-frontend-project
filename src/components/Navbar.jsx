import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import SearchOverlay from "./SearchOverlay";


const SCROLL_LINKS = {
  "/nowosci": "section-nowosci",
  "/promocje": "section-promocje",
};

const MAKIJAZ_ITEMS = [
  { label: "Twarz", path: "/makijaz?sub=twarz", icon: "/images/nav/makijaz-twarz.jpg" },
  { label: "Oczy",  path: "/makijaz?sub=oczy",  icon: "/images/nav/makijaz-oko.jpg"   },
  { label: "Usta",  path: "/makijaz?sub=usta",  icon: "/images/nav/makijaz-usta.jpg"  },
];

const PIELEGNACJA_CEL = [
  { label: "Włosy", path: "/pielegnacja?sub=wlosy", icon: "/images/nav/piel-wlosy.jpg" },
  { label: "Twarz", path: "/pielegnacja?sub=twarz", icon: "/images/nav/piel-twarz.jpg" },
  { label: "Ciało", path: "/pielegnacja?sub=cialo", icon: "/images/nav/piel-cialo.jpg" },
];

const PIELEGNACJA_RUTYNA = [
  { label: "Oczyszczanie", path: "/pielegnacja?rutyna=oczyszczanie", icon: "/images/nav/piel-oczyszczanie.jpg" },
  { label: "Tonizacja",    path: "/pielegnacja?rutyna=tonizacja",    icon: "/images/nav/piel-tonizacja.jpg"    },
  { label: "Krem",         path: "/pielegnacja?rutyna=krem",         icon: "/images/nav/piel-krem.jpg"         },
  { label: "Serum",        path: "/pielegnacja?rutyna=serum",        icon: "/images/nav/piel-serum.jpg"        },
];

const NAV_LINKS = [
  { label: "Nowości",      path: "/nowosci"      },
  { label: "Promocje",     path: "/promocje"     },
  { label: "Makijaż",     path: "/makijaz",     megamenu: "makijaz"     },
  { label: "Pielęgnacja", path: "/pielegnacja",  megamenu: "pielegnacja" },
  { label: "Poradniki",   path: "/poradniki"    },
  { label: "Kontakt",      path: "/kontakt"      },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [openMenu, setOpenMenu]     = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const navigate   = useNavigate();
  const location   = useLocation();
  const closeTimer = useRef(null);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [mobileMakeupOpen, setMobileMakeupOpen] = useState(false);
  const [mobileSkincareOpen, setMobileSkincareOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const t = setTimeout(() => scrollToSection(location.state.scrollTo), 80);
      return () => clearTimeout(t);
    }
  }, [location]);


  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname, location.search]);


  useEffect(() => {
  setAccountMenuOpen(false);
}, [user, location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function handleNavClick(e, path) {
    const sectionId = SCROLL_LINKS[path];
    if (!sectionId) return;
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  }

  function handleMouseEnter(menuKey) {
    clearTimeout(closeTimer.current);
    setOpenMenu(menuKey);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Glowi" className="navbar__logo-img" />
        </Link>

        {/* NAV — desktop */}
        <nav className="navbar__nav">
          {NAV_LINKS.map(({ label, path, megamenu }) => (
            <div
              key={path}
              className="navbar__item"
              onMouseEnter={() => megamenu && handleMouseEnter(megamenu)}
              onMouseLeave={() => megamenu && handleMouseLeave()}
            >
              <NavLink
                to={path}
                onClick={(e) => handleNavClick(e, path)}
                className={({ isActive }) =>
                  isActive ? "navbar__link navbar__link--active" : "navbar__link"
                }
              >
                {label}
                {megamenu && (
                  <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                )}
              </NavLink>

              {/* MEGAMENU MAKIJAŻ */}
              {megamenu === "makijaz" && openMenu === "makijaz" && (
                <div className="megamenu">
                  <div className="megamenu__inner">
                    <p className="megamenu__heading">Kategoria</p>
                    <ul className="megamenu__list">
                      {MAKIJAZ_ITEMS.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path} className="megamenu__item">
                            <div className="megamenu__icon-wrap">
                              <img src={item.icon} alt={item.label} className="megamenu__icon" />
                            </div>
                            <span>{item.label}</span>
                            <svg className="megamenu__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="9 18 15 12 9 6"/>
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* MEGAMENU PIELĘGNACJA */}
              {megamenu === "pielegnacja" && openMenu === "pielegnacja" && (
                <div className="megamenu">
                  <div className="megamenu__inner megamenu__inner--two-col">
                    <div className="megamenu__col">
                      <p className="megamenu__heading">Obszar</p>
                      <ul className="megamenu__list">
                        {PIELEGNACJA_CEL.map((item) => (
                          <li key={item.path}>
                            <Link to={item.path} className="megamenu__item">
                              <div className="megamenu__icon-wrap">
                                <img src={item.icon} alt={item.label} className="megamenu__icon" />
                              </div>
                              <span>{item.label}</span>
                              <svg className="megamenu__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"/>
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="megamenu__col">
                      <p className="megamenu__heading">Rutyna</p>
                      <ul className="megamenu__list">
                        {PIELEGNACJA_RUTYNA.map((item) => (
                          <li key={item.path}>
                            <Link to={item.path} className="megamenu__item">
                              <div className="megamenu__icon-wrap">
                                <img src={item.icon} alt={item.label} className="megamenu__icon" />
                              </div>
                              <span>{item.label}</span>
                              <svg className="megamenu__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"/>
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* IKONY (desktop) */}
        <div className="navbar__actions">
          {user ? (
              <>
              <div
                className="navbar__account"
                onMouseEnter={() => {
                  clearTimeout(closeTimer.current);
                  setAccountMenuOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => {
                    setAccountMenuOpen(false);
                  }, 180);
                }}
              >
                <span className="navbar__text-link navbar__text-link--greeting">
                  Witaj, {user.displayName?.split(" ")[0] || "Konto"}
                </span>

                {user && accountMenuOpen && (
                  <div className="navbar__account-dropdown">
                    <button
                      onClick={handleLogout}
                      className="navbar__account-item"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                      </svg>

                      <span>Wyloguj się</span>
                    </button>
                  </div>
                )}
              </div>

              <Link
                to="/moje-konto"
                className="navbar__text-link navbar__text-link--register"
              >
                MOJE KONTO
              </Link>
            </>
          ) : (
            <>
              <Link to="/login"    className="navbar__text-link">ZALOGUJ SIĘ</Link>
              <Link to="/register" className="navbar__text-link navbar__text-link--register">ZAREJESTRUJ SIĘ</Link>
            </>
          )}
          <div className="navbar__icons">
            <button className="navbar__icon-btn" aria-label="Szukaj" onClick={() => setSearchOpen(true)}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <Link to="/ulubione" className="navbar__icon-btn" aria-label="Ulubione">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </Link>
            <Link to="/koszyk" className="navbar__icon-btn navbar__icon-btn--cart" aria-label="Koszyk">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {totalItems > 0 && (
                <span className="navbar__cart-badge">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>

        {/* HAMBURGER — mobile */}
        <div className="navbar__mobile-actions">

          <button
            className="navbar__icon-btn"
            aria-label="Szukaj"
            onClick={() => setSearchOpen(true)}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <Link to="/ulubione" className="navbar__icon-btn" aria-label="Ulubione">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>

          <Link
            to="/koszyk"
            className="navbar__icon-btn navbar__icon-btn--cart"
            aria-label="Koszyk"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>

            {totalItems > 0 && (
              <span className="navbar__cart-badge">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className={`navbar__hamburger${mobileOpen ? " navbar__hamburger--open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile-menu${mobileOpen ? " navbar__mobile-menu--open" : ""}`}>
      <Link
        to="/nowosci"
        className="navbar__mobile-link"
        onClick={(e) => handleNavClick(e, "/nowosci")}
      >
        Nowości
      </Link>

      <Link
        to="/promocje"
        className="navbar__mobile-link"
        onClick={(e) => handleNavClick(e, "/promocje")}
      >
        Promocje
      </Link>

      {/* MAKIJAŻ */}
      <div className="navbar__mobile-group">
        <button
          className="navbar__mobile-parent"
          onClick={() => setMobileMakeupOpen(!mobileMakeupOpen)}
        >
          <span>Makijaż</span>
          <svg
            className={`navbar__mobile-chevron ${
              mobileMakeupOpen
                ? "navbar__mobile-chevron--open"
                : ""
            }`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {mobileMakeupOpen && (
          <div className="navbar__mobile-submenu">
            {MAKIJAZ_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="navbar__mobile-sublink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* PIELĘGNACJA */}
      <div className="navbar__mobile-group">
        <button
          className="navbar__mobile-parent"
          onClick={() => setMobileSkincareOpen(!mobileSkincareOpen)}
        >
          <span>Pielęgnacja</span>
          <svg
            className={`navbar__mobile-chevron ${
              mobileSkincareOpen
                ? "navbar__mobile-chevron--open"
                : ""
            }`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {mobileSkincareOpen && (
          <div className="navbar__mobile-submenu">

            <div className="navbar__mobile-subtitle">
              Obszar
            </div>

            {PIELEGNACJA_CEL.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="navbar__mobile-sublink"
              >
                {item.label}
              </Link>
            ))}

            <div className="navbar__mobile-subtitle">
              Rutyna
            </div>

            {PIELEGNACJA_RUTYNA.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="navbar__mobile-sublink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/poradniki" className="navbar__mobile-link">
        Poradniki
      </Link>

      <Link to="/kontakt" className="navbar__mobile-link">
        Kontakt
      </Link>
        <div className="navbar__mobile-auth">
          {user ? (
            <>
              <Link to="/moje-konto" className="navbar__mobile-btn navbar__mobile-btn--fill">
                MOJE KONTO
              </Link>
              <button onClick={handleLogout} className="navbar__mobile-btn navbar__mobile-btn--outline">
                WYLOGUJ SIĘ
              </button>
            </>
          ) : (
            <>
              <Link to="/login"    className="navbar__mobile-btn navbar__mobile-btn--outline">ZALOGUJ SIĘ</Link>
              <Link to="/register" className="navbar__mobile-btn navbar__mobile-btn--fill">ZAREJESTRUJ SIĘ</Link>
            </>
          )}
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

    </header>
  );
}

export default Navbar;
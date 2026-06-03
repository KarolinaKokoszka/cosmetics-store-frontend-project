import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

/* ===========================
   HERO SLIDER
   =========================== */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const TOTAL = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  function prev() { setCurrent((c) => (c - 1 + TOTAL) % TOTAL); }
  function next() { setCurrent((c) => (c + 1) % TOTAL); }

  return (
    <div className="slider">
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {/* SLAJD 1 — hero z tekstem */}
        <div className="slider__slide">
          <div className="hero">
            <div className="hero__content">
              <p className="hero__eyebrow">Luminous Luxury Collection</p>
              <h1 className="hero__title">
                Odkryj Blask<br />
                Naturalnej<br />
                Pielęgnacji
              </h1>
              <p className="hero__sub">
                Synergia klinicznej precyzji i czystej natury zamknięta w eleganckich formułach.
              </p>
              <Link to="/nowosci" className="btn btn--primary">
                Sprawdź kolekcję
              </Link>
            </div>
            <div className="hero__image-wrap">
              <div className="hero__rect" />
              <img
                src="/images/header/banner1.png"
                alt="Glowi hero"
                className="hero__image"
              />
            </div>
          </div>
        </div>

        {/* SLAJD 2 — kolaż z przekrzywionymi zdjęciami */}
        <div className="slider__slide">
          <div className="banner2">

            {/* LEWA — zdjęcie kobiety z różowym prostokątem */}
            <div className="banner2__photo-wrap banner2__photo-wrap--left">
              <div className="banner2__rect banner2__rect--pink" />
              <img src="/images/header/kobieta.png" alt="Glowi" className="banner2__photo banner2__photo--left" />
            </div>

            {/* ŚRODEK */}
            <div className="banner2__center">
              <h2 className="banner2__title">
                glow up<br />
                <span className="banner2__title-highlight">guide</span>
              </h2>
              <p className="banner2__sub">
                your skin, your rules<br />
                <strong>discover the glow within</strong>
              </p>
              <Link to="/poradniki/nawilzanie-skory" className="btn btn--primary">
                Czytaj więcej
              </Link>
            </div>

            {/* PRAWA — zdjęcie serum z miętowym prostokątem */}
            <div className="banner2__photo-wrap banner2__photo-wrap--right">
              <div className="banner2__rect banner2__rect--mint" />
              <img src="/images/header/serum.png" alt="Serum Glowi" className="banner2__photo banner2__photo--right" />
            </div>

          </div>
        </div>

        {/* SLAJD 3 — Makeup Collection */}
        <div className="slider__slide">
          <div className="banner3">
            <h2 className="banner3__title">
              Makeup <span>Collection</span>
            </h2>
            <div className="banner3__photos">
              <img src="/images/makeup/gloss-1.jpg"      alt="Gloss"     className="banner3__photo" />
              <img src="/images/header/twarz.png"         alt="Makijaż"   className="banner3__photo" />
              <img src="/images/makeup/eyeshadow2-1.jpg" alt="Eyeshadow" className="banner3__photo" />
            </div>
            <Link to="/makijaz" className="btn btn--primary">
              SPRAWDŹ
            </Link>
          </div>
        </div>

      </div>

      {/* STRZAŁKI */}
      <button className="slider__arrow slider__arrow--left" onClick={prev} aria-label="Poprzedni slajd">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className="slider__arrow slider__arrow--right" onClick={next} aria-label="Następny slajd">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* KROPKI */}
      <div className="slider__dots">
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            className={`slider__dot ${current === i ? "slider__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}




/* ── dane: Wyjątkowe Oferty ── */
const promoProducts = [
  {
    id: 18,
    name: "Zestaw Poranny Blask",
    shortDesc: "Kompletna poranna rutyna",
    price: 349,
    oldPrice: 439,
    images: ["/images/skincare/morning-set-1.jpg"],
    badge: "PROMOCJA",
    rating: 3.5,
    reviewCount: 52,
    category: "pielegnacja",
    slug: "/produkt/18",
  },
  {
    id: 19,
    name: "Duet Ochronny SPF",
    shortDesc: "Ochrona i nawilżenie w jednym",
    price: 189,
    oldPrice: 220,
    images: ["/images/skincare/spf-set-1.jpg"],
    badge: "PROMOCJA",
    rating: 4.0,
    reviewCount: 124,
    category: "pielegnacja",
    slug: "/produkt/19",
  },
  {
    id: 20,
    name: "Nocna Regeneracja + Maska",
    shortDesc: "Intensywna kuracja na noc",
    price: 189,
    oldPrice: 220,
    images: ["/images/skincare/night-cream-1.jpg"],
    badge: "PROMOCJA",
    rating: 4.4,
    reviewCount: 124,
    category: "pielegnacja",
    slug: "/produkt/20",
  },
];

/* ── dane: Blog ── */
const blogPosts = [
  {
    id: 1,
    category: "Pielęgnacja twarzy",
    title: "5 kroków do idealnego 'Glass Skin' tej jesieni",
    excerpt:
      "Odkryj, jak warto wdrożyć produkty, aby uzyskać efekt lustrzanej cery bez zbędnego nakładania.",
    image: "/images/advice/glass-skin-adv1.jpg",
    slug: "/poradniki/glass-skin",
  },
  {
    id: 2,
    category: "Składniki aktywne",
    title: "Retinol czy Bakuchiol? Wielkie porównanie",
    excerpt:
      "Wybieramy najlepsze rozwiązanie dla skóry wrażliwej. Poznaj moc naturalnych alternatyw.",
    image: "/images/advice/retinol-adv2.jpg",
    slug: "/poradniki/retinol-vs-bakuchiol",
  },
];

function HomePage() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  function handleNewsletter(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  }
  return (
    <main className="homepage">

      {/* ── SLIDER HERO ── */}
      <HeroSlider />

      {/* ── NOWOŚCI ── */}
      <section className="section nowosci" id="section-nowosci">
        <div className="section__inner">
          <div className="section__header">
            <div>
              <p className="section__eyebrow">Kuracja Sezonowa</p>
              <h2 className="section__title">Nowości</h2>
            </div>
            <Link to="/nowosci" className="section__see-all">ZOBACZ WSZYSTKO</Link>
          </div>

          <div className="nowosci__grid">

            {/* LEWA — duża karta Hydra Glow Serum */}
            <Link to="/produkt/12" className="nowosci__main-card">
              <div className="nowosci__main-img-wrap">
                <img src="/images/skincare/hydra-serum-1.jpg" alt="Hydra Glow Serum" className="nowosci__main-img" />
                <span className="nowosci__badge">BESTSELLER</span>
              </div>
              <div className="nowosci__main-info">
                <h3 className="nowosci__main-name">Hydra Glow Serum</h3>
                <p className="nowosci__main-desc">Intensywne nawilżenie 24h</p>
              </div>
            </Link>

            {/* PRAWA GÓRA — fioletowy kafelek + zdjęcie olejku */}
            <div className="nowosci__feature">
              <div className="nowosci__promo-card">
                <h3 className="nowosci__promo-title">Rewolucja w demakijażu</h3>
                <p className="nowosci__promo-text">
                  Poznaj naszą nową linię olejków myjących z ekstraktem z różowej piwonii.
                </p>
                <Link to="/produkt/13" className="nowosci__promo-link">ODKRYJ TERAZ</Link>
              </div>
              <Link to="/produkt/13" className="nowosci__photo-card">
                <img src="/images/skincare/peony-oil-1.jpg" alt="Olejek piwoniowy" className="nowosci__photo-img" />
              </Link>
            </div>

            {/* DÓŁ — Lip Sleeping Mask i Golden Glow Elixir */}
            <div className="nowosci__bottom-row">

              <Link to="/produkt/25" className="nowosci__simple-card nowosci__simple-card--gray">
                <img src="/images/skincare/lip-mask-1.jpg" alt="Lip Sleeping Mask" className="nowosci__simple-bg" />
                <div className="nowosci__simple-info">
                  <p className="nowosci__simple-label">Maska na noc na usta</p>
                  <h3 className="nowosci__simple-name">Lip Sleeping Mask</h3>
                  <p className="nowosci__simple-price">59 PLN</p>
                </div>
              </Link>

              <Link to="/produkt/16" className="nowosci__simple-card nowosci__simple-card--yellow">
                <img src="/images/skincare/golden-oil-1.jpg" alt="Golden Glow Elixir" className="nowosci__simple-bg" />
                <div className="nowosci__simple-info">
                  <h3 className="nowosci__simple-name">Golden Glow Elixir</h3>
                  <p className="nowosci__simple-label">Olejek do czyszczenia twarzy</p>
                  <p className="nowosci__simple-price">89 PLN</p>
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ── WYJĄTKOWE OFERTY ── */}
      <section className="section oferty" id="section-promocje">
        <div className="section__inner">
          <div className="section__header section__header--center">
            <div>
              <h2 className="section__title">Wyjątkowe Oferty</h2>
              <p className="section__subtitle">Limitowane zestawy w specjalnych cenach</p>
            </div>
          </div>

          <div className="oferty__grid">

            {promoProducts.map((p) => (
              <Link key={p.id} to={p.slug} className="oferty__card">
                <div className="oferty__img-wrap">
                  <img src={p.images[0]} alt={p.name} className="oferty__img" />
                  <span className="oferty__badge">PROMOCJA</span>
                </div>
                <div className="oferty__info">
                  <h3 className="oferty__name">{p.name.toUpperCase()}</h3>
                  <div className="oferty__pricing">
                    <span className="oferty__price">{p.price} PLN</span>
                    {p.oldPrice && <span className="oferty__old-price">{p.oldPrice} PLN</span>}
                  </div>
                  <button className="oferty__btn" onClick={(e) => e.preventDefault()}>
                    DODAJ DO KOSZYKA
                  </button>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <div className="newsletter__sun" aria-hidden="true" />
          <h2 className="newsletter__title">Dołącz do społeczności Glowi</h2>
          <p className="newsletter__sub">
            Zapisz się do naszego newslettera i otrzymaj{" "}
            <strong>-15% na pierwsze zamówienie</strong> oraz dostęp do
            ekskluzywnych poradników pielęgnacyjnych.
          </p>
          {subscribed ? (
            <div className="newsletter__success">
              Witamy w społeczności Glowi. Twój kod rabatowy -15% jest już w drodze na Twój adres e-mail.
            </div>
          ) : (
            <div className="newsletter__form">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="newsletter__input"
                aria-label="Adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNewsletter(e)}
              />
              <button className="btn btn--white" onClick={handleNewsletter}>ZAPISZ SIĘ</button>
            </div>
          )}
        </div>
      </section>

      {/* ── BEAUTY GUIDES / BLOG ── */}
      <section className="section blog">
        <div className="section__inner">
          <div className="section__header">
            <div>
              <p className="section__eyebrow">Ekspertyza &amp; Wiedza</p>
              <h2 className="section__title">Beauty Guides</h2>
            </div>
            <Link to="/poradniki" className="section__see-all">CZYTAJ BLOGA</Link>
          </div>

          <div className="blog__grid">
            {blogPosts.map((post) => (
              <Link key={post.id} to={post.slug} className="blog-card">
                <div className="blog-card__img-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__cat">{post.category}</span>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <span className="blog-card__link">
                    CZYTAJ WIĘCEJ &rsaquo;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default HomePage;
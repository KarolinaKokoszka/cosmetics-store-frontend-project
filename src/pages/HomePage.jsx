import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {/* SLAJD 0 */}
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
                src="/images/skincare/hero.jpg"
                alt="Glowi hero"
                className="hero__image"
              />
            </div>
          </div>
        </div>

        {/* SLAJD 1 */}
        <div className="slider__slide">
          <img
            src="/images/header/banner1.png"
            alt="Glow Up Guide"
            className="slider__banner-img"
          />
        </div>

        {/* SLAJD 2*/}
        <div className="slider__slide">
          <img
            src="/images/header/banner2.png"
            alt="Glowi banner 2"
            className="slider__banner-img"
          />
        </div>

      </div>

      {/* KROPKI NAWIGACJI */}
      <div className="slider__dots">
        {[0, 1, 2].map((i) => (
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


/* nowości */
const newProducts = [
  {
    id: 1,
    name: "Hydra Glow Serum",
    shortDesc: "Intensywne nawilżenie 24h",
    price: 189,
    oldPrice: 240,
    images: ["/images/skincare/serum.jpg"],
    badge: "BESTSELLER",
    rating: 4.8,
    reviewCount: 124,
    category: "pielegnacja",
    slug: "/produkt/1",
  },
  {
    id: 2,
    name: "Maska Detoksykująca",
    shortDesc: "Głębokie oczyszczenie porów",
    price: 149,
    images: ["/images/skincare/maska.jpg"],
    rating: 4.5,
    reviewCount: 87,
    category: "pielegnacja",
    slug: "/produkt/2",
  },
  {
    id: 3,
    name: "Krem pod oczy",
    shortDesc: "Redukuje cienie i opuchliznę",
    price: 199,
    images: ["/images/skincare/krem.jpg"],
    rating: 4.7,
    reviewCount: 63,
    category: "pielegnacja",
    slug: "/produkt/3",
  },
];

/* Wyjątkowe Oferty*/
const promoProducts = [
  {
    id: 4,
    name: "Zestaw Poranny Blask",
    shortDesc: "Kompletna poranna rutyna",
    price: 349,
    oldPrice: 480,
    images: ["/images/skincare/morning-set-1.jpg"],
    rating: 4.9,
    reviewCount: 201,
    category: "pielegnacja",
    slug: "/produkt/4",
  },
  {
    id: 5,
    name: "Duet Ochronny SPF",
    shortDesc: "Ochrona i nawilżenie w jednym",
    price: 189,
    oldPrice: 260,
    images: ["/images/skincare/spf-set-1.jpg"],
    badge: "PROMOCJA",
    rating: 4.6,
    reviewCount: 95,
    category: "pielegnacja",
    slug: "/produkt/5",
  },
  {
    id: 6,
    name: "Nocna Regeneracja + Maska",
    shortDesc: "Intensywna kuracja na noc",
    price: 189,
    oldPrice: 280,
    images: ["/images/skincare/night-cream-1.jpg"],
    badge: "PROMOCJA",
    rating: 4.8,
    reviewCount: 148,
    category: "pielegnacja",
    slug: "/produkt/6",
  },
];

/*dane: Blog*/
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

            <Link to={newProducts[0].slug} className="nowosci__main-card">
              <div className="nowosci__main-img-wrap">
                <img src="/images/skincare/hydra-serum-1.jpg" alt="Hydra Glow Serum" className="nowosci__main-img" />
                <span className="nowosci__badge">BESTSELLER</span>
              </div>
              <div className="nowosci__main-info">
                <h3 className="nowosci__main-name">Hydra Glow Serum</h3>
                <p className="nowosci__main-desc">Intensywne nawilżenie 24h</p>
              </div>
            </Link>

            <div className="nowosci__feature">
              <div className="nowosci__promo-card">
                <h3 className="nowosci__promo-title">Rewolucja w demakijażu</h3>
                <p className="nowosci__promo-text">
                  Poznaj naszą nową linię olejków myjących z ekstraktem z różowej piwonii.
                </p>
                <Link to="/pielegnacja" className="nowosci__promo-link">ODKRYJ TERAZ</Link>
              </div>
              <Link to="/produkt/25" className="nowosci__photo-card">
                <img src="/images/skincare/peony-oil-1.jpg" alt="Olejek piwoniowy" className="nowosci__photo-img" />
              </Link>
            </div>

            <div className="nowosci__bottom-row">

              <Link to="/produkt/25" className="nowosci__simple-card nowosci__simple-card--gray">
                <div className="nowosci__simple-info">
                  <p className="nowosci__simple-label">Maska na noc na usta</p>
                  <h3 className="nowosci__simple-name">Lip Sleeping Mask</h3>
                  <p className="nowosci__simple-price">59 PLN</p>
                </div>
              </Link>

              <Link to="/produkt/16" className="nowosci__simple-card nowosci__simple-card--yellow">
                <div className="nowosci__simple-info">
                  <div className="nowosci__simple-stars">★★★★★ <span>(98)</span></div>
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
          <div className="newsletter__form">
            <input
              type="email"
              placeholder="Twój adres e-mail"
              className="newsletter__input"
              aria-label="Adres e-mail"
            />
            <button className="btn btn--white">ZAPISZ SIĘ</button>
          </div>
        </div>
      </section>

      {/* ──  BLOG ── */}
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
              <article key={post.id} className="blog-card">
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
                  <Link to={post.slug} className="blog-card__link">
                    CZYTAJ WIĘCEJ &rsaquo;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default HomePage;
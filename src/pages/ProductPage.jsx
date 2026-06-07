import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import reviews from "../data/reviews";
import "./ProductPage.css";
import { useState, useEffect, useCallback } from "react";
import { useCart }      from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import Toast            from "../components/Toast";
import { getProductRating, getReviews } from "../utils/reviewsStorage";

function StarRating({ rating, size = 19 }) {
  return (
    <div className="stars" style={{ "--star-size": `${size}px` }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`star ${s <= Math.round(rating) ? "star--filled" : ""}`}>★</span>
      ))}
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion ${open ? "accordion--open" : ""}`}>
      <button className="accordion__header" onClick={() => setOpen((v) => !v)}>
        <span className="accordion__title">{title}</span>
        <svg className="accordion__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1L6 6L11 1" stroke="#191C1E" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {open && <div className="accordion__body">{children}</div>}
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();
  const [activeImg, setActiveImg] = useState(0);
  const [toast, setToast]         = useState({ visible: false, message: "" });
  const [userReviews, setUserReviews] = useState([]);

  const { addToCart }                  = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast((t) => ({ ...t, visible: false }));
  }, []);

  useEffect(() => {
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // załadowanie opinii użytkowników przy zmianie produktu
  useEffect(() => {
    setUserReviews(getReviews(Number(id)));
  }, [id]);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pdp__not-found">
        <h2>Produkt nie istnieje</h2>
        <Link to="/">Wróć na stronę główną</Link>
      </div>
    );
  }

  // obliczenie rating uwzględniając opinie użytkowników
  const { rating, count } = getProductRating(
    product.id,
    product.rating,
    product.reviewCount
  );

  // połączenie opinii mockowe z opiniami użytkowników
  const allReviews = [...reviews, ...userReviews];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const categoryLabel = product.category === "pielegnacja" ? "Pielęgnacja" : "Makijaż";
  const categoryPath  = product.category === "pielegnacja" ? "/pielegnacja" : "/makijaz";

  return (
    <div className="pdp">
      {/* Breadcrumbs */}
      <nav className="pdp__breadcrumbs">
        <Link to={categoryPath} className="pdp__breadcrumb-link">{categoryLabel}</Link>
        <span className="pdp__breadcrumb-sep">›</span>
        <span className="pdp__breadcrumb-current">{product.name}</span>
      </nav>

      {/* Hero */}
      <section className="pdp__hero">
        <div className="pdp__gallery">
          <div className="pdp__gallery-main">
            <img
              src={product.images?.[activeImg] || "/images/placeholder.jpg"}
              alt={product.name}
              className="pdp__gallery-main-img"
            />
          </div>
          {product.images?.length > 1 && (
            <div className="pdp__gallery-thumbs">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`pdp__thumb ${i === activeImg ? "pdp__thumb--active" : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pdp__info">
          {product.badge && (
            <span className={`pdp__badge pdp__badge--${product.badge === "BESTSELLER" ? "bestseller" : "promo"}`}>
              {product.badge}
            </span>
          )}

          <h1 className="pdp__name">{product.name}</h1>

          <div className="pdp__rating-row">
            <StarRating rating={rating} />
            <span className="pdp__rating-text">
              ({rating} / {count} opinii)
            </span>
          </div>

          <p className="pdp__price">
            {product.oldPrice && (
              <span className="pdp__price-old">{product.oldPrice},00 PLN</span>
            )}
            <span className={product.oldPrice ? "pdp__price-sale" : ""}>
              {product.price},00 PLN
            </span>
          </p>

          <p className="pdp__description">{product.description}</p>

          {product.ingredients?.length > 0 && (
            <div className="pdp__ingredients">
              <p className="pdp__ingredients-label">KLUCZOWE SKŁADNIKI</p>
              <div className="pdp__ingredients-tags">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="pdp__ingredient-tag">{ing}</span>
                ))}
              </div>
            </div>
          )}

          <div className="pdp__actions">
            <button
              className="pdp__btn-cart"
              onClick={() => {
                const added = addToCart(product);
                if (added) {
                  showToast("Dodano do koszyka!");
                }
              }}
            >
              DODAJ DO KOSZYKA
            </button>

            <button
              className={`pdp__btn-wishlist ${isFavorite(product.id) ? "pdp__btn-wishlist--active" : ""}`}
              onClick={() => toggleFavorite(product)}
            >
              <svg width="20" height="19" viewBox="0 0 24 24"
                fill={isFavorite(product.id) ? "currentColor" : "none"}
                stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {isFavorite(product.id) ? "USUŃ Z ULUBIONYCH" : "DODAJ DO ULUBIONYCH"}
            </button>
          </div>

          <div className="pdp__accordions">
            {product.usage && (
              <Accordion title="Sposób użycia">
                <p>{product.usage}</p>
              </Accordion>
            )}
            {product.inci && (
              <Accordion title="Pełny skład INCI">
                <p>{product.inci}</p>
              </Accordion>
            )}
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="pdp__reviews">
        <div className="pdp__reviews-header">
          <div>
            <h2 className="pdp__reviews-title">Opinie klientek</h2>
            <div className="pdp__reviews-summary">
              <span className="pdp__reviews-avg">{rating}</span>
              <StarRating rating={rating} />
            </div>
          </div>
        </div>

        <div className="pdp__reviews-grid">
          {allReviews.map((review, i) => (
            <div key={review.id || i} className="pdp__review-card">
              <div className="pdp__review-top">
                <div>
                  <p className="pdp__review-author">{review.author}</p>
                  <p className="pdp__review-date">{review.date}</p>
                </div>
                <StarRating rating={review.rating} size={15} />
              </div>
              <p className="pdp__review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Może Cię zainteresować */}
      {related.length > 0 && (
        <section className="pdp__related">
          <h2 className="pdp__related-title">Może Cię zainteresować</h2>
          <div className="pdp__related-grid">
            {related.map((p) => (
              <Link to={`/produkt/${p.id}`} key={p.id} className="pdp__related-card">
                <div className="pdp__related-img-wrap">
                  <img
                    src={p.images?.[0] || "/images/placeholder.jpg"}
                    alt={p.name}
                    className="pdp__related-img"
                  />
                </div>
                <p className="pdp__related-name">{p.name}</p>
                <p className="pdp__related-sub">{p.shortDesc}</p>
                <p className="pdp__related-price">{p.price},00 PLN</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Toast message={toast.message} visible={toast.visible} onHide={hideToast} />
    </div>
  );
}

export default ProductPage;
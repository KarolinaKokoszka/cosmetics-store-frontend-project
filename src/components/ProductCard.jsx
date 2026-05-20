import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/produkt/${product.id}`} className="product-card__image-link">
        <div className="product-card__image-wrapper">
          <img
            src={product.images?.[0] || "/images/placeholder.jpg"}
            alt={product.name}
            className="product-card__image"
          />

          {product.badge && (
            <span className={`product-card__badge product-card__badge--${product.badge === "BESTSELLER" ? "bestseller" : "promo"}`}>
              {product.badge}
            </span>
          )}

          <button
            className="product-card__wishlist"
            aria-label="Dodaj do ulubionych"
            onClick={(e) => e.preventDefault()}
          >
            ♡
          </button>
        </div>
      </Link>

      <div className="product-card__info">
        <div className="product-card__top">
          <div className="product-card__text">
            <Link to={`/produkt/${product.id}`} className="product-card__name">
              {product.name}
            </Link>
            <p className="product-card__short-desc">{product.shortDesc}</p>
          </div>

          <div className="product-card__price-box">
            {product.oldPrice && (
              <span className="product-card__old-price">{product.oldPrice} PLN</span>
            )}
            <span className={`product-card__price ${product.oldPrice ? "product-card__price--sale" : ""}`}>
              {product.price} PLN
            </span>
          </div>
        </div>

        <div className="product-card__rating">
          <div className="product-card__stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`product-card__star ${star <= Math.round(product.rating) ? "product-card__star--filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="product-card__review-count">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
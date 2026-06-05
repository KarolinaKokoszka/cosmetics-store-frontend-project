import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useFavorites } from "../context/FavoritesContext";
import { getProductRating } from "../utils/reviewsStorage";

function ProductCard({ product }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { rating, count } = getProductRating(product.id, product.rating, product.reviewCount);

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
            className={`product-card__wishlist ${isFavorite(product.id) ? "product-card__wishlist--active" : ""}`}
            aria-label="Dodaj do ulubionych"
            onClick={(e) => { e.preventDefault(); toggleFavorite(product); }}
          >
            <svg width="20" height="18" viewBox="0 0 24 24"
              fill={isFavorite(product.id) ? "currentColor" : "none"}
              stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
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

        {/* ← używa obliczonego ratingu */}
        <div className="product-card__rating">
          <div className="product-card__stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`product-card__star ${star <= Math.round(rating) ? "product-card__star--filled" : ""}`}
              >★</span>
            ))}
          </div>
          <span className="product-card__review-count">({count})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
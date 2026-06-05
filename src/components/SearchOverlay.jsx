import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import "./SearchOverlay.css";

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const q = query.toLowerCase().trim();

  const results = q.length < 2
    ? []
    : products.filter((p) => {
        const haystack = [
          p.name,
          p.shortDesc,
          p.category,
          p.subcategory,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        
        // sprawdza każde słowo z zapytania osobno
        const words = q.split(/\s+/);
        return words.every((word) => haystack.includes(word));
      })
      .slice(0, 8);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-overlay__content" onClick={(e) => e.stopPropagation()}>

        <div className="search-overlay__bar">
          <svg className="search-overlay__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-overlay__input"
            placeholder="Szukaj produktów... np. serum, maska, olejek"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-overlay__close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {q.length >= 2 && (
          <div className="search-overlay__results">
            {results.length === 0 ? (
              <p className="search-overlay__empty">
                Nie znaleziono produktów dla "{query}"
              </p>
            ) : (
              <>
                <p className="search-overlay__count">
                  {results.length} {results.length === 1 ? "wynik" : results.length < 5 ? "wyniki" : "wyników"}
                </p>
                <ul className="search-overlay__list">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/produkt/${p.id}`}
                        className="search-overlay__item"
                        onClick={onClose}
                      >
                        <div className="search-overlay__img-wrap">
                          <img
                            src={p.images?.[0] || "/images/placeholder.jpg"}
                            alt={p.name}
                            className="search-overlay__img"
                          />
                        </div>
                        <div className="search-overlay__info">
                          <span className="search-overlay__name">{p.name}</span>
                          <span className="search-overlay__desc">{p.shortDesc}</span>
                        </div>
                        <div className="search-overlay__price-wrap">
                          {p.oldPrice && (
                            <span className="search-overlay__old-price">{p.oldPrice} PLN</span>
                          )}
                          <span className={`search-overlay__price ${p.oldPrice ? "search-overlay__price--sale" : ""}`}>
                            {p.price} PLN
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {q.length < 2 && (
          <div className="search-overlay__hints">
            <p className="search-overlay__hints-title">Popularne wyszukiwania</p>
            <div className="search-overlay__tags">
              {["serum", "krem", "maska", "olejek", "paleta", "podkład", "tusz"].map((tag) => (
                <button
                  key={tag}
                  className="search-overlay__tag"
                  onClick={() => setQuery(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default SearchOverlay;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";
import "./PoradnikiPage.css";

const FILTERS = [
  { value: "wszystkie", label: "Wszystkie kategorie" },
  { value: "pielegnacja", label: "Pielęgnacja" },
  { value: "makijaz", label: "Makijaż" },
];

function PoradnikiPage() {
  const [activeFilter, setActiveFilter] = useState("wszystkie");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeFilter === "wszystkie"
    ? articles
    : articles.filter((a) => a.category === activeFilter);

  const activeLabel = FILTERS.find((f) => f.value === activeFilter)?.label;

  return (
    <div className="poradniki">
      <div className="poradniki__inner">

        {/* NAGŁÓWEK */}
        <div className="poradniki__header">
          <div>
            <h1 className="poradniki__title">Poradniki</h1>
            <p className="poradniki__subtitle">Ekspertki wiedzy o pielęgnacji i makijażu — sprawdzone porady, które naprawdę działają.</p>
          </div>

          {/* DROPDOWN FILTR */}
          <div className="poradniki__filter-wrap">
            <button
              className="poradniki__filter-btn"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              {activeLabel}
              <svg
                width="16" height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="poradniki__dropdown">
                {FILTERS.map((f) => (
                  <li key={f.value}>
                    <button
                      className={`poradniki__dropdown-item ${activeFilter === f.value ? "poradniki__dropdown-item--active" : ""}`}
                      onClick={() => {
                        setActiveFilter(f.value);
                        setDropdownOpen(false);
                      }}
                    >
                      {f.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* LISTA ARTYKUŁÓW */}
        <div className="poradniki__list">
          {filtered.map((article) => (
            <Link
              key={article.id}
              to={article.slug}
              className={`article-card article-card--${article.layout}`}
              style={{ background: article.bg }}
            >
              {/* ZDJĘCIE */}
              <div className="article-card__img-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-card__img"
                  loading="lazy"
                />
              </div>

              {/* TREŚĆ */}
              <div className="article-card__body">
                <span
                  className="article-card__cat"
                  style={{ background: article.catColor, color: article.catTextColor }}
                >
                  {article.categoryLabel}
                </span>
                <h2 className="article-card__title">{article.title}</h2>
                <p className="article-card__excerpt">{article.excerpt}</p>
                <Link to={article.slug} className="article-card__link">
                  CZYTAJ WIĘCEJ &rarr;
                </Link>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="poradniki__empty">Brak artykułów w tej kategorii.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default PoradnikiPage;
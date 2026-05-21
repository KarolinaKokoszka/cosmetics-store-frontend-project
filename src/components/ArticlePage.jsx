import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";
import "./ArticlePage.css";

function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === `/poradniki/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="article-page__not-found">
        <p>Nie znaleziono artykułu.</p>
        <Link to="/poradniki">Wróć do poradników</Link>
      </div>
    );
  }

  const related = articles.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 2);

  return (
    <div className="article-page">

      {/* HERO */}
      <div className="article-page__hero" style={{ background: article.bg }}>
        <div className="article-page__hero-inner">
          <div className="article-page__hero-content">
            <Link to="/poradniki" className="article-page__back">
              ← Poradniki
            </Link>
            <span
              className="article-page__cat"
              style={{ background: article.catColor, color: article.catTextColor }}
            >
              {article.categoryLabel}
            </span>
            <h1 className="article-page__title">{article.title}</h1>
            <p className="article-page__meta">{article.readTime} czytania</p>
          </div>
          <div className="article-page__hero-img-wrap">
            <img
              src={article.image}
              alt={article.title}
              className="article-page__hero-img"
            />
          </div>
        </div>
      </div>

      {/* TREŚĆ */}
      <div className="article-page__body">

        <p className="article-page__intro">{article.intro}</p>

        <div className="article-page__sections">
          {article.sections.map((section, i) => (
            <div key={i} className="article-page__section">
              <h2 className="article-page__section-heading">
                <span
                  className="article-page__section-num"
                  style={{ background: article.catColor, color: article.catTextColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <p className="article-page__section-text">{section.text}</p>
            </div>
          ))}
        </div>

        {/* TIP */}
        {article.tip && (
          <div
            className="article-page__tip"
            style={{ borderColor: article.catColor, background: article.bg }}
          >
            <span className="article-page__tip-label">Wskazówka</span>
            <p className="article-page__tip-text">{article.tip}</p>
          </div>
        )}

      </div>

      {/* POWIĄZANE ARTYKUŁY */}
      {related.length > 0 && (
        <div className="article-page__related">
          <div className="article-page__related-inner">
            <h3 className="article-page__related-title">Czytaj też</h3>
            <div className="article-page__related-grid">
              {related.map((r) => (
                <Link key={r.id} to={r.slug} className="article-page__related-card">
                  <div
                    className="article-page__related-img-wrap"
                    style={{ background: r.bg }}
                  >
                    <img src={r.image} alt={r.title} className="article-page__related-img" />
                  </div>
                  <div className="article-page__related-info">
                    <span
                      className="article-page__related-cat"
                      style={{ color: r.catColor }}
                    >
                      {r.categoryLabel}
                    </span>
                    <h4 className="article-page__related-name">{r.title}</h4>
                    <span className="article-page__related-link">CZYTAJ WIĘCEJ →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ArticlePage;
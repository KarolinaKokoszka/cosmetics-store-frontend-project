import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductListPage.css";
import products from "../data/products";

const ITEMS_PER_PAGE = 6;

function ProductListPage({ category, title, description, subcategories }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // odczytaj ?sub= z URL przy pierwszym renderze i przy zmianie URL
  const subFromUrl = searchParams.get("sub") || "wszystko";

  const [selectedSub, setSelectedSub] = useState(subFromUrl);
  const [priceMin, setPriceMin]       = useState("");
  const [priceMax, setPriceMax]       = useState("");
  const [sort, setSort]               = useState("domyslnie");
  const [appliedFilters, setAppliedFilters] = useState({
    sub: subFromUrl,
    min: "",
    max: "",
    sort: "domyslnie",
  });
  const [currentPage, setCurrentPage] = useState(1);

  // gdy zmieni się ?sub= w URL (np. po kliknięciu w megamenu),
  // zaktualizuj stan filtrów automatycznie
  useEffect(() => {
    const sub = searchParams.get("sub") || "wszystko";
    setSelectedSub(sub);
    setAppliedFilters((prev) => ({ ...prev, sub }));
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams]);

  function changePage(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.category === category);
    if (appliedFilters.sub !== "wszystko") {
      result = result.filter((p) => p.subcategory === appliedFilters.sub);
    }
    if (appliedFilters.min !== "") {
      result = result.filter((p) => p.price >= Number(appliedFilters.min));
    }
    if (appliedFilters.max !== "") {
      result = result.filter((p) => p.price <= Number(appliedFilters.max));
    }
    if (appliedFilters.sort === "cena-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (appliedFilters.sort === "cena-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (appliedFilters.sort === "ocena") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [category, appliedFilters]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function applyFilters() {
    // aktualizuj URL query param żeby sub było widoczne w pasku
    if (selectedSub !== "wszystko") {
      setSearchParams({ sub: selectedSub });
    } else {
      setSearchParams({});
    }
    setAppliedFilters({ sub: selectedSub, min: priceMin, max: priceMax, sort });
    changePage(1);
  }

  function clearFilters() {
    setSearchParams({});
    setSelectedSub("wszystko");
    setPriceMin("");
    setPriceMax("");
    setSort("domyslnie");
    setAppliedFilters({ sub: "wszystko", min: "", max: "", sort: "domyslnie" });
    changePage(1);
  }

  // zmiana subkategorii przez checkbox też aktualizuje URL od razu
  function handleSubChange(value) {
    setSelectedSub(value);
  }

  return (
    <div className="plp">
      <div className="plp__header">
        <div>
          <h1 className="plp__title">{title}</h1>
          <p className="plp__desc">{description}</p>
        </div>
        <span className="plp__count">LICZBA PRODUKTÓW: {filtered.length}</span>
      </div>

      <div className="plp__body">
        <aside className="plp__filters">
          <h2 className="plp__filters-title">Filtry</h2>

          <div className="plp__filter-group">
            <p className="plp__filter-label">KATEGORIA</p>
            <label className="plp__filter-check">
              <input
                type="checkbox"
                checked={selectedSub === "wszystko"}
                onChange={() => handleSubChange("wszystko")}
              />
              <span>Wszystko</span>
            </label>
            {subcategories.map((sub) => (
              <label key={sub.value} className="plp__filter-check">
                <input
                  type="checkbox"
                  checked={selectedSub === sub.value}
                  onChange={() => handleSubChange(sub.value)}
                />
                <span>{sub.label}</span>
              </label>
            ))}
          </div>

          <div className="plp__filter-group">
            <p className="plp__filter-label">CENA (PLN)</p>
            <div className="plp__price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                className="plp__price-input"
              />
              <span className="plp__price-dash">–</span>
              <input
                type="number"
                placeholder="Max"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                className="plp__price-input"
              />
            </div>
          </div>

          <div className="plp__filter-group">
            <p className="plp__filter-label">SORTUJ</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="plp__select"
            >
              <option value="domyslnie">Domyślnie</option>
              <option value="cena-asc">Cena: rosnąco</option>
              <option value="cena-desc">Cena: malejąco</option>
              <option value="ocena">Najlepiej oceniane</option>
            </select>
          </div>

          <div className="plp__filter-actions">
            <button onClick={applyFilters} className="plp__btn-apply">
              Zastosuj filtry
            </button>
            <button onClick={clearFilters} className="plp__btn-clear">
              Usuń filtry
            </button>
          </div>
        </aside>

        <div className="plp__main">
          {paginated.length === 0 ? (
            <p className="plp__empty">Brak produktów spełniających kryteria.</p>
          ) : (
            <div className="plp__grid">
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="plp__pagination">
              <button
                className="plp__page-btn"
                onClick={() => changePage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`plp__page-btn ${currentPage === page ? "plp__page-btn--active" : ""}`}
                  onClick={() => changePage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="plp__page-btn"
                onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
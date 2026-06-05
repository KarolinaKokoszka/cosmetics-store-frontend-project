import { useState } from "react";
import { addReview } from "../utils/reviewsStorage";
import "./ReviewModal.css";

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="star-picker">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-picker__star ${star <= (hovered || value) ? "star-picker__star--filled" : ""}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`${star} gwiazdek`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function ReviewModal({ product, onClose, onSaved,authorName = "Użytkownik" }) {
  const [rating, setRating] = useState(0);
  const [text, setText]     = useState("");
  const [error, setError]   = useState("");
  const [saved, setSaved]   = useState(false);

  function handleSubmit() {
    if (rating === 0) { setError("Wybierz ocenę."); return; }
    if (!text.trim()) { setError("Napisz opinię."); return; }
    addReview(product.id, { rating, text: text.trim(), author: authorName  });
    setSaved(true);
    setTimeout(() => { onSaved(); onClose(); }, 1500);
  }

  return (
    <div className="rmodal__overlay" onClick={onClose}>
      <div className="rmodal" onClick={(e) => e.stopPropagation()}>
        {saved ? (
          <div className="rmodal__success">
            <div className="rmodal__success-icon">✓</div>
            <p>Opinia została opublikowana!</p>
          </div>
        ) : (
          <>
            <div className="rmodal__product">
              {product.images?.[0] && (
                <img src={product.images[0]} alt={product.name} className="rmodal__img" />
              )}
              <p className="rmodal__product-name">
                Podziel się swoją opinią o produkcie {product.name}
              </p>
            </div>

            <StarPicker value={rating} onChange={(v) => { setRating(v); setError(""); }} />

            <div className="rmodal__field">
              <label className="rmodal__label">Twoja opinia</label>
              <textarea
                className="rmodal__textarea"
                placeholder="Napisz co sądzisz o produkcie..."
                value={text}
                onChange={(e) => { setText(e.target.value); setError(""); }}
                rows={5}
              />
            </div>

            {error && <p className="rmodal__error">{error}</p>}

            <div className="rmodal__actions">
              <button className="rmodal__submit" onClick={handleSubmit}>
                Opublikuj opinię
              </button>
              <button className="rmodal__cancel" onClick={onClose}>
                Anuluj
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReviewModal;
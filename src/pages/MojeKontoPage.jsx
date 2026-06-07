import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import products from "../data/products";
import ReviewModal from "../components/ReviewModal";
import "./MojeKontoPage.css";
import { hasReviewed, markAsReviewed } from "../utils/reviewsStorage";

const mockOrders = [
  {
    id: "123456789",
    date: "25.04.2025",
    items: [
      { productId: 14, price: 249 },
      { productId: 15, price: 189 },
    ],
  },
  {
    id: "123456222",
    date: "15.03.2025",
    items: [
      { productId: 15, price: 189 },
    ],
  },
];

function MojeKontoPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [profileSaved, setProfileSaved] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword]         = useState("");
  const [passwordMsg, setPasswordMsg]         = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // ← NOWE: stan modala opinii
  const [reviewModal, setReviewModal] = useState(null); // { product, orderId }


  useEffect(() => {
    window.scrollTo(0, 0);
    const parts = (user.displayName || "").split(" ");
    setFirstName(parts[0] || "");
    setLastName(parts.slice(1).join(" ") || "");
    setEmail(user.email || "");
  }, [user]);

  async function handleProfileSave(e) {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  }

  async function handlePasswordChange(e) {
    e.preventDefault();
    setPasswordMsg("");
    try {
      const cred = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, cred);
      await updatePassword(auth.currentUser, newPassword);
      setPasswordMsg("Hasło zostało zmienione.");
      setCurrentPassword("");
      setNewPassword("");
    } catch {
      setPasswordMsg("Błąd — sprawdź aktualne hasło.");
    }
  }

  async function handleDelete() {
    try {
      await deleteUser(auth.currentUser);
      navigate("/");
    } catch {
      alert("Nie udało się usunąć konta. Zaloguj się ponownie i spróbuj.");
    }
  }

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  if (user === undefined || user === null) return null;

  return (
    <div className="konto">
      <div className="konto__inner">

        <div className="konto__top">
          <div className="konto__box">
            <h2 className="konto__box-title">Moje konto</h2>
            <form onSubmit={handleProfileSave}>
              <p className="konto__section-label">Dane profilowe</p>
              <div className="konto__row">
                <div className="konto__field">
                  <label className="konto__label">Imię</label>
                  <input className="konto__input" value={firstName} disabled />
                </div>
                <div className="konto__field">
                  <label className="konto__label">Nazwisko</label>
                  <input className="konto__input" value={lastName} disabled />
                </div>
              </div>
              <div className="konto__field">
                <label className="konto__label">Adres E-mail</label>
                <input className="konto__input" value={email} disabled />
              </div>
              <div className="konto__field">
                <label className="konto__label">Numer telefonu</label>
                <input
                  className="konto__input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+48 000 000 000"
                />
              </div>
              <button type="submit" className="konto__btn konto__btn--primary">
                {profileSaved ? "Zapisano!" : "Zapisz zmiany"}
              </button>
            </form>
            <button className="konto__logout" onClick={handleLogout}>
              Wyloguj się
            </button>
          </div>

          <div className="konto__side">
            <div className="konto__box">
              <h2 className="konto__box-title">Zmiana hasła</h2>
              <form onSubmit={handlePasswordChange}>
                <div className="konto__field">
                  <label className="konto__label">Aktualne hasło</label>
                  <input type="password" className="konto__input" value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)} required />
                </div>
                <div className="konto__field">
                  <label className="konto__label">Nowe hasło</label>
                  <input type="password" className="konto__input" value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                {passwordMsg && <p className="konto__msg">{passwordMsg}</p>}
                <button type="submit" className="konto__btn konto__btn--outline">
                  Zmień hasło
                </button>
              </form>
            </div>

            <div className="konto__box konto__box--danger">
              <h2 className="konto__box-title konto__box-title--danger">Usuń konto</h2>
              <p className="konto__danger-text">
                Tej operacji nie można cofnąć. Wszystkie Twoje dane zostaną trwale usunięte.
              </p>
              {deleteConfirm ? (
                <div className="konto__delete-confirm">
                  <p className="konto__danger-text">Czy na pewno chcesz usunąć konto?</p>
                  <div className="konto__delete-btns">
                    <button className="konto__btn konto__btn--danger" onClick={handleDelete}>Tak, usuń</button>
                    <button className="konto__btn konto__btn--outline" onClick={() => setDeleteConfirm(false)}>Anuluj</button>
                  </div>
                </div>
              ) : (
                <button className="konto__btn konto__btn--danger" onClick={() => setDeleteConfirm(true)}>
                  Usuń moje konto
                </button>
              )}
            </div>
          </div>
        </div>

        {/* HISTORIA ZAMÓWIEŃ */}
        <div className="konto__box konto__orders">
          <h2 className="konto__box-title">Historia zamówień</h2>

          {mockOrders.map((order) => (
            <div key={order.id} className="konto__order">
              <div className="konto__order-header">
                <span className="konto__order-num">ZAMÓWIENIE NR {order.id}</span>
                <span className="konto__order-date">{order.date}</span>
              </div>

              {order.items.map((item, i) => {
                const product = products.find((p) => p.id === item.productId);
                const alreadyReviewed = hasReviewed(order.id, item.productId, user.uid);

                return (
                  <div key={i} className="konto__order-item">
                    <div className="konto__order-img-wrap">
                      {product?.images?.[0] && (
                        <img src={product.images[0]} alt={product.name} className="konto__order-img" />
                      )}
                    </div>
                    <span className="konto__order-name">{product?.name || "Produkt"}</span>
                    <span className="konto__order-price">{item.price.toFixed(2)} PLN</span>

                    <button
                      className={`konto__review-btn ${alreadyReviewed ? "konto__review-btn--done" : ""}`}
                      onClick={() => !alreadyReviewed && product && setReviewModal({ product, orderId: order.id })}
                      disabled={alreadyReviewed}
                    >
                      {alreadyReviewed ? "OPINIA DODANA ✓" : "DODAJ OPINIĘ"}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>

      {/* ← MODAL OPINII */}
      {reviewModal && (
        <ReviewModal
          product={reviewModal.product}
          onClose={() => setReviewModal(null)}
          onSaved={() => {
            markAsReviewed(reviewModal.orderId, reviewModal.product.id, user.uid);
            setReviewModal(null);
          }}
          authorName={`${firstName} ${lastName.charAt(0)}.`}
        />
      )}
    </div>
  );
}

export default MojeKontoPage;
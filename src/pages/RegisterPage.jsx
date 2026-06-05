import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import "./AuthPage.css";

function RegisterPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) navigate("/");
  }, [user, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Hasła nie są identyczne.");
      return;
    }
    if (password.length < 6) {
      setError("Hasło musi mieć co najmniej 6 znaków.");
      return;
    }

    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, {
        displayName: `${firstName} ${lastName}`.trim(),
      });
      navigate("/");
    } catch (err) {
      setError(mapError(err.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page auth-page--register">
      <h1 className="auth-page__big-title">Stwórz swój profil</h1>
      <p className="auth-page__big-sub">Dołącz do świata Glowi i odkryj blask swojej skóry.</p>

      <div className="auth-card auth-card--wide">
        <form className="auth-form" onSubmit={handleSubmit} noValidate>

          <div className="auth-form__row">
            <div className="auth-form__field">
              <label className="auth-form__label">IMIĘ</label>
              <div className="auth-form__input-wrap">
                <input
                  type="text"
                  className="auth-form__input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="auth-form__field">
              <label className="auth-form__label">NAZWISKO</label>
              <div className="auth-form__input-wrap">
                <input
                  type="text"
                  className="auth-form__input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">E-MAIL</label>
            <div className="auth-form__input-wrap">
              <input
                type="email"
                placeholder="twoj@email.pl"
                className="auth-form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">HASŁO</label>
            <div className="auth-form__input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                className="auth-form__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="auth-form__eye" onClick={() => setShowPassword(v => !v)}>
                <EyeIcon open={showPassword} />
              </button>
            </div>
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">POWTÓRZ HASŁO</label>
            <div className="auth-form__input-wrap">
              <input
                type={showConfirm ? "text" : "password"}
                className="auth-form__input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="button" className="auth-form__eye" onClick={() => setShowConfirm(v => !v)}>
                <EyeIcon open={showConfirm} />
              </button>
            </div>
          </div>

          {error && <p className="auth-form__error">{error}</p>}

          <button type="submit" className="auth-form__submit" disabled={loading}>
            {loading ? "REJESTRACJA..." : "ZAREJESTRUJ SIĘ"}
          </button>

        </form>

        <p className="auth-card__footer">
          Masz już konto?{" "}
          <Link to="/login" className="auth-card__link">Zaloguj się</Link>
        </p>
      </div>
    </div>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

function mapError(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "Ten e-mail jest już zarejestrowany.";
    case "auth/invalid-email":
      return "Nieprawidłowy format e-mail.";
    case "auth/weak-password":
      return "Hasło jest za słabe. Użyj co najmniej 6 znaków.";
    default:
      return "Wystąpił błąd. Spróbuj ponownie.";
  }
}

export default RegisterPage;
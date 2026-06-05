import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import "./AuthPage.css";

function LoginPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) navigate("/");
  }, [user, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(mapError(err.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-card__title">Witaj ponownie</h1>
        <p className="auth-card__subtitle">
          Zaloguj się do swojego konta Glowi, aby kontynuować rytuał pielęgnacji.
        </p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>

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
                autoComplete="email"
              />
              <svg className="auth-form__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
            </div>
          </div>

          <div className="auth-form__field">
            <div className="auth-form__label-row">
              <label className="auth-form__label">HASŁO</label>
              <button type="button" className="auth-form__forgot">ZAPOMNIAŁEŚ?</button>
            </div>
            <div className="auth-form__input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                className="auth-form__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="auth-form__eye"
                onClick={() => setShowPassword((v) => !v)}
                aria-label="Pokaż hasło"
              >
                {showPassword ? (
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
                )}
              </button>
            </div>
          </div>

          {error && <p className="auth-form__error">{error}</p>}

          <button
            type="submit"
            className="auth-form__submit"
            disabled={loading}
          >
            {loading ? "LOGOWANIE..." : "ZALOGUJ SIĘ"}
          </button>

        </form>

        <p className="auth-card__footer">
          Nie masz konta?{" "}
          <Link to="/register" className="auth-card__link">Zarejestruj się</Link>
        </p>
      </div>
    </div>
  );
}

function mapError(code) {
  switch (code) {
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Nieprawidłowy e-mail lub hasło.";
    case "auth/too-many-requests":
      return "Za dużo prób. Spróbuj ponownie później.";
    case "auth/invalid-email":
      return "Nieprawidłowy format e-mail.";
    default:
      return "Wystąpił błąd. Spróbuj ponownie.";
  }
}

export default LoginPage;
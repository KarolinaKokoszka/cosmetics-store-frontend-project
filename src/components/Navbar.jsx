import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbartop">
        <span>ZALOGUJ SIĘ</span>
        <Link to="/register" className="navbarregister-btn">ZAREJESTRUJ SIĘ</Link>
      </div>

      <div className="navbarmain">
        <Link to="/" className="navbarlogo">
          <img src="/logo.png" alt="Glowi" />
        </Link>

        <nav className="navbarnav">
          <NavLink to="/nowosci">Nowości</NavLink>
          <NavLink to="/promocje">Promocje</NavLink>
          <NavLink to="/makijaz">Makijaż</NavLink>
          <NavLink to="/pielegnacja">Pielęgnacja</NavLink>
          <NavLink to="/poradniki">Poradniki</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>

        <div className="navbaricons">
          <button>🔍</button>
          <button>♡</button>
          <Link to="/koszyk">🛒</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
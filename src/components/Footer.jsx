import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footercontent">

        <div className="footerbrand">
          <h3>Glowi</h3>
          <p>ekskluzywna pielęgnacja i makijaż zaprojektowane z myślą o twoim naturalnym blasku.</p>
          <div className="footersocials">
            <a href="#">f</a>
            <a href="#">ig</a>
            <a href="#">@</a>
          </div>
        </div>

        <div className="footercol">
          <h4>SKLEP</h4>
          <Link to="/dostawa">Dostawa</Link>
          <Link to="/zwroty">Zwroty</Link>
          <Link to="/o-nas">O nas</Link>
        </div>

        <div className="footercol">
          <h4>INFORMACJE</h4>
          <Link to="/polityka">Polityka Prywatności</Link>
          <Link to="/regulamin">Regulamin</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>

        <div className="footercol">
          <h4>DOŁĄCZ DO NAS</h4>
          <p>Otrzymuj najświeższe informacje o nowościach i promocjach.</p>
          <div className="footernewsletter">
            <input type="email" placeholder="Twój e-mail" />
            <button>→</button>
          </div>
        </div>

      </div>

      <div className="footerbottom">
        <p>© 2026 GLOWI. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
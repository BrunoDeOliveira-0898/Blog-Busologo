import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>
          <img src="/bus.ico" alt="Blog Icon" className="navbar-icon" />
          Blog Busólogo
        </Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Início</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            Novo Post
          </Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

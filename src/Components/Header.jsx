import { Link } from "react-router-dom";
import "./css/header.css";

function Header() {
  return (
    <>
      <section className="header">
        <div className="logo-text">
          <h2>Talha Mughal</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/OurServices">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="social-icons">
          <ul>
            <li>
              <i class="fab fa-github"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
            <li>
              <i class="fab fa-facebook"></i>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;

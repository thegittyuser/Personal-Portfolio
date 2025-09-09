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
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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

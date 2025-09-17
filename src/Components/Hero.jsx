import "./css/hero.css";
import heroImage from "../assets/images/Talha Mughal.jpg";

function Hero() {
  return (
    <section className="hero">  

      {/* Foreground Content */}
      <div className="hero-text">
        <h2>Talha Mughal</h2>
        <p>
          Welcome to my personal portfolio where I showcase my projects, skills,
          and experience as a developer.
        </p>
      </div>

      <div className="hero-image">
        <div className="image-container">
          <img src={heroImage} alt="Talha Mughal Pic" />
        </div>
        <div className="icons-container">
          <i className="fa-brands fa-html5 skill-icon"></i>
          <i className="fa-brands fa-node-js skill-icon"></i>
          <i className="fa-brands fa-css3-alt skill-icon"></i>
          <i className="fa-brands fa-react skill-icon"></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;

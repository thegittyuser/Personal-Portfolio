import "./css/hero.css";
import heroImage from "../assets/images/Talha Mughal.jpg";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h2>Talha Mughal</h2>
          <p>
            Welcome to my personal portfolio where I showcase my projects,
            skills, and experience as a developer.
          </p>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={heroImage} alt="Talha Mughal Pic" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

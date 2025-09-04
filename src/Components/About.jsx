import aboutImage from "../assets/images/about-img.webp";
import "./css/about.css";

function About() {
  return (
    <>
      <section className="about">
        <h2>About Us</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="About Image" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Welcome to the portfolio of <strong>Talha Mughal</strong>. I'm a
              passionate developer focused on building clean, responsive, and
              impactful web experiences. With a dedication to continuous
              learning and delivering high-quality work, I thrive on turning
              ideas into functional and visually engaging digital solutions.
            </p>
            <button>Hire Me</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

import "./css/services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Services Offered</h2>
      <div className="services-container">
        <div className="card">
          <h3>Web Development</h3>
          <p>
            Responsive and optimized websites using modern frameworks like
            React, Next.js, and more.
          </p>
        </div>
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>
            Clean and intuitive designs that enhance user experience and reflect
            your brand identity.
          </p>
        </div>
        <div className="card">
          <h3>Frontend Development</h3>
          <p>
            Pixel-perfect frontend development with HTML, CSS, JavaScript, and
            React.
          </p>
        </div>
        <div className="card">
          <h3>Backend Integration</h3>
          <p>
            Seamless API and backend integration with Node.js, Express, MongoDB,
            and more.
          </p>
        </div>
        <div className="card">
          <h3>Portfolio Websites</h3>
          <p>
            Custom portfolio designs tailored to highlight your skills,
            projects, and achievements.
          </p>
        </div>
        <div className="card">
          <h3>SEO Optimization</h3>
          <p>
            Improve visibility on search engines with performance optimization
            and SEO best practices.
          </p>
        </div>
        <div className="card">
          <h3>Maintenance & Support</h3>
          <p>
            Ongoing site maintenance, updates, and technical support to keep
            your site running smoothly.
          </p>
        </div>
        <div className="card">
          <h3>Consultation</h3>
          <p>
            Technical guidance and project planning for startups, freelancers,
            or personal brands.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

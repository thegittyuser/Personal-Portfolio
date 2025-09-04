import "./css/testimonials.css";

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>
              “Talha delivered an outstanding website for our brand. The design
              is sleek, the code is clean, and the experience was seamless from
              start to finish.”
            </p>
            <h4>— Sarah Khan, Brand Strategist</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Working with Talha was a game-changer. He understood our needs
              quickly and built a solution that exceeded expectations. Highly
              recommended!”
            </p>
            <h4>— Adeel Qureshi, Startup Founder</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Great communication, timely delivery, and impressive frontend
              skills. Will definitely collaborate again in the future.”
            </p>
            <h4>— Maria Ali, Project Manager</h4>
          </div>
        </div>
      </section>    
    </>
  );
}

export default Testimonials;

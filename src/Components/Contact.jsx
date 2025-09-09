import "./css/contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Feel free to reach out to us for any inquiries, support, or
              feedback. We are here to help and answer any questions you may
              have.
            </p>
            <div className="icons">
              <span>
                <a href="https://wa.me/+923200015752">
                  <i class="fa-solid fa-phone"></i>
                  &ensp; +92 320 0015752
                </a>
              </span>
              <span>
                <a href="mailto:info@talhaportfolio.com">
                  <i class="fa-solid fa-envelope"></i>
                  &ensp; info@talhaportfolio.com
                </a>
              </span>
              <span>
                <a href="https://maps.app.goo.gl/owVG9ASRZpaNPVQU7">
                  <i class="fa-solid fa-location-dot"></i>
                  &ensp; 154 Main GT Road, Baraf Khana Stop, Baghbanpura,
                  Lahore, 54000, Pakistan
                </a>
              </span>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />

              <input type="text" placeholder="Enter Phone No" />
              <input type="text" placeholder="Enter Subject" />
              <textarea placeholder="Write Your Message"></textarea>

              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

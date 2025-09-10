import { useState } from "react";
import "./css/contact.css";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username && !email && !phone && !subject && !message) {
      alert("All Fields Are Required");
    } else {
      const phoneNumber = 923249430801;

      const textMessage = `Hello, I am ${username}.\nEmail: ${email}\nPhone No: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

      const encryptMessage = encodeURIComponent(textMessage);

      const callWhatsApp = `https://wa.me/${phoneNumber}?text=${encryptMessage}`;

      window.open(callWhatsApp);
    }
  };
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span style={{ color: "#ff0000ff", display: "none" }}>
                Username is required
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span style={{ color: "#ff0000ff", display: "none" }}>
                Email is required
              </span>

              <input
                type="tel"
                placeholder="Enter Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span style={{ color: "#ff0000ff", display: "none" }}>
                Phone is required
              </span>

              <input
                type="text"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <span style={{ color: "#ff0000ff", display: "none" }}>
                Subject is required
              </span>

              <textarea
                placeholder="Write Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <span style={{ color: "#ff0000ff", display: "none" }}>
                Message is required
              </span>

              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

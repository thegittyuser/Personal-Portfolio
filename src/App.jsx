import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Skills from "./Components/Skills.jsx";
import Services from "./Components/Services.jsx";
import OurServices from "./pages/OurServices.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/OurServices" element={<OurServices />}></Route>
        </Routes>
      </Router>

      {/* <Hero />
      <Skills />
      <Services />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default App;

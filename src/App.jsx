// import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
// import Skills from "./Components/Skills.jsx";
// import Services from "./Components/Services.jsx";
// import Contact from "./Components/Contact.jsx";
// import Footer from "./Components/Footer.jsx";
import Threads from "./bits/Threads.jsx";
import Prism from "./bits/Prism.jsx";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
      {/* {/* <Header /> */}
      <Hero />
      {/* <Skills /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    </>
  );
}

export default App;

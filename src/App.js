import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portofolio/Portfolio";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import Navbar from "./components/navbar";
import Carosel from "./components/carosel";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section id="home-section">
      <Navbar />
      <Carosel />
      <About />
      <Project />
      <Contact />
      <Footer />
    </section>
  );
}

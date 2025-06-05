
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import ClientLogos from "../components/ClientLogos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <ClientLogos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

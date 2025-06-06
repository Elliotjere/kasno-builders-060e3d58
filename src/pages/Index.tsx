
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Stats from "../components/Stats";
import ClientLogos from "../components/ClientLogos";
import CEOStatement from "../components/CEOStatement";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Stats />
      <ClientLogos />
      <CEOStatement />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

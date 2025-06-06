
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PortfolioPage;

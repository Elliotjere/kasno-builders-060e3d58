
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
      style={{
        background: `conic-gradient(white ${scrollProgress * 3.6}deg, #dc2626 0deg)`
      }}
    >
      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
        <ArrowUp size={20} />
      </div>
    </button>
  );
};

export default ScrollToTop;

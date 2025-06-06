
import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Track <span className="text-red-500">Record</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and the trust our clients place in us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

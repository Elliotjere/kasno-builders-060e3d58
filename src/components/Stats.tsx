
import { Building, Calendar, Users, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    team: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Building,
      number: 500,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered projects across Tanzania",
      key: "projects"
    },
    {
      icon: Calendar,
      number: 20,
      suffix: "+",
      label: "Years of Experience",
      description: "Two decades of construction excellence",
      key: "years"
    },
    {
      icon: Users,
      number: 50,
      suffix: "+",
      label: "Expert Team Members",
      description: "Skilled professionals dedicated to quality",
      key: "team"
    },
    {
      icon: Award,
      number: 98,
      suffix: "%",
      label: "On-Time Delivery",
      description: "Committed to meeting project deadlines",
      key: "satisfaction"
    }
  ];

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

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        stats.forEach((stat) => {
          let start = 0;
          const end = stat.number;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }

            setCounts(prev => ({
              ...prev,
              [stat.key]: Math.floor(start)
            }));
          }, 16);
        });
      };

      animateCounters();
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Track <span className="text-red-500">Record</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-red-500 mb-4 flex justify-center">
                <stat.icon size={48} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

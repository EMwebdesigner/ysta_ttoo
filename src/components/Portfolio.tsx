import { useEffect, useRef, useState } from 'react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const portfolioItems = [
    { id: 1, title: 'Realismo B&N', category: 'Realismo', image: portfolio1 },
    { id: 2, title: 'Tradicional', category: 'Tradicional', image: portfolio2 },
    { id: 3, title: 'Geométrico', category: 'Geométrico', image: portfolio3 },
    { id: 4, title: 'Oriental', category: 'Oriental', image: portfolio4 },
    { id: 5, title: 'Minimalista', category: 'Minimalista', image: portfolio5 },
    { id: 6, title: 'Fine Line', category: 'Fine Line', image: portfolio6 },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 bg-card"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Nuestros Trabajos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada tatuaje es una obra de arte única. Conocé algunos de nuestros diseños más destacados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-square overflow-hidden cursor-pointer ${
                isVisible ? `animate-fade-in-up delay-${(index % 3) * 100 + 200}` : 'opacity-0'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-muted-foreground drop-shadow-md">{item.category}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="text-center text-foreground bg-background/30 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="text-lg font-semibold drop-shadow-lg">Ver Trabajo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

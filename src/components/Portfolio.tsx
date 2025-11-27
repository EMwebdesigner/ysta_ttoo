import { useEffect, useRef, useState } from 'react';

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
    { id: 1, title: 'Realismo B&N', category: 'Realismo' },
    { id: 2, title: 'Tradicional', category: 'Tradicional' },
    { id: 3, title: 'Geométrico', category: 'Geométrico' },
    { id: 4, title: 'Oriental', category: 'Oriental' },
    { id: 5, title: 'Minimalista', category: 'Minimalista' },
    { id: 6, title: 'Fine Line', category: 'Fine Line' },
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
              className={`group relative aspect-square bg-secondary hover-zoom overlay-dark cursor-pointer ${
                isVisible ? `animate-fade-in-up delay-${(index % 3) * 100 + 200}` : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.category}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="text-center text-foreground">
                  <p className="text-lg font-semibold">Ver Trabajo</p>
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

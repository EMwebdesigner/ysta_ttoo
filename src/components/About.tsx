import { useEffect, useRef, useState } from 'react';
import studioInterior from '@/assets/studio-interior.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-background border-t border-border"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <img
              src={studioInterior}
              alt="Interior del Estudio"
              className="w-full h-auto shadow-2xl"
            />
          </div>

          <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Sobre Nuestro Estudio
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos un estudio profesional dedicado al arte del tatuaje, combinando técnicas tradicionales 
              con estilos contemporáneos. Cada diseño es único y personalizado para expresar tu historia.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Trabajamos con los más altos estándares de higiene y seguridad, utilizando equipamiento 
              de última generación y materiales de primera calidad para garantizar resultados excepcionales.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="text-3xl font-bold text-foreground mb-1">10+</h3>
                <p className="text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h3 className="text-3xl font-bold text-foreground mb-1">2000+</h3>
                <p className="text-muted-foreground">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

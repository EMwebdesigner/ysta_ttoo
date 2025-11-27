import { useEffect, useRef, useState } from 'react';
import { Palette, Sparkles, Shield, Users } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Palette,
      title: 'Diseño Personalizado',
      description: 'Creamos diseños únicos adaptados a tu estilo y preferencias. Trabajamos contigo hasta lograr el arte perfecto.',
    },
    {
      icon: Sparkles,
      title: 'Cover Up',
      description: 'Transformamos tatuajes antiguos en nuevas obras de arte. Especialistas en coberturas y correcciones.',
    },
    {
      icon: Shield,
      title: 'Máxima Higiene',
      description: 'Protocolos sanitarios estrictos. Equipamiento esterilizado y materiales descartables en cada sesión.',
    },
    {
      icon: Users,
      title: 'Asesoramiento',
      description: 'Te guiamos en todo el proceso: desde la idea inicial hasta los cuidados post-tatuaje.',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos una experiencia completa, desde el diseño hasta el cuidado posterior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-card p-8 hover-lift border border-border group ${
                  isVisible ? `animate-fade-in-up delay-${index * 100 + 200}` : 'opacity-0'
                }`}
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

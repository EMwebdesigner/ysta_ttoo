import { useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(14, 14, 14, 0.85) 0%, rgba(14, 14, 14, 0.3) 100%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-heading tracking-tight">
          Arte en tu Piel
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
          Estudio profesional de tatuajes. Diseños únicos, técnica impecable.
        </p>
        <button
          onClick={scrollToContact}
          className="px-8 py-4 border-2 border-primary text-foreground hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105 animate-fade-in-up delay-300"
        >
          Reservá tu Turno
        </button>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="flex items-center">
            <img src={logo} alt="ysta_ttoo" className="h-12 w-auto" />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground link-underline hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground link-underline hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground link-underline hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground link-underline hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2 border border-primary text-foreground hover:bg-primary hover:text-background transition-all duration-300"
          >
            Reservar Turno
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

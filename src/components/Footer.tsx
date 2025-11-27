import { Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Tattoo Studio" className="h-16 w-auto mb-6" />
          
          <div className="flex items-center space-x-6 mb-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">Sobre Nosotros</a>
            <span className="text-border">|</span>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <span className="text-border">|</span>
            <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
            <span className="text-border">|</span>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {currentYear} Tattoo Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Servicios' },
    { id: 'contact', label: 'Contacto' },
  ];

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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground link-underline hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2 border border-primary text-foreground hover:bg-primary hover:text-background transition-all duration-300"
          >
            Reservar Turno
          </button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-foreground p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-carbon-black border-steel-gray">
              <SheetHeader>
                <SheetTitle className="text-white">
                  <img src={logo} alt="ysta_ttoo" className="h-10 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors text-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 px-6 py-3 border border-primary text-foreground hover:bg-primary hover:text-background transition-all duration-300 text-center"
                >
                  Reservar Turno
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

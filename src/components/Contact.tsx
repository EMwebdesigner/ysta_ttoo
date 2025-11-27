import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos a la brevedad para coordinar tu turno.",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-card"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Reservá tu Turno
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Completá el formulario y nos contactaremos a la brevedad para coordinar tu sesión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Contanos sobre tu idea de tatuaje..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-background hover:bg-accent hover:text-foreground transition-all duration-300 font-semibold hover:scale-[1.02]"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold mb-1">Teléfono</p>
                    <p className="text-muted-foreground">+54 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@tattoostudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold mb-1">Dirección</p>
                    <p className="text-muted-foreground">Av. Corrientes 1234, CABA<br />Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="text-xl font-bold text-foreground mb-4">Horarios</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes a Viernes: 14:00 - 20:00</p>
                <p>Sábados: 12:00 - 18:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

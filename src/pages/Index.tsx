import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

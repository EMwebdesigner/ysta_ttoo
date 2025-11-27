const Map = () => {
  return (
    <section id="map" className="py-20 bg-carbon-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ubicación</h2>
          <p className="text-silver-gray">Visitanos en nuestro estudio</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg border border-steel-gray">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168882598283!2d-58.38375908477058!3d-34.60373098045925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacfca43f4cd%3A0x3a4c3f8b0e8e8e8e!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del estudio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

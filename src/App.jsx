import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaInstagram, FaStrava, FaWhatsapp } from 'react-icons/fa';

export default function App() {
  const [sliderRef] = useKeenSlider({ loop: true, mode: 'snap' });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  // Desactivado temporalmente el botón de pago de MercadoPago (PARA EVENTOS)
  useEffect(() => {
    /*
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js';
    script.setAttribute('data-preference-id', '606748986-9e87cde5-d165-4ac1-b6a8-9a98e25d210f');
    script.setAttribute('data-source', 'button');
    script.setAttribute('type', 'text/javascript');

    const container = document.getElementById('mercado_pago_button_0');
    if (container) {
      container.innerHTML = ''; // Limpiar el contenedor antes de añadir
      container.appendChild(script);
    }
    */
  }, []);

  const merchandiseItems = [
    {
      title: 'Mile Masters Everyday Training',
      discountedPrice: '$80.000', // Ahora es el precio único
      image: '/producto.png', // Reemplaza con la ruta de tu imagen
      colors: 'Black',
      // inStock ya no es necesario
    },
    {
      title: 'Mile Masters Everyday Training',
      discountedPrice: '$80.000',
      image: '/producto2.png', // Reemplaza con la ruta de tu imagen
      colors: 'Fuzzy Pink',
      // inStock ya no es necesario
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans scroll-smooth relative w-full overflow-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-neutral-800 text-sm backdrop-blur-sm">
        <nav className="w-full max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="tracking-wider font-medium uppercase text-sm">MILE MASTERS</span>
          <ul className="flex space-x-4 md:space-x-8 text-sm">
            <li><a href="#benefits" className="hover:text-[#E43F7B] transition-opacity">Beneficios</a></li>
            <li><a href="#community" className="hover:text-[#E43F7B] transition-opacity">Comunidad</a></li>
            <li><a href="#merchandising" className="hover:text-[#E43F7B] transition-opacity">Merchandising</a></li> {/* Nuevo enlace */}
            <li><a href="#contact" className="hover:text-[#E43F7B] transition-opacity">Instagram</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight" data-aos="fade-up">Mile Masters Club</h1>
          <p className="text-lg md:text-2xl text-[#E43F7B] uppercase tracking-widest mb-4" data-aos="fade-up" data-aos-delay="150">Embrace your potential</p>
          <a
            href="https://www.instagram.com/milemastersclub" // <-- ENLACE MODIFICADO
            target="_blank" // <-- PARA ABRIR EN NUEVA PESTAÑA
            rel="noopener noreferrer" // <-- BUENA PRÁCTICA DE SEGURIDAD
            className="border border-[#E43F7B] text-[#E43F7B] px-8 py-2 rounded-full hover:bg-[#E43F7B] hover:text-black transition transform hover:scale-105 hover:animate-pulse"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Únete ahora
          </a>
        </div>
        <div ref={sliderRef} className="keen-slider w-full h-full absolute top-0 left-0 z-0">
          <div className="keen-slider__slide number-slide1 w-full h-full">
            <img src="/hero-1.jpg" alt="Corredores en movimiento" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Merchandising */}
      <section className="bg-white text-black px-6 pt-20 pb-20" id="merchandising">
        <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight text-[#E43F7B] font-[Outfit]" data-aos="fade-up">
          Merchandising Oficial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-xl mx-auto">
          {merchandiseItems.map((item, index) => (
            <div key={index} className="flex flex-col text-left group w-full max-w-[280px]" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-4 rounded-lg bg-neutral-100">
                {/* LÍNEA CORREGIDA: item.image en lugar de ruta fija */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-semibold text-lg mb-1 leading-tight">{item.title}</h3>
              <p className="text-sm text-neutral-600 mb-2">{item.colors}</p>
              <div className="flex items-baseline">
                <span className="text-black font-bold text-base">{item.discountedPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eventos */}
      <section className="bg-white text-black px-6 pt-4 pb-20" id="events">
        <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight text-[#E43F7B] font-[Outfit]" data-aos="fade-up">
          Próximos Eventos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Sunday Boxing Run',
              date: '25 Mayo 2025',
              image: '/soldout.jpeg',
              withPayment: true,
            },
            {
              title: 'Run + Coffee Party',
              date: '15 Junio 2025',
              image: '/Coffee.jpg',
              link: 'https://cubitt.com.co/pages/cubitt-coffee-party', // <-- ENLACE AÑADIDO
            },
            {
              title: 'Running with Purpose',
              date: '22 Junio 2025',
              image: '/Purpose.jpg',
            },
            {
              title: 'Hyrox',
              date: 'Soon...',
              image: '/proximamente.png',
            },
          ].map((event, index) => (
            <div key={index} className="text-center">
              <img src={event.image} alt={event.title} className="w-full h-60 object-cover mb-4 rounded-lg" />
              <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-neutral-600 mb-2">{event.date}</p> {/* <-- MARGEN AJUSTADO */}
              {event.withPayment && (
                <div id={`mercado_pago_button_${index}`} className="hidden" />
              )}
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 border border-[#E43F7B] text-[#E43F7B] px-6 py-2 rounded-full hover:bg-[#E43F7B] hover:text-black transition transform hover:scale-105" // <-- MARGEN AJUSTADO
                >
                  Inscríbete
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section id="benefits" className="relative w-full px-6 py-32 overflow-visible">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#E43F7B] opacity-20 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-32 right-0 w-80 h-80 bg-[#E43F7B] opacity-20 rotate-45 blur-[100px] pointer-events-none z-0" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 uppercase tracking-tight text-[#E43F7B] relative z-10" style={{ textShadow: '0 0 12px rgba(228, 63, 123, 0.7)' }} data-aos="fade-up">
          ¿Por qué entrenar con nosotros?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {[
            { title: 'Entrenamientos guiados', desc: 'Corre con estructura, mejora tu rendimiento.' },
            { title: 'Comunidad motivadora', desc: 'Gente que te empuja, te reta y te aplaude.' },
            { title: 'Eventos y competencias', desc: 'Desde carreras internas hasta retos públicos.' },
            { title: 'Experiencia', desc: 'Una experiencia premium y a otro nivel.' },
          ].map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-[#111] border border-neutral-800 rounded-xl p-6 hover:border-[#E43F7B] transition">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comunidad */}
      <section id="community" className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img src="/hero-2.jpg" alt="Corredor urbano" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4" data-aos="fade-up">Entrena con propósito</h2>
          <p className="text-lg text-neutral-300" data-aos="fade-up" data-aos-delay="150">
            Construimos comunidad paso a paso,<br />
            cada domingo a las 8:30 a.m.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-[999] text-neutral-400 border-t border-neutral-800 bg-black py-16 w-full" data-aos="fade-up">
        <div className="flex justify-center gap-10 items-center mb-6">
          <a href="https://instagram.com/milemastersclub" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="Instagram">
            <FaInstagram className="text-[#E43F7B] text-2xl" />
          </a>
          <a href="https://strava.app.link/janjM7Kn4Sb" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="Strava">
            <FaStrava className="text-[#E43F7B] text-2xl" />
          </a>
          <a href="https://chat.whatsapp.com/G7qW563lzR01hYLOPNTcJo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="WhatsApp">
            <FaWhatsapp className="text-[#E43F7B] text-2xl" />
          </a>
        </div>
        <div className="text-xs text-neutral-500 tracking-wide text-center mt-4">
          <p className="block">© <span className="inline-block">2025</span> Mile Masters. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
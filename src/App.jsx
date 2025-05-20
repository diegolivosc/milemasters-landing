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
            <li><a href="#contact" className="hover:text-[#E43F7B] transition-opacity">Instagram</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight" data-aos="fade-up">Mile Masters Club</h1>
          <p className="text-lg md:text-2xl text-[#E43F7B] uppercase tracking-widest mb-4" data-aos="fade-up" data-aos-delay="150">Pursuit your limits</p>
          <a
            href="#benefits"
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

      {/* Tienda (comentada) */}
      {/*
      <section className="bg-white text-black px-6 pt-20 pb-12" id="store">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: '247 Manchester Hoodie', price: '$175', color: 'Black', image: '/247imagen.png' },
            { name: '247 London Hoodie', price: '$175', color: 'Black', image: '/247imagen.png' },
            { name: '247 Manchester T-Shirt', price: '$110', color: 'Black', image: '/247imagen.png' },
            { name: '247 London T-Shirt', price: '$110', color: 'Blue', image: '/247imagen.png' },
          ].map((product, index) => (
            <div key={index} className="text-center">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-4" />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.color}</p>
              <p className="text-md font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Eventos */}
      <section className="bg-white text-black px-6 pt-4 pb-20" id="events">
        <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight text-[#E43F7B] font-[Outfit]" data-aos="fade-up">
          Próximos Eventos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Carrera Montaña', date: '25 Mayo 2025', image: '/hielo.png' },
            { title: '10K Bogotá', date: '2 Junio 2025', image: '/hielo.png' },
            { title: 'Entreno Alto Rendimiento', date: '9 Junio 2025', image: '/hielo.png' },
            { title: 'Carrera Nocturna', date: '16 Junio 2025', image: '/hielo.png' },
          ].map((event, index) => (
            <div key={index} className="text-center">
              <img src={event.image} alt={event.title} className="w-full h-60 object-cover mb-4 rounded-lg" />
              <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-neutral-600">{event.date}</p>
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
          ¿Por qué correr con nosotros?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {[
            { title: 'Entrenamientos guiados', desc: 'Corre con estructura, mejora tu rendimiento.' },
            { title: 'Comunidad motivadora', desc: 'Gente que te empuja, te reta y te aplaude.' },
            { title: 'Eventos y competencias', desc: 'Desde carreras internas hasta retos públicos.' },
            { title: 'Totalmente gratis', desc: 'Una experiencia premium sin costo.' },
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
          <h2 className="text-4xl md:text-5xl font-medium mb-4" data-aos="fade-up">Corre con propósito</h2>
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

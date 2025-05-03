import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaInstagram, FaStrava, FaWhatsapp } from 'react-icons/fa';

export default function App() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans scroll-smooth relative">
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-neutral-800 text-sm backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="tracking-wider font-medium uppercase text-sm">Mile Masters</span>
          <ul className="flex space-x-4 md:space-x-8 text-sm">
            <li><a href="#benefits" className="hover:text-[#E43F7B] transition-opacity">Beneficios</a></li>
            <li><a href="#community" className="hover:text-[#E43F7B] transition-opacity">Comunidad</a></li>
            <li><a href="#contact" className="hover:text-[#E43F7B] transition-opacity">Instagram</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative w-screen h-screen flex items-center justify-center text-center overflow-hidden">
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
        <div ref={sliderRef} className="keen-slider w-screen h-screen absolute top-0 left-0 z-0">
          <div className="keen-slider__slide number-slide1 w-screen h-screen">
            <img
              src="/hero-1.jpg"
              alt="Corredores en movimiento"
              className="w-screen h-screen object-cover"
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="benefits" className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#E43F7B] opacity-20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-32 right-0 w-80 h-80 bg-[#E43F7B] opacity-20 rotate-45 blur-[100px] pointer-events-none z-0" />

        <h2
          className="text-4xl md:text-6xl font-bold text-center mb-20 uppercase tracking-tight text-[#E43F7B] relative z-10"
          style={{ textShadow: '0 0 12px rgba(228, 63, 123, 0.7)' }}
          data-aos="fade-up"
        >
          ¿Por qué correr con nosotros?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {[
            { title: 'Entrenamientos guiados', desc: 'Corre con estructura, mejora tu rendimiento.' },
            { title: 'Comunidad motivadora', desc: 'Gente que te empuja, te reta y te aplaude.' },
            { title: 'Eventos y competencias', desc: 'Desde carreras internas hasta retos públicos.' },
            { title: 'Totalmente gratis', desc: 'Una experiencia premium sin costo.' }
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#111] border border-neutral-800 rounded-xl p-6 hover:border-[#E43F7B] transition"
            >
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comunidad */}
      <section
        id="community"
        className="relative w-full h-[80vh] flex items-center justify-center text-center"
      >
        <img
          src="/hero-2.jpg"
          alt="Corredor urbano"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4" data-aos="fade-up">Corre con propósito</h2>
          <p className="text-lg text-neutral-300" data-aos="fade-up" data-aos-delay="150">
            Construimos comunidad paso a paso,<br />
            cada domingo a las 8:30 a.m.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-[999] text-neutral-400 border-t border-neutral-800 bg-black py-16" data-aos="fade-up">
        <div className="flex justify-center gap-10 items-center mb-6">
          <a
            href="https://instagram.com/milemastersclub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[#E43F7B] text-2xl" />
          </a>
          <a
            href="https://strava.app.link/janjM7Kn4Sb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Strava"
          >
            <FaStrava className="text-[#E43F7B] text-2xl" />
          </a>
          <a
            href="https://chat.whatsapp.com/G7qW563lzR01hYLOPNTcJo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-[#E43F7B] text-2xl" />
          </a>
        </div>
        <p className="text-xs text-neutral-500 tracking-wide text-center" data-aos="fade-up" data-aos-delay="200">
          © {new Date().getFullYear()} Mile Masters. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}

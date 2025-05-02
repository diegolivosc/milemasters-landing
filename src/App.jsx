import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function App() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
  });

  return (
    <main className="bg-black text-white min-h-screen font-neue scroll-smooth">
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-neutral-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <span className="font-semibold tracking-wide">Mile Masters</span>
          <ul className="flex space-x-6">
            <li><a href="#benefits" className="hover:text-[#E43F7B] transition">Beneficios</a></li>
            <li><a href="#location" className="hover:text-[#E43F7B] transition">Ubicación</a></li>
            <li><a href="#contact" className="hover:text-[#E43F7B] transition">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div ref={sliderRef} className="keen-slider h-full">
          <div className="keen-slider__slide number-slide1 h-full">
            <img
              src="/bogota.jpg"
              alt="Bogotá estética"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Mile Masters Club</h1>
          <p className="text-xl md:text-2xl text-[#E43F7B] font-medium uppercase tracking-wider mb-4">
            pursuit your limits
          </p>
          <a
            href="#benefits"
            className="bg-[#E43F7B] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Únete ahora
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xl font-medium text-center mb-12 text-[#E43F7B] uppercase tracking-wider">
          ¿Por qué correr con nosotros?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-gray-300 text-sm">
          <div className="border border-neutral-800 p-4 rounded-lg">Entrenamientos guiados</div>
          <div className="border border-neutral-800 p-4 rounded-lg">Comunidad motivadora</div>
          <div className="border border-neutral-800 p-4 rounded-lg">Eventos y competencias</div>
          <div className="border border-neutral-800 p-4 rounded-lg">Totalmente gratis</div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="bg-black text-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-2">📍 Bogotá D.C.</h3>
        <p className="text-lg">
          Entrenamos todos los domingos a las 8:30 a.m. <br />
          El punto de encuentro se publica cada semana en Instagram.
        </p>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-black text-white text-center py-12 border-t border-neutral-800">
        <p className="mb-2 font-semibold">📲 Síguenos en Instagram</p>
        <a
          href="https://instagram.com/milemastersclub"
          className="underline font-medium hover:text-[#E43F7B]"
          target="_blank"
          rel="noopener noreferrer"
        >
          @milemastersclub
        </a>
        <p className="text-sm mt-4 text-gray-500">
          © {new Date().getFullYear()} Mile Masters. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}

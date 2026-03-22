"use client"; // ← Adicione ESTA LINHA no topo



import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-gray-900/80 backdrop-blur-md text-white px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      
      {/* NOME */}
      <h1 className="text-lg sm:text-xl font-bold tracking-wide">
        Jessica Rodrigues
      </h1>

      {/* MENU DESKTOP */}
      <nav className="hidden md:flex gap-6 text-sm sm:text-base font-medium">
        <a href="#about" className="hover:text-gray-300 transition">Sobre</a>
        <a href="#experience" className="hover:text-gray-300 transition">Experiência</a>
        <a href="#Habilidades" className="hover:text-gray-300 transition">Habilidades</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contato</a>
      </nav>

      {/* BOTÃO MOBILE */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white transition"></span>
        <span className="block w-6 h-0.5 bg-white transition"></span>
        <span className="block w-6 h-0.5 bg-white transition"></span>
      </button>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-900/95 flex flex-col items-center py-4 md:hidden gap-4 text-sm">
          <a href="#about" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#experience" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#Habilidades" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Habilidades</a>
          <a href="#contact" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      )}

    </header>
  );
}
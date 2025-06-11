"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ícones, instale com: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">CΛVΛLIΞRE</div>

        {/* Botão menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links grandes (desktop) */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li className="hover:text-yellow-300 transition-colors duration-300">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-yellow-300 transition-colors duration-300">
            <Link href="/peito">Peito</Link>
          </li>
          <li className="hover:text-yellow-300 transition-colors duration-300">
            <Link href="/costas">Costas</Link>
          </li>
          <li className="hover:text-yellow-300 transition-colors duration-300">
            <Link href="/ombro">Ombro</Link>
          </li>
          <li className="hover:text-yellow-300 transition-colors duration-300">
            <Link href="/perna">Perna</Link>
          </li>
        </ul>

        {/* Botão de preguiça (desktop) */}
        <div className="hidden md:block">
          <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded shadow-md hover:bg-yellow-400 transition">
            <Link href="/preguica">Tá com preguiça? Clica aqui!</Link>
          </button>
        </div>
      </div>

      {/* Menu mobile (aparece quando isOpen for true) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 font-semibold">
          <Link
            href="/home"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/peito"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Peito
          </Link>
          <Link
            href="/costas"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Costas
          </Link>
          <Link
            href="/ombro"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Ombro
          </Link>
          <Link
            href="/perna"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Perna
          </Link>
          <Link
            href="/preguica"
            className="block text-yellow-300 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Tá com preguiça? Clica aqui!
          </Link>
        </div>
      )}
    </nav>
  );
}

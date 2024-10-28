import React from 'react';
import { Mail, Github, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img src="/src/assets/icon.png" alt="Logo" className="h-16 w-auto mr-3" />
          <span className="text-gray-300 text-lg">
            <a href="#" className="hover:underline">Portfolio</a> by Patthawikarn Panchuen
          </span>
        </div>
        <div className="flex flex-col text-gray-300 text-sm mt-4 md:mt-0">
          <p className="hover:underline">Follow me on social media:</p>
          <div className="flex space-x-4 mt-1">
            <a href="mailto:patthawikarn.pc@gmail.com" className="hover:text-orange-400 ml-8" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/Patthawikarn" className="hover:text-orange-400" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="tel:+66812345678" className="hover:text-orange-400" aria-label="Phone">
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

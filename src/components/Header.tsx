import React, { useState, useEffect } from 'react';
import { AgalmaLogo } from './AgalmaLogo';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { CLINIC_LOCATION } from '../data/content';

interface HeaderProps {
  onOpenBooking: (presetSectorId?: string) => void;
  onOpenPhilosophy: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenPhilosophy, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 border-b border-[#e4e2de]/60 shadow-sm'
          : 'bg-[#fbf9f5]/90 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left cursor-pointer focus:outline-none group"
          aria-label="Ir al inicio"
        >
          <AgalmaLogo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-[#4e463a]">
          <button
            onClick={onOpenPhilosophy}
            className="hover:text-[#b8975f] transition-colors cursor-pointer py-1"
          >
            Bienestar
          </button>
          <button
            onClick={() => handleNavClick('sectores')}
            className="hover:text-[#b8975f] transition-colors cursor-pointer py-1"
          >
            Sectores
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className="hover:text-[#b8975f] transition-colors cursor-pointer py-1"
          >
            Servicios
          </button>
          <button
            onClick={() => handleNavClick('contacto')}
            className="hover:text-[#b8975f] transition-colors cursor-pointer py-1"
          >
            Contacto
          </button>
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => onOpenBooking()}
            className="gold-gradient gold-gradient-hover text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-sm cursor-pointer inline-flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Cita</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => onOpenBooking()}
            className="gold-gradient text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
          >
            Cita
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1b1c1a] focus:outline-none"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-[#e4e2de] px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4 text-sm font-semibold tracking-widest uppercase text-[#1b1c1a]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhilosophy();
              }}
              className="text-left py-2 border-b border-[#e4e2de]/40 text-[#b8975f]"
            >
              Bienestar & Filosofía
            </button>
            <button
              onClick={() => handleNavClick('sectores')}
              className="text-left py-2 border-b border-[#e4e2de]/40"
            >
              Sectores de Vida
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className="text-left py-2 border-b border-[#e4e2de]/40"
            >
              Servicios Especializados
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className="text-left py-2 border-b border-[#e4e2de]/40"
            >
              Contacto & Ubicación
            </button>

            <div className="pt-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full gold-gradient text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-full text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Agendar Cita Médica
              </button>

              <a
                href={`https://wa.me/${CLINIC_LOCATION.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-[#b8975f] text-[#b8975f] text-xs font-semibold uppercase tracking-wider py-2.5 rounded-full text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

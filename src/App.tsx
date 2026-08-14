import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { ProblemSolution } from './components/ProblemSolution';
import { SectoresSection } from './components/SectoresSection';
import { EnfoqueSection } from './components/EnfoqueSection';
import { BrandDifferentials } from './components/BrandDifferentials';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RealGallery } from './components/RealGallery';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SectorDetailModal } from './components/SectorDetailModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PhilosophyModal } from './components/PhilosophyModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { SpecialtySector, ServicePillar } from './types';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [philosophyOpen, setPhilosophyOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const [selectedSector, setSelectedSector] = useState<SpecialtySector | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePillar | null>(null);

  const [presetSectorId, setPresetSectorId] = useState<string | undefined>(undefined);
  const [presetServiceId, setPresetServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (sectorId?: string, serviceId?: string) => {
    setPresetSectorId(sectorId);
    setPresetServiceId(serviceId);
    setBookingOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] font-['Montserrat',sans-serif] selection:bg-[#b8975f] selection:text-white flex flex-col">
      {/* Fixed Navigation Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenPhilosophy={() => setPhilosophyOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Page Layout - 10-Step High-Conversion E-commerce / Service Structure */}
      <main className="flex-grow">
        {/* 1. Hero / Primer Pantallazo */}
        <Hero
          onExploreSectors={() => handleNavigate('sectores')}
          onOpenPhilosophy={() => setPhilosophyOpen(true)}
        />

        {/* 2. Beneficios Rápidos / Trust Bar */}
        <QuickBenefits />

        {/* 3. Problema -> Solución */}
        <ProblemSolution
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Categorías & Sectores de Especialidad */}
        <SectoresSection
          onSelectSector={(sector) => setSelectedSector(sector)}
        />

        {/* 5. Servicios / Pilares Destacados */}
        <EnfoqueSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 6. Diferenciales de Marca */}
        <BrandDifferentials />

        {/* 7. Prueba Social / Testimonios Verificados */}
        <TestimonialsSection />

        {/* 8. UGC / Contenido Real e Instalaciones */}
        <RealGallery />

        {/* 9. Preguntas Frecuentes / Objeciones */}
        <FaqSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 10. Call To Action Final */}
        <CtaSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialSectorId={presetSectorId}
        initialServiceId={presetServiceId}
      />

      <SectorDetailModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
        onBookSector={(sectorId) => handleOpenBooking(sectorId, undefined)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => handleOpenBooking(undefined, serviceId)}
      />

      <PhilosophyModal
        isOpen={philosophyOpen}
        onClose={() => setPhilosophyOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Direct Contact Button */}
      <FloatingWhatsapp />
    </div>
  );
}

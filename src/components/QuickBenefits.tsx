import React from 'react';
import { ShieldCheck, Clock, Stethoscope, Sparkles, CalendarCheck } from 'lucide-react';

export const QuickBenefits: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Profesionales Matriculados',
      subtitle: 'Kinesiología, Osteopatía y MTC'
    },
    {
      icon: Clock,
      title: 'Atención 1 a 1 Sin Demoras',
      subtitle: '60 min dedicados a vos'
    },
    {
      icon: Stethoscope,
      title: 'Diagnóstico 360°',
      subtitle: 'Evaluación de causa raíz'
    },
    {
      icon: Sparkles,
      title: 'Tratamiento Integrativo',
      subtitle: 'Sin parches farmacológicos'
    },
    {
      icon: CalendarCheck,
      title: 'Reserva Directa Online',
      subtitle: 'Elegí día y hora en 1 min'
    }
  ];

  return (
    <section className="bg-white border-y border-[#e4e2de] py-6 sm:py-8 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 text-center">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 hover:bg-[#fbf9f5]"
              >
                <div className="w-10 h-10 rounded-full bg-[#b8975f]/10 text-[#755a28] flex items-center justify-center mb-2.5">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#1b1c1a] font-['Montserrat'] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#635848] font-medium font-['Montserrat'] mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

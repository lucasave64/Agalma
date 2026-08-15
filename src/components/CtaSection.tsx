import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { CLINIC_LOCATION, BOOKING_URL } from '../data/content';

export const CtaSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 sm:py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1b1c1a] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-[#b8975f]/30"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#b8975f]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b8975f]/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Reassurance Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#e8d2a6] text-xs font-semibold uppercase tracking-widest mb-6 relative z-10">
            <CheckCircle2 className="w-4 h-4 text-[#b8975f]" />
            <span>Reserva Inmediata • Sin Esperas</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 font-['Montserrat'] relative z-10">
            Redefiní tu vitalidad. <br className="hidden sm:inline" />
            Elegí moverte sin dolor.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-[#e4e2de] font-normal leading-relaxed max-w-2xl mx-auto mb-10 font-['Montserrat'] relative z-10">
            Agendá hoy tu evaluación integral 360° en nuestras instalaciones de primer nivel en Cuenca.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto gold-gradient gold-gradient-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-full shadow-xl cursor-pointer inline-flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita Médica</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_LOCATION.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/60 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Reassurance Micro-trust Bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#e4e2de]/80 font-['Montserrat'] relative z-10">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b8975f]" />
              <span>Profesionales Matriculados</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#b8975f]" />
              <span>Sesiones Individuales de 60 min</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b8975f]" />
              <span>Reprogramación Flexible</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};



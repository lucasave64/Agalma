import React from 'react';
import { motion } from 'motion/react';
import { Activity, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenBooking: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#f4efe6] relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#b8975f]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-[#b8975f]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8975f]/15 text-[#755a28] text-xs font-semibold uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Transformá tu Calidad de Vida</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1b1c1a] tracking-tight leading-tight font-['Montserrat']">
            ¿Llevás tiempo conviviendo con molestias que frenan tu potencial?
          </h2>
        </motion.div>

        {/* Problem vs Solution Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card: El Problema Habitual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-red-950/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-800/80 block">El Enfoque Convencional</span>
                  <h3 className="text-lg font-bold text-[#1b1c1a] font-['Montserrat']">Soluciones Temporales</h3>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#4e463a] font-medium font-['Montserrat']">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>Analgésicos y parches:</strong> Calman el dolor de forma momentánea sin sanar el origen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>Sesiones apresuradas:</strong> Múltiples pacientes atendidos en simultáneo sin foco exclusivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>Recaídas continuas:</strong> El síntoma vuelve al retomar tu actividad deportiva o laboral.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>Pérdida de autonomía:</strong> Sensación de frustración y miedo a volver a lesionarte.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card: La Solución AGALMA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1b1c1a] rounded-2xl p-6 sm:p-8 border border-[#b8975f]/40 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8975f]/20 blur-[50px] rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl gold-gradient text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e8d2a6] block">La Experiencia AGALMA</span>
                  <h3 className="text-lg font-bold text-white font-['Montserrat']">Salud & Longevidad 360°</h3>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#e4e2de] font-medium font-['Montserrat'] relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-[#b8975f] font-bold mt-0.5">✓</span>
                  <span><strong>Causa Raíz Terapéutica:</strong> Combinamos Kinesiología, Osteopatía y Medicina Tradicional China.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b8975f] font-bold mt-0.5">✓</span>
                  <span><strong>Atención 100% Exclusiva:</strong> 60 minutos dedicados íntegramente a tu diagnóstico y evolución.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b8975f] font-bold mt-0.5">✓</span>
                  <span><strong>Evolución Sostenible:</strong> Repará tejidos, fortalecé cadenas musculares y prevení futuros bloqueos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b8975f] font-bold mt-0.5">✓</span>
                  <span><strong>Bienestar de Alto Rendimiento:</strong> Mantené movilidad activa y energía vital en cada etapa de tu vida.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full gold-gradient gold-gradient-hover text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Agendar mi Evaluación Integral</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Calendar } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿Cómo es la primera sesión y evaluación inicial en AGALMA?',
      answer: 'En tu primera consulta realizamos una anamnesis exhaustiva de 60 minutos. Evaluamos tus patrones de movimiento, postura, postura articular y antecedentes biomecánicos. A partir de allí combinamos la técnica kinésica, osteopática o de MTC más efectiva para tu caso e iniciamos el tratamiento inmediatamente.'
    },
    {
      question: '¿Necesito una orden médica previa para atenderme?',
      answer: 'No es estrictamente necesaria. Nuestros profesionales matriculados realizan una evaluación kinésica e integral autónoma. Si contás con estudios previos (resonancias, radiografías, ecografías), te recomendamos traerlos a la primera consulta.'
    },
    {
      question: '¿Atienden por obras sociales o medicina prepaga?',
      answer: 'Trabajamos principalmente de forma particular para garantizar 60 minutos de atención exclusiva e individual por paciente. Emitimos factura profesional para que puedas gestionar el reintegro en tu obra social o prepaga si tu plan lo contempla.'
    },
    {
      question: '¿Cuánto dura cada sesión y cuántas voy a necesitar?',
      answer: 'Cada sesión dura 60 minutos de dedicación 100% individual. El número de sesiones varía según la cronicidad de la dolencia, pero la mayoría de nuestros pacientes experimenta un alivio significativo y mayor movilidad desde las primeras 2 a 3 consultas.'
    },
    {
      question: '¿Qué debo llevar o vestir para mi cita?',
      answer: 'Te sugerimos venir con ropa cómoda y holgada (deportiva o flexible) que permita evaluar libremente la movilidad articular. Si tenés estudios médicos recientes del área afectada, podés traerlos.'
    },
    {
      question: '¿Cómo puedo cancelar o reprogramar un turno?',
      answer: 'Podés reprogramar o cancelar tu turno fácilmente hasta 24 horas antes a través de nuestro sistema de reservas online o enviándonos un mensaje directo por WhatsApp.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#f4efe6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#b8975f]/15 text-[#755a28] text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuesta a tus Dudas</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1b1c1a] tracking-tight leading-tight font-['Montserrat'] mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs sm:text-sm text-[#4e463a] font-medium font-['Montserrat']">
            Resolvemos las objeciones y consultas más comunes antes de agendar tu turno.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-[#e4e2de] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1b1c1a] font-['Montserrat'] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#fbf9f5] border border-[#e4e2de] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#b8975f] text-white border-[#b8975f]' : 'text-[#755a28]'}`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4e463a] font-medium leading-relaxed font-['Montserrat'] border-t border-[#f4efe6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct booking CTA box below FAQ */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#b8975f]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#1b1c1a] font-['Montserrat']">
              ¿Tenés otra duda sobre tu caso particular?
            </h4>
            <p className="text-xs text-[#635848] font-medium font-['Montserrat'] mt-0.5">
              Agendá tu primera cita o consultanos directamente sin compromiso.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient gold-gradient-hover text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full shadow-md cursor-pointer shrink-0 inline-flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Cita</span>
          </a>
        </div>

      </div>
    </section>
  );
};

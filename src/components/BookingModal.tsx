import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { SPECIALTY_SECTORS, SERVICE_PILLARS, CLINIC_LOCATION } from '../data/content';
import { AppointmentBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSectorId?: string;
  initialServiceId?: string;
}

const AVAILABLE_SLOTS = [
  '08:30', '09:45', '11:00', '12:15', '14:30', '15:45', '17:00', '18:15'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSectorId,
  initialServiceId
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    initialSectorId || initialServiceId || SPECIALTY_SECTORS[0].id
  );
  
  // Tomorrow's date default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [bookingData, setBookingData] = useState<AppointmentBooking>({
    sectorId: selectedSpecialty,
    date: defaultDateStr,
    time: '10:00',
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    notes: '',
  });

  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking & { bookingRef: string } | null>(null);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Confirm booking
      const refCode = `AGM-${Math.floor(1000 + Math.random() * 9000)}`;
      const finalBooking = {
        ...bookingData,
        sectorId: selectedSpecialty,
        bookingRef: refCode
      };
      setConfirmedBooking(finalBooking);
      setStep(3);
    }
  };

  const selectedSectorObj = SPECIALTY_SECTORS.find(s => s.id === selectedSpecialty);
  const selectedServiceObj = SERVICE_PILLARS.find(s => s.id === selectedSpecialty);
  const specialtyTitle = selectedSectorObj?.title || selectedServiceObj?.title || 'Consulta Integrativa Agalma';

  const generateWhatsAppMessage = () => {
    if (!confirmedBooking) return '#';
    const text = encodeURIComponent(
      `Hola Clínica AGALMA! Deseo confirmar mi cita médica.\n\n` +
      `📌 *Código de Cita:* ${confirmedBooking.bookingRef}\n` +
      `👤 *Paciente:* ${confirmedBooking.patientName}\n` +
      `🩺 *Especialidad:* ${specialtyTitle}\n` +
      `📅 *Fecha:* ${confirmedBooking.date}\n` +
      `⏰ *Hora:* ${confirmedBooking.time}\n\n` +
      `Quedo atento a la confirmación de la recepción. Gracias!`
    );
    return `https://wa.me/${CLINIC_LOCATION.phoneRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-[#e4e2de] overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 bg-[#FEFEFE] border-b border-[#e4e2de] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8975f]">
              AGALMA VITALIDAD &bull; CUENCA
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1b1c1a] font-['Montserrat'] mt-0.5">
              {step === 3 ? '¡Cita Registrada!' : 'Agendar Consulta Integral'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#fbf9f5] border border-[#d1c5b5]/50 flex items-center justify-center text-[#1b1c1a] hover:bg-[#b8975f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Steps Indicator */}
        {step < 3 && (
          <div className="bg-[#f5f3ef] px-8 py-3 border-b border-[#e4e2de] flex items-center justify-between text-xs font-semibold text-[#7f7668]">
            <div className={`flex items-center gap-2 ${step === 1 ? 'text-[#b8975f]' : 'text-[#1b1c1a]'}`}>
              <span className="w-5 h-5 rounded-full bg-[#b8975f] text-white flex items-center justify-center text-[10px]">1</span>
              <span>Especialidad & Horario</span>
            </div>
            <ChevronRight className="w-4 h-4" />
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-[#b8975f]' : 'text-[#7f7668]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-[#b8975f] text-white' : 'bg-[#e4e2de] text-[#7f7668]'}`}>2</span>
              <span>Datos del Paciente</span>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-8">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              {/* Specialty Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-3">
                  Selecciona la Especialidad o Estilo de Vida:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                  {SPECIALTY_SECTORS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSpecialty(s.id)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                        selectedSpecialty === s.id
                          ? 'bg-[#FEFEFE] border-[#b8975f] text-[#1b1c1a] shadow-sm ring-2 ring-[#b8975f]/20'
                          : 'bg-white/60 border-[#e4e2de] text-[#4e463a] hover:border-[#b8975f]/50'
                      }`}
                    >
                      <span className="font-bold">{s.title}</span>
                      {selectedSpecialty === s.id && <CheckCircle2 className="w-4 h-4 text-[#b8975f] shrink-0" />}
                    </button>
                  ))}
                  {SERVICE_PILLARS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedSpecialty(p.id)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                        selectedSpecialty === p.id
                          ? 'bg-[#FEFEFE] border-[#b8975f] text-[#1b1c1a] shadow-sm ring-2 ring-[#b8975f]/20'
                          : 'bg-white/60 border-[#e4e2de] text-[#4e463a] hover:border-[#b8975f]/50'
                      }`}
                    >
                      <span className="font-bold">{p.title}</span>
                      {selectedSpecialty === p.id && <CheckCircle2 className="w-4 h-4 text-[#b8975f] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-2 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#b8975f]" />
                  <span>Fecha de la Cita:</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-[#e4e2de] text-sm text-[#1b1c1a] focus:outline-none focus:border-[#b8975f]"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#b8975f]" />
                  <span>Hora Disponible:</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_SLOTS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setBookingData({ ...bookingData, time })}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        bookingData.time === time
                          ? 'gold-gradient text-white shadow-sm'
                          : 'bg-white border border-[#e4e2de] text-[#4e463a] hover:border-[#b8975f]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full gold-gradient gold-gradient-hover text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-full shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Continuar a Datos del Paciente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="p-4 rounded-xl bg-[#f5f3ef] border border-[#e4e2de] text-xs space-y-1">
                <p className="font-bold text-[#1b1c1a]">Resumen de Selección:</p>
                <p className="text-[#4e463a]">&bull; {specialtyTitle}</p>
                <p className="text-[#4e463a]">&bull; Fecha: <span className="font-semibold text-[#1b1c1a]">{bookingData.date}</span> a las <span className="font-semibold text-[#1b1c1a]">{bookingData.time}</span></p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-1.5 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#b8975f]" />
                  <span>Nombre y Apellido *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María Elena Torres"
                  value={bookingData.patientName}
                  onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-[#e4e2de] text-sm text-[#1b1c1a] focus:outline-none focus:border-[#b8975f]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-1.5 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#b8975f]" />
                    <span>WhatsApp / Teléfono *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+593 99 123 4567"
                    value={bookingData.patientPhone}
                    onChange={(e) => setBookingData({ ...bookingData, patientPhone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-[#e4e2de] text-sm text-[#1b1c1a] focus:outline-none focus:border-[#b8975f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-1.5 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#b8975f]" />
                    <span>Correo Electrónico *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="paciente@ejemplo.com"
                    value={bookingData.patientEmail}
                    onChange={(e) => setBookingData({ ...bookingData, patientEmail: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-[#e4e2de] text-sm text-[#1b1c1a] focus:outline-none focus:border-[#b8975f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1c1a] mb-1.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#b8975f]" />
                  <span>Motivo de Consulta / Síntomas principales (Opcional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej. Dolor cervical por postura de oficina, fascitis plantar post entrenamiento..."
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-[#e4e2de] text-sm text-[#1b1c1a] focus:outline-none focus:border-[#b8975f]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-full border border-[#d1c5b5] text-xs font-bold uppercase tracking-wider text-[#1b1c1a] hover:bg-white"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className="w-2/3 gold-gradient gold-gradient-hover text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-full shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirmar Reservación</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && confirmedBooking && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#b8975f]/15 border-2 border-[#b8975f] flex items-center justify-center mx-auto text-[#b8975f]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8975f] block">
                  CÓDIGO DE CITA:
                </span>
                <span className="text-3xl font-black text-[#1b1c1a] tracking-widest font-mono">
                  {confirmedBooking.bookingRef}
                </span>
              </div>

              <div className="bg-[#FEFEFE] p-6 rounded-2xl border border-[#e4e2de] text-left text-xs space-y-2 atmospheric-shadow">
                <p><strong className="text-[#1b1c1a]">Paciente:</strong> {confirmedBooking.patientName}</p>
                <p><strong className="text-[#1b1c1a]">Especialidad:</strong> {specialtyTitle}</p>
                <p><strong className="text-[#1b1c1a]">Fecha & Hora:</strong> {confirmedBooking.date} a las {confirmedBooking.time}</p>
                <p><strong className="text-[#1b1c1a]">Ubicación:</strong> {CLINIC_LOCATION.address}, {CLINIC_LOCATION.city}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-full border border-[#d1c5b5] text-xs font-bold uppercase tracking-wider text-[#1b1c1a] hover:bg-white cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

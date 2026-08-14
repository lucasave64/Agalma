import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CLINIC_LOCATION } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-[#e4e2de] overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 bg-[#FEFEFE] border-b border-[#e4e2de] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8975f]">
              DOCUMENTACIÓN LEGAL &bull; CLINICA AGALMA
            </span>
            <h2 className="text-xl font-black text-[#1b1c1a] font-['Montserrat'] mt-0.5">
              {isPrivacy ? 'Política de Privacidad y Protección de Datos' : 'Términos y Condiciones del Servicio'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#fbf9f5] border border-[#d1c5b5]/50 flex items-center justify-center text-[#1b1c1a] hover:bg-[#b8975f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 space-y-4 text-xs text-[#4e463a] leading-relaxed max-h-[60vh] overflow-y-auto font-['Montserrat']">
          {isPrivacy ? (
            <>
              <p>
                En <strong className="text-[#1b1c1a]">Clínica Integrativa AGALMA</strong> (Cuenca, Ecuador), protegemos la confidencialidad de la información de salud y personal de nuestros pacientes con los más altos estándares éticos y médicos.
              </p>
              <h4 className="font-bold text-[#1b1c1a] uppercase tracking-wider text-[11px] pt-2">1. Recolección de Datos Clínicos</h4>
              <p>
                Los datos solicitados al agendar citas (nombre, teléfono, correo, síntomas) son utilizados exclusivamente para la gestión de su historia clínica, confirmación de horarios vía WhatsApp o correo electrónico y atención personalizada en nuestras instalaciones de Av. Doce de Octubre 1-75.
              </p>
              <h4 className="font-bold text-[#1b1c1a] uppercase tracking-wider text-[11px] pt-2">2. Secretos Profesionales</h4>
              <p>
                Toda la información médica recopilada durante las sesiones de Kinesiología, Osteopatía y Medicina Tradicional China está protegida por el secreto profesional médico conforme a la legislación ecuatoriana aplicable.
              </p>
              <h4 className="font-bold text-[#1b1c1a] uppercase tracking-wider text-[11px] pt-2">3. Derechos del Paciente</h4>
              <p>
                Usted puede solicitar en cualquier momento el acceso, rectificación o cancelación de sus datos de contacto comunicándose a <span className="font-semibold text-[#1b1c1a]">{CLINIC_LOCATION.email}</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                Bienvenido a <strong className="text-[#1b1c1a]">Clínica Integrativa AGALMA</strong>. Al programar o asistir a una consulta en nuestras instalaciones, usted acepta las siguientes normas de servicio:
              </p>
              <h4 className="font-bold text-[#1b1c1a] uppercase tracking-wider text-[11px] pt-2">1. Puntualidad y Cancelación de Citas</h4>
              <p>
                Agradecemos llegar 10 minutos antes de la hora agendada. Para reprogramar o cancelar una sesión sin costo, rogamos notificar a recepción con al menos 24 horas de anticipación.
              </p>
              <h4 className="font-bold text-[#1b1c1a] uppercase tracking-wider text-[11px] pt-2">2. Evaluación Médica Previa</h4>
              <p>
                Todas las terapias físicas y energéticas son precedidas por una valoración biomecánica individualizada para garantizar su seguridad y adecuar el plan de tratamiento.
              </p>
              <h4 className="font-bold text-[#1b1c1a] uppercase tracking-wider text-[11px] pt-2">3. Pagos y Métodos de Facturación</h4>
              <p>
                Aceptamos transferencias bancarias locales, tarjetas de crédito/débito y efectivo en recepción. Las facturas son enviadas electrónicamente a su correo registrado.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FEFEFE] border-t border-[#e4e2de] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full gold-gradient text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

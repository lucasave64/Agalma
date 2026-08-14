import React from 'react';
import { AgalmaLogo } from './AgalmaLogo';
import { Share2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CLINIC_LOCATION } from '../data/content';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenBooking: () => void;
}

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenBooking }) => {
  return (
    <footer id="contacto" className="bg-[#fbf9f5] border-t border-[#e4e2de] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e4e2de]">
          
          {/* Brand & Description */}
          <div className="md:col-span-4 space-y-4">
            <AgalmaLogo />
            <p className="text-xs sm:text-sm text-[#4e463a] font-normal leading-relaxed max-w-sm font-['Montserrat']">
              Clínica <strong className="font-extrabold text-[#1b1c1a]">AGALMA</strong>: Excelencia postural y restauración vital integrativa en el corazón de Cuenca.
            </p>

            {/* Social Networks Section */}
            <div className="pt-2 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat']">
                Síguenos en nuestras redes sociales
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={CLINIC_LOCATION.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#1b1c1a] text-white hover:bg-[#b8975f] transition-all duration-300 shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#e8d2a6]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CLINIC_LOCATION.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#1b1c1a] text-white hover:bg-[#b8975f] transition-all duration-300 shadow-sm"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#e8d2a6]" />
                  <span>Facebook</span>
                </a>
                <a
                  href={CLINIC_LOCATION.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#25D366] text-white hover:bg-[#1faa52] transition-all duration-300 shadow-sm"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Extra Utility Icons */}
            <div className="flex items-center space-x-3 pt-1 text-[#7f7668]">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'AGALMA | Vitalidad en Movimiento',
                      text: 'Clínica Integrativa de Kinesiología y Osteopatía en Cuenca',
                      url: window.location.href,
                    }).catch(() => {});
                  }
                }}
                className="w-7 h-7 rounded-full border border-[#d1c5b5] flex items-center justify-center hover:text-[#b8975f] hover:border-[#b8975f] transition-colors cursor-pointer"
                title="Compartir página"
                aria-label="Compartir"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <a
                href={`mailto:${CLINIC_LOCATION.email}`}
                className="w-7 h-7 rounded-full border border-[#d1c5b5] flex items-center justify-center hover:text-[#b8975f] hover:border-[#b8975f] transition-colors"
                title="Enviar correo"
                aria-label="Correo electrónico"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Details & Navigation */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat'] mb-2">
                Contacto Directo
              </h4>
              <div className="space-y-2 text-xs text-[#4e463a] font-['Montserrat']">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#b8975f] shrink-0" />
                  <span>Teléfono: <a href={`https://wa.me/${CLINIC_LOCATION.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8975f] font-semibold transition-colors">{CLINIC_LOCATION.phone}</a></span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#b8975f] shrink-0 mt-0.5" />
                  <span><strong>Ubicación:</strong><br />{CLINIC_LOCATION.address}<br />{CLINIC_LOCATION.city}</span>
                </p>
                <p className="text-[11px] text-[#7f7668] pt-1">
                  {CLINIC_LOCATION.hours}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e4e2de]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat'] mb-2">
                Navegación
              </h4>
              <ul className="space-y-1.5 text-xs text-[#4e463a] font-['Montserrat']">
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="hover:text-[#b8975f] transition-colors text-left cursor-pointer"
                  >
                    Política de Privacidad
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenTerms}
                    className="hover:text-[#b8975f] transition-colors text-left cursor-pointer"
                  >
                    Términos de Servicio
                  </button>
                </li>
                <li className="pt-1">
                  <button
                    onClick={onOpenBooking}
                    className="text-[#b8975f] font-semibold hover:underline text-left cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Agendar Cita en Línea</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Maps Minimap Section */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat'] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#b8975f]" />
                <span>Ubicación en Cuenca</span>
              </h4>
              <a
                href={CLINIC_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#b8975f] hover:underline inline-flex items-center gap-1"
              >
                <span>Abrir en Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Minimapa Box */}
            <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#d1c5b5] shadow-md bg-[#eee] relative group">
              <iframe
                src={CLINIC_LOCATION.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Minimapa de Ubicación AGALMA"
                className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#e4e2de] text-[10px] font-semibold text-[#1b1c1a] shadow-sm flex items-center gap-1.5 pointer-events-none">
                <MapPin className="w-3 h-3 text-[#b8975f]" />
                <span>{CLINIC_LOCATION.address}, {CLINIC_LOCATION.city}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7f7668] font-['Montserrat']">
          <p>&copy; {new Date().getFullYear()} Clínica Integrativa AGALMA. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Cuenca, Ecuador &bull; Excelencia en Salud & Longevidad</p>
        </div>
      </div>
    </footer>
  );
};

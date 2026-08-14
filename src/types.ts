export interface SpecialtySector {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  colSpanDesktop?: string;
  longDescription: string;
  benefits: string[];
  recommendedTreatments: string[];
  commonIssues: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: 'shield' | 'activity' | 'link' | 'heart' | 'sparkles' | 'compass';
  longDescription: string;
  techniques: string[];
  benefits: string[];
  sessionDuration: string;
}

export interface AppointmentBooking {
  sectorId?: string;
  pillarId?: string;
  date: string;
  time: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  notes: string;
  bookingRef?: string;
}

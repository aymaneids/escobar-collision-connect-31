
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key: string]: {
    en: string;
    es: string;
  };
};

// Common translations used across multiple pages
export const translations: Translations = {
  // Navigation
  home: {
    en: 'Home',
    es: 'Inicio'
  },
  about: {
    en: 'About Us',
    es: 'Nosotros'
  },
  services: {
    en: 'Services',
    es: 'Servicios'
  },
  gallery: {
    en: 'Gallery',
    es: 'Galería'
  },
  contact: {
    en: 'Contact',
    es: 'Contacto'
  },
  // Hero
  heroTitle: {
    en: 'Expert Collision Repair',
    es: 'Expertos en Reparación de Colisiones'
  },
  heroSubtitle: {
    en: 'Your Trusted Auto Body Shop - Insurance Approved & Free Estimates',
    es: 'Su Taller de Confianza - Aprobado por Seguros y Presupuestos Gratuitos'
  },
  getEstimate: {
    en: 'Get a Free Estimate',
    es: 'Obtener Presupuesto Gratis'
  },
  learnMore: {
    en: 'Learn More About Us',
    es: 'Conozca Más Sobre Nosotros'
  },
  // Services
  serviceTitle: {
    en: 'Our Services',
    es: 'Nuestros Servicios'
  },
  collisionRepair: {
    en: 'Collision Repair',
    es: 'Reparación de Colisiones'
  },
  collisionRepairDesc: {
    en: 'Expert collision repair for all vehicle makes and models',
    es: 'Reparación experta de colisiones para todas las marcas y modelos'
  },
  paintlessDent: {
    en: 'Paintless Dent Removal',
    es: 'Remoción de Abolladuras sin Pintura'
  },
  paintlessDentDesc: {
    en: 'Remove dents without damaging your vehicle\'s paint',
    es: 'Eliminamos abolladuras sin dañar la pintura de su vehículo'
  },
  frameStraightening: {
    en: 'Frame Straightening',
    es: 'Enderezado de Chasis'
  },
  frameStraighteningDesc: {
    en: 'Precise frame alignment and straightening services',
    es: 'Servicios precisos de alineación y enderezado de chasis'
  },
  autoPainting: {
    en: 'Auto Painting',
    es: 'Pintura Automotriz'
  },
  autoPaintingDesc: {
    en: 'Professional painting with color matching technology',
    es: 'Pintura profesional con tecnología de coincidencia de color'
  },
  // About
  aboutSectionTitle: {
    en: 'About Escobar Auto Collision',
    es: 'Sobre Escobar Auto Collision'
  },
  aboutSectionText: {
    en: 'With years of experience in collision repair, our team delivers exceptional quality and customer service. We work with all insurance companies and guarantee our work.',
    es: 'Con años de experiencia en reparación de colisiones, nuestro equipo ofrece calidad excepcional y servicio al cliente. Trabajamos con todas las compañías de seguros y garantizamos nuestro trabajo.'
  },
  // Testimonials
  testimonialTitle: {
    en: 'What Our Customers Say',
    es: 'Lo Que Dicen Nuestros Clientes'
  },
  // Contact
  contactUs: {
    en: 'Contact Us',
    es: 'Contáctenos'
  },
  address: {
    en: 'Address',
    es: 'Dirección'
  },
  phone: {
    en: 'Phone',
    es: 'Teléfono'
  },
  email: {
    en: 'Email',
    es: 'Correo Electrónico'
  },
  businessHours: {
    en: 'Business Hours',
    es: 'Horario de Atención'
  },
  mondayToSaturday: {
    en: 'Monday - Saturday',
    es: 'Lunes - Sábado'
  },
  sunday: {
    en: 'Sunday',
    es: 'Domingo'
  },
  closed: {
    en: 'CLOSED',
    es: 'CERRADO'
  },
  // Contact Form
  name: {
    en: 'Name',
    es: 'Nombre'
  },
  yourEmail: {
    en: 'Your Email',
    es: 'Su Correo Electrónico'
  },
  yourPhone: {
    en: 'Your Phone',
    es: 'Su Teléfono'
  },
  vehicleInfo: {
    en: 'Vehicle Information',
    es: 'Información del Vehículo'
  },
  damageDescription: {
    en: 'Damage Description',
    es: 'Descripción del Daño'
  },
  submit: {
    en: 'Submit',
    es: 'Enviar'
  },
  // Common
  weSpeak: {
    en: 'We Speak Spanish',
    es: 'Hablamos Español'
  },
  insuranceApproved: {
    en: 'Insurance Approved',
    es: 'Aprobado Por Seguros'
  },
  freeEstimates: {
    en: 'Free Estimates',
    es: 'Presupuestos Gratuitos'
  },
  qualityGuaranteed: {
    en: 'Quality Guaranteed',
    es: 'Calidad Garantizada'
  },
  beforeAfter: {
    en: 'Before & After',
    es: 'Antes y Después'
  },
  viewMore: {
    en: 'View More',
    es: 'Ver Más'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

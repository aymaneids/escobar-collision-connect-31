import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Car, Hammer, Ruler, PaintBucket, Wrench, FileCheck, Clock } from 'lucide-react';

const Services = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-escobar-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              {t('services')}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'en'
                ? 'We offer a comprehensive range of auto body repair services to restore your vehicle to its pre-accident condition.'
                : 'Ofrecemos una amplia gama de servicios de reparación de carrocería para restaurar su vehículo a su condición previa al accidente.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Collision Repair */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                  <Car size={32} />
                </div>
                <h2 className="text-2xl font-montserrat font-bold text-escobar-navy">{t('collisionRepair')}</h2>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1621800043295-a73a0a47a65b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Collision Repair" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Our collision repair services are designed to restore your vehicle to its pre-accident condition, both structurally and aesthetically. We use state-of-the-art equipment and techniques to ensure precise repairs.'
                  : 'Nuestros servicios de reparación de colisiones están diseñados para restaurar su vehículo a su condición previa al accidente, tanto estructural como estéticamente. Utilizamos equipos y técnicas de última generación para garantizar reparaciones precisas.'}
              </p>
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Our comprehensive collision repair process includes:'
                  : 'Nuestro completo proceso de reparación de colisiones incluye:'}
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>
                  {language === 'en'
                    ? 'Detailed damage assessment and documentation'
                    : 'Evaluación detallada de daños y documentación'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Insurance claim assistance and coordination'
                    : 'Asistencia y coordinación de reclamos de seguros'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Structural repairs and frame straightening'
                    : 'Reparaciones estructurales y enderezado de bastidor'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Panel replacement and repair'
                    : 'Reemplazo y reparación de paneles'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Expert color matching and painting'
                    : 'Experta coincidencia de color y pintura'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Quality control inspection'
                    : 'Inspección de control de calidad'}
                </li>
              </ul>
            </div>
            
            {/* Paintless Dent Removal */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                  <Hammer size={32} />
                </div>
                <h2 className="text-2xl font-montserrat font-bold text-escobar-navy">{t('paintlessDent')}</h2>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Paintless Dent Removal" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Paintless Dent Removal (PDR) is a specialized technique that allows us to remove minor dents and dings without affecting your vehicle\'s factory paint. This process is more affordable and faster than traditional dent repair.'
                  : 'La Remoción de Abolladuras sin Pintura (PDR) es una técnica especializada que nos permite eliminar abolladuras y golpes menores sin afectar la pintura de fábrica de su vehículo. Este proceso es más asequible y rápido que la reparación tradicional de abolladuras.'}
              </p>
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Benefits of Paintless Dent Removal:'
                  : 'Beneficios de la Remoción de Abolladuras sin Pintura:'}
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>
                  {language === 'en'
                    ? 'Preserves your vehicle\'s original factory finish'
                    : 'Preserva el acabado original de fábrica de su vehículo'}
                </li>
                <li>
                  {language === 'en'
                    ? 'More cost-effective than traditional repair methods'
                    : 'Más rentable que los métodos de reparación tradicionales'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Faster turnaround time'
                    : 'Tiempo de entrega más rápido'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Environmentally friendly (no fillers or paints used)'
                    : 'Ecológico (no se utilizan rellenos ni pinturas)'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Maintains your vehicle\'s value'
                    : 'Mantiene el valor de su vehículo'}
                </li>
              </ul>
            </div>
            
            {/* Frame Straightening */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                  <Ruler size={32} />
                </div>
                <h2 className="text-2xl font-montserrat font-bold text-escobar-navy">{t('frameStraightening')}</h2>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1629385664266-8dbf6b029407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Frame Straightening" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'After a significant collision, your vehicle\'s frame may be bent or misaligned. Our advanced frame straightening equipment and skilled technicians can restore your vehicle\'s structural integrity.'
                  : 'Después de una colisión significativa, el bastidor de su vehículo puede estar doblado o desalineado. Nuestro equipo avanzado de enderezado de bastidor y técnicos calificados pueden restaurar la integridad estructural de su vehículo.'}
              </p>
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Our frame straightening process includes:'
                  : 'Nuestro proceso de enderezado de bastidor incluye:'}
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>
                  {language === 'en'
                    ? 'Computerized measuring and analysis of frame damage'
                    : 'Medición computarizada y análisis de daños del bastidor'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Precision straightening using hydraulic equipment'
                    : 'Enderezado de precisión usando equipo hidráulico'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Post-repair alignment and structural integrity verification'
                    : 'Alineación posterior a la reparación y verificación de integridad estructural'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Safety checks to ensure your vehicle is roadworthy'
                    : 'Controles de seguridad para garantizar que su vehículo sea apto para circular'}
                </li>
              </ul>
            </div>
            
            {/* Auto Painting */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                  <PaintBucket size={32} />
                </div>
                <h2 className="text-2xl font-montserrat font-bold text-escobar-navy">{t('autoPainting')}</h2>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1617816751880-e2a78a174b4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Auto Painting" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Our professional auto painting services use advanced color-matching technology to perfectly match your vehicle\'s factory finish. We provide both full vehicle painting and spot repair for damaged areas.'
                  : 'Nuestros servicios profesionales de pintura automotriz utilizan tecnología avanzada de coincidencia de color para igualar perfectamente el acabado de fábrica de su vehículo. Ofrecemos tanto pintura completa del vehículo como reparación puntual para áreas dañadas.'}
              </p>
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Our painting process includes:'
                  : 'Nuestro proceso de pintura incluye:'}
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>
                  {language === 'en'
                    ? 'Surface preparation and cleaning'
                    : 'Preparación y limpieza de superficies'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Computerized color matching'
                    : 'Coincidencia de color computarizada'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Application of primer, base coat, and clear coat'
                    : 'Aplicación de imprimación, capa base y capa transparente'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Buffing and polishing for a seamless finish'
                    : 'Pulido y abrillantado para un acabado impecable'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Quality control inspection'
                    : 'Inspección de control de calidad'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-4">
              {language === 'en' ? 'Additional Services' : 'Servicios Adicionales'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Beyond our main services, we offer a variety of additional auto body repair options to meet all your needs.'
                : 'Más allá de nuestros servicios principales, ofrecemos una variedad de opciones adicionales de reparación de carrocería para satisfacer todas sus necesidades.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Bumper Repair' : 'Reparación de Parachoques'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Expert repair and replacement of damaged bumpers, whether plastic or metal, to restore both appearance and safety features.'
                  : 'Reparación y reemplazo experto de parachoques dañados, ya sean de plástico o metal, para restaurar tanto la apariencia como las características de seguridad.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Glass Replacement' : 'Reemplazo de Vidrios'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Windshield and auto glass replacement services using OEM-quality glass and proper installation techniques.'
                  : 'Servicios de reemplazo de parabrisas y vidrios de automóviles utilizando vidrio de calidad OEM y técnicas de instalación adecuadas.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                <FileCheck size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Insurance Claims' : 'Reclamos de Seguros'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We work directly with all major insurance companies to simplify the claims process and ensure a smooth repair experience.'
                  : 'Trabajamos directamente con todas las principales compañías de seguros para simplificar el proceso de reclamos y garantizar una experiencia de reparación sin problemas.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Express Repair' : 'Reparación Rápida'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Fast turnaround options for minor repairs when you need your vehicle back quickly.'
                  : 'Opciones de entrega rápida para reparaciones menores cuando necesita su vehículo de vuelta rápidamente.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                <Car size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Scratch Repair' : 'Reparación de Rayones'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Professional removal of surface scratches and paint damage to restore your vehicle\'s appearance.'
                  : 'Eliminación profesional de rayones superficiales y daños en la pintura para restaurar la apariencia de su vehículo.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-navy/10 text-escobar-navy rounded-full mb-4">
                <Ruler size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Wheel Alignment' : 'Alineación de Ruedas'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Precision wheel alignment services to ensure proper handling and tire wear following collision repairs.'
                  : 'Servicios de alineación de ruedas de precisión para garantizar un manejo adecuado y desgaste de neumáticos después de reparaciones de colisión.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-escobar-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            {language === 'en'
              ? 'Need Auto Collision Repair?'
              : '¿Necesita Reparación de Colisión Automotriz?'}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            {language === 'en'
              ? 'Contact us today for a free estimate. Our expert team is ready to restore your vehicle with the highest quality service.'
              : 'Contáctenos hoy para un presupuesto gratuito. Nuestro equipo experto está listo para restaurar su vehículo con el servicio de la más alta calidad.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-escobar-red hover:bg-red-700 font-medium px-6 py-3 text-base"
              onClick={() => navigate('/contact')}
            >
              {t('getEstimate')}
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-6 py-3 text-base"
              onClick={() => navigate('/gallery')}
            >
              {language === 'en' ? 'View Before & After Gallery' : 'Ver Galería de Antes y Después'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

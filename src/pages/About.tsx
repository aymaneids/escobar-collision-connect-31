
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Tool, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-escobar-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              {t('about')}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'en'
                ? 'Learn more about Escobar Auto Collision, our expertise, and our commitment to quality auto repair services.'
                : 'Conozca más sobre Escobar Auto Collision, nuestra experiencia y nuestro compromiso con servicios de reparación de automóviles de calidad.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-6">
                {language === 'en' ? 'Our Story' : 'Nuestra Historia'}
              </h2>
              <p className="text-gray-700 mb-6">
                {language === 'en'
                  ? 'Escobar Auto Collision was founded with a simple mission: to provide high-quality auto body repair services with exceptional customer care. For over 15 years, we have been serving our community with dedication and expertise.'
                  : 'Escobar Auto Collision fue fundado con una misión simple: proporcionar servicios de reparación de carrocería de alta calidad con un cuidado excepcional al cliente. Durante más de 15 años, hemos estado sirviendo a nuestra comunidad con dedicación y experiencia.'}
              </p>
              <p className="text-gray-700 mb-6">
                {language === 'en'
                  ? 'What began as a small family-owned shop has grown into a trusted name in auto collision repair. We\'ve built our reputation on transparency, quality workmanship, and a commitment to restoring vehicles to their pre-accident condition.'
                  : 'Lo que comenzó como un pequeño taller familiar se ha convertido en un nombre de confianza en la reparación de colisiones de automóviles. Hemos construido nuestra reputación en la transparencia, la calidad del trabajo y el compromiso de restaurar los vehículos a su condición previa al accidente.'}
              </p>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'Today, we continue to invest in the latest technology and training to ensure we provide the best possible service to our customers. Our bilingual team is here to make the repair process as smooth and stress-free as possible.'
                  : 'Hoy, continuamos invirtiendo en la última tecnología y capacitación para garantizar que brindemos el mejor servicio posible a nuestros clientes. Nuestro equipo bilingüe está aquí para hacer que el proceso de reparación sea lo más fluido y libre de estrés posible.'}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Auto Body Shop Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-4">
              {language === 'en' ? 'Our Values' : 'Nuestros Valores'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'The principles that guide our business and ensure we deliver the best possible service to our customers.'
                : 'Los principios que guían nuestro negocio y aseguran que brindemos el mejor servicio posible a nuestros clientes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Integrity' : 'Integridad'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We are honest and transparent in all our dealings. You can trust us to provide accurate assessments and fair pricing.'
                  : 'Somos honestos y transparentes en todos nuestros tratos. Puede confiar en nosotros para proporcionar evaluaciones precisas y precios justos.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Excellence' : 'Excelencia'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We strive for excellence in every repair we undertake, using quality parts and materials to ensure lasting results.'
                  : 'Nos esforzamos por la excelencia en cada reparación que emprendemos, utilizando piezas y materiales de calidad para garantizar resultados duraderos.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Customer Focus' : 'Enfoque al Cliente'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Our customers are at the center of everything we do. We listen to your needs and work to exceed your expectations.'
                  : 'Nuestros clientes están en el centro de todo lo que hacemos. Escuchamos sus necesidades y trabajamos para superar sus expectativas.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Tool size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {language === 'en' ? 'Innovation' : 'Innovación'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We continuously invest in advanced tools and technologies to provide the most efficient and effective repair services.'
                  : 'Invertimos continuamente en herramientas y tecnologías avanzadas para proporcionar los servicios de reparación más eficientes y efectivos.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-4">
              {language === 'en' ? 'Why Choose Escobar Auto Collision' : '¿Por Qué Elegir Escobar Auto Collision?'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'We are committed to providing the highest quality auto collision repair services with a focus on customer satisfaction.'
                : 'Estamos comprometidos a proporcionar servicios de reparación de colisiones de automóviles de la más alta calidad con un enfoque en la satisfacción del cliente.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-escobar-red">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">{t('insuranceApproved')}</h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We work with all major insurance companies to ensure a smooth claims process and high-quality repairs.'
                    : 'Trabajamos con todas las principales compañías de seguros para garantizar un proceso de reclamos sin problemas y reparaciones de alta calidad.'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-escobar-red">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">{t('qualityGuaranteed')}</h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'All our repairs come with a workmanship guarantee, ensuring your vehicle is restored to its pre-accident condition.'
                    : 'Todas nuestras reparaciones vienen con una garantía de mano de obra, asegurando que su vehículo sea restaurado a su condición previa al accidente.'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-escobar-red">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">{t('weSpeak')}</h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Our bilingual team ensures clear communication and a comfortable experience for our Spanish-speaking customers.'
                    : 'Nuestro equipo bilingüe garantiza una comunicación clara y una experiencia cómoda para nuestros clientes de habla hispana.'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-escobar-red">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">{t('freeEstimates')}</h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We provide free, no-obligation estimates for all auto collision repair services.'
                    : 'Proporcionamos presupuestos gratuitos y sin compromiso para todos los servicios de reparación de colisiones de automóviles.'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-escobar-red">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  {language === 'en' ? 'State-of-the-Art Equipment' : 'Equipamiento de Última Generación'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We invest in the latest technology and tools to ensure precise repairs and efficient service.'
                    : 'Invertimos en la última tecnología y herramientas para garantizar reparaciones precisas y un servicio eficiente.'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-escobar-red">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  {language === 'en' ? 'Experienced Technicians' : 'Técnicos Experimentados'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Our skilled technicians have years of experience and ongoing training in the latest repair techniques.'
                    : 'Nuestros técnicos calificados tienen años de experiencia y capacitación continua en las últimas técnicas de reparación.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-escobar-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            {language === 'en'
              ? 'Ready to Experience Our Quality Service?'
              : '¿Listo para Experimentar Nuestro Servicio de Calidad?'}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            {language === 'en'
              ? 'Contact us today for a free estimate. Our experienced team is ready to restore your vehicle with the highest standards of quality and service.'
              : 'Contáctenos hoy para un presupuesto gratuito. Nuestro experimentado equipo está listo para restaurar su vehículo con los más altos estándares de calidad y servicio.'}
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
              onClick={() => navigate('/services')}
            >
              {language === 'en' ? 'View Our Services' : 'Ver Nuestros Servicios'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

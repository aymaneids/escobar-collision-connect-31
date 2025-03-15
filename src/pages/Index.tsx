import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Hammer, Ruler, PaintBucket, CheckCircle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-cover bg-center" 
        style={{ backgroundImage: 'linear-gradient(rgba(15, 44, 89, 0.7), rgba(15, 44, 89, 0.7)), url("https://images.unsplash.com/photo-1599259604722-61113864bf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-escobar-red text-white px-4 py-1 rounded-full mb-6 font-inter text-sm font-medium">
              {t('weSpeak')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4">
              Escobar Auto Collision
            </h1>
            <h2 className="text-xl md:text-2xl font-inter text-white/90 mb-8">
              {t('heroSubtitle')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-escobar-red hover:bg-red-700 font-medium rounded-md px-6 py-3 text-base"
                onClick={() => navigate('/contact')}
              >
                {t('getEstimate')}
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium rounded-md px-6 py-3 text-base"
                onClick={() => navigate('/about')}
              >
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-red/10 text-escobar-red rounded-full mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{t('insuranceApproved')}</h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We work with all major insurance companies to process your claim hassle-free.'
                  : 'Trabajamos con todas las compañías de seguros importantes para procesar su reclamo sin problemas.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-red/10 text-escobar-red rounded-full mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{t('freeEstimates')}</h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Request a free estimate for your vehicle repair needs.'
                  : 'Solicite un presupuesto gratuito para las necesidades de reparación de su vehículo.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-escobar-red/10 text-escobar-red rounded-full mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{t('qualityGuaranteed')}</h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'All our repairs come with a workmanship quality guarantee.'
                  : 'Todas nuestras reparaciones vienen con una garantía de calidad de mano de obra.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Auto Repair Shop" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-6">{t('aboutSectionTitle')}</h2>
              <p className="text-gray-700 mb-6">
                {language === 'en'
                  ? 'Escobar Auto Collision is your trusted partner for all auto body repair needs. With years of experience and a dedicated team of skilled technicians, we deliver exceptional results and superior customer service.'
                  : 'Escobar Auto Collision es su socio de confianza para todas las necesidades de reparación de carrocería. Con años de experiencia y un equipo dedicado de técnicos calificados, ofrecemos resultados excepcionales y un servicio al cliente superior.'}
              </p>
              <p className="text-gray-700 mb-8">
                {language === 'en'
                  ? 'We pride ourselves on our attention to detail, use of high-quality materials, and commitment to restoring your vehicle to its pre-accident condition. We are insurance approved and provide free estimates for all repairs.'
                  : 'Nos enorgullecemos de nuestra atención al detalle, el uso de materiales de alta calidad y nuestro compromiso de restaurar su vehículo a su condición previa al accidente. Estamos aprobados por seguros y proporcionamos presupuestos gratuitos para todas las reparaciones.'}
              </p>
              <Button
                className="bg-escobar-navy hover:bg-escobar-navy/80 font-medium"
                onClick={() => navigate('/about')}
              >
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-4">
              {t('serviceTitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'We offer a comprehensive range of auto body repair services to restore your vehicle to its pre-accident condition.'
                : 'Ofrecemos una amplia gama de servicios de reparación de carrocería para restaurar su vehículo a su condición previa al accidente.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Car size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">{t('collisionRepair')}</h3>
              <p className="text-gray-600">
                {t('collisionRepairDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Hammer size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">{t('paintlessDent')}</h3>
              <p className="text-gray-600">
                {t('paintlessDentDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <Ruler size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">{t('frameStraightening')}</h3>
              <p className="text-gray-600">
                {t('frameStraighteningDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escobar-navy/10 text-escobar-navy rounded-full mb-6">
                <PaintBucket size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">{t('autoPainting')}</h3>
              <p className="text-gray-600">
                {t('autoPaintingDesc')}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-escobar-navy hover:bg-escobar-navy/80 font-medium px-6"
              onClick={() => navigate('/services')}
            >
              {t('viewMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-4">
              {t('beforeAfter')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'See the quality of our work through these before and after examples of vehicle repairs.'
                : 'Vea la calidad de nuestro trabajo a través de estos ejemplos de antes y después de reparaciones de vehículos.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1578844251758-2f818cd2be7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Before and After Car Repair" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{language === 'en' ? 'Front Bumper Repair' : 'Reparación de Parachoques Delantero'}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Complete restoration of a damaged front bumper, including paint color matching.'
                    : 'Restauración completa de un parachoques delantero dañado, incluida la coincidencia de color de pintura.'}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Before and After Car Repair" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{language === 'en' ? 'Side Panel Repair' : 'Reparación de Panel Lateral'}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Comprehensive side panel repair after a collision, returning the vehicle to factory condition.'
                    : 'Reparación integral del panel lateral después de una colisión, devolviendo el vehículo a su condición de fábrica.'}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1612057259761-7d96705282c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Before and After Car Repair" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{language === 'en' ? 'Paint Restoration' : 'Restauración de Pintura'}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Professional paint restoration to address scratches and fading, restoring the original luster.'
                    : 'Restauración profesional de pintura para abordar rayones y decoloración, restaurando el brillo original.'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-escobar-navy hover:bg-escobar-navy/80 font-medium px-6"
              onClick={() => navigate('/gallery')}
            >
              {t('viewMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-escobar-navy mb-4">
              {t('testimonialTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-700 mb-4 italic">
                {language === 'en'
                  ? '"Escobar Auto Collision did an amazing job repairing my car after a fender bender. The staff was professional and kept me updated throughout the process. My car looks brand new again!"'
                  : '"Escobar Auto Collision hizo un trabajo increíble reparando mi auto después de un choque leve. El personal fue profesional y me mantuvo actualizado durante todo el proceso. ¡Mi auto se ve como nuevo otra vez!"'}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-escobar-navy rounded-full flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <div className="ml-3">
                  <span className="font-medium text-gray-800">John D.</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-700 mb-4 italic">
                {language === 'en'
                  ? '"I appreciate that they speak Spanish, it made the entire process much easier for me. They handled everything with my insurance company and the repair quality was excellent."'
                  : '"Agradezco que hablen español, hizo que todo el proceso fuera mucho más fácil para mí. Manejaron todo con mi compañía de seguros y la calidad de la reparación fue excelente."'}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-escobar-navy rounded-full flex items-center justify-center text-white font-medium">
                  MR
                </div>
                <div className="ml-3">
                  <span className="font-medium text-gray-800">Maria R.</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-700 mb-4 italic">
                {language === 'en'
                  ? '"Fast, reliable, and affordable! Escobar Auto Collision fixed my car\'s dents without breaking the bank. Highly recommend their paintless dent removal service."'
                  : '"¡Rápido, confiable y asequible! Escobar Auto Collision arregló las abolladuras de mi auto sin gastar demasiado. Recomiendo ampliamente su servicio de remoción de abolladuras sin pintura."'}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-escobar-navy rounded-full flex items-center justify-center text-white font-medium">
                  ST
                </div>
                <div className="ml-3">
                  <span className="font-medium text-gray-800">Sarah T.</span>
                </div>
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
              ? 'Ready to Get Your Vehicle Repaired?'
              : '¿Listo para Reparar su Vehículo?'}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            {language === 'en'
              ? 'Contact us today for a free estimate. Our team is ready to restore your vehicle to its pre-accident condition.'
              : 'Contáctenos hoy para un presupuesto gratuito. Nuestro equipo está listo para restaurar su vehículo a su condición previa al accidente.'}
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
              asChild
            >
              <a href="tel:+15555555555">{language === 'en' ? 'Call Us Now' : 'Llámenos Ahora'}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

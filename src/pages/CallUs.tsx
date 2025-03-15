
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, PhoneCall, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallUs = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-escobar-navy text-center mb-6">
            {language === 'en' ? 'Call Us Now' : 'Llámanos Ahora'}
          </h1>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {language === 'en' 
              ? 'Our team is ready to help you with any questions or to schedule an appointment for your vehicle.' 
              : 'Nuestro equipo está listo para ayudarte con cualquier pregunta o para programar una cita para tu vehículo.'}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red mb-4">
                <PhoneCall size={32} />
              </div>
              
              <h2 className="text-2xl font-montserrat font-semibold text-escobar-navy mb-4">
                {language === 'en' ? 'Call Our Main Office' : 'Llama a Nuestra Oficina Principal'}
              </h2>
              
              <a 
                href="tel:+15555555555" 
                className="text-3xl font-bold text-escobar-red hover:underline block mb-4"
              >
                (555) 555-5555
              </a>
              
              <div className="flex items-center justify-center text-gray-600 mb-6">
                <Clock size={18} className="mr-2" />
                <span>{t('mondayToSaturday')}: 9:00 AM - 6:00 PM | {t('sunday')}: {t('closed')}</span>
              </div>
              
              <Button asChild size="lg" className="bg-escobar-red hover:bg-red-700">
                <a href="tel:+15555555555">
                  <Phone className="mr-2" />
                  {language === 'en' ? 'Call Now' : 'Llamar Ahora'}
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-escobar-navy text-xl mb-4 flex items-center">
                  <MessageSquare className="mr-2 text-escobar-red" size={20} />
                  {language === 'en' ? 'Text Message' : 'Mensaje de Texto'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Prefer to text? Send us a message and we\'ll get back to you as soon as possible.' 
                    : '¿Prefieres enviar un mensaje de texto? Envíanos un mensaje y te responderemos lo antes posible.'}
                </p>
                <Button asChild variant="outline" className="w-full border-escobar-red text-escobar-red hover:bg-escobar-red/10">
                  <a href="sms:+15555555555">
                    {language === 'en' ? 'Send a Text' : 'Enviar un Texto'}
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-escobar-navy text-xl mb-4 flex items-center">
                  <CheckCircle className="mr-2 text-escobar-red" size={20} />
                  {language === 'en' ? 'Schedule a Callback' : 'Programar una Llamada'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Busy right now? We can call you back at a time that works for you.' 
                    : '¿Ocupado ahora mismo? Podemos llamarte en un momento que te convenga.'}
                </p>
                <Button asChild className="w-full bg-escobar-red hover:bg-red-700">
                  <a href="/contact">
                    {language === 'en' ? 'Request Callback' : 'Solicitar Llamada'}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-escobar-navy text-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">
                {language === 'en' ? 'Why Call Escobar Auto Collision?' : '¿Por qué llamar a Escobar Auto Collision?'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-escobar-red mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-medium mb-1">{t('freeEstimates')}</h4>
                  <p className="text-gray-300 text-sm">
                    {language === 'en' 
                      ? 'Get accurate estimates at no cost to you' 
                      : 'Obtén presupuestos precisos sin costo para ti'}
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-escobar-red mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-medium mb-1">{t('insuranceApproved')}</h4>
                  <p className="text-gray-300 text-sm">
                    {language === 'en' 
                      ? 'We work with all insurance companies' 
                      : 'Trabajamos con todas las compañías de seguros'}
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-escobar-red mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-medium mb-1">{t('weSpeak')}</h4>
                  <p className="text-gray-300 text-sm">
                    {language === 'en' 
                      ? 'Bilingual staff ready to assist you' 
                      : 'Personal bilingüe listo para ayudarte'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CallUs;

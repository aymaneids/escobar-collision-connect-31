
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleInfo: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: language === 'en' ? 'Message Sent!' : '¡Mensaje Enviado!',
        description: language === 'en' 
          ? 'We will contact you as soon as possible.' 
          : 'Nos pondremos en contacto contigo lo antes posible.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleInfo: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-escobar-navy text-center mb-12">
            {t('contactUs')}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-montserrat font-semibold text-escobar-navy mb-6">
                {t('contactUs')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-escobar-navy">{t('address')}</h3>
                    <p className="text-gray-600 mt-1">123 Auto Repair St, Collision City, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-escobar-navy">{t('phone')}</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+15555555555" className="hover:text-escobar-red transition-colors">
                        (555) 555-5555
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-escobar-navy">{t('email')}</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@escobarautocollision.com" className="hover:text-escobar-red transition-colors">
                        info@escobarautocollision.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-escobar-navy">{t('businessHours')}</h3>
                    <div className="text-gray-600 mt-1">
                      <p>{t('mondayToSaturday')}: 9:00 AM - 6:00 PM</p>
                      <p>{t('sunday')}: {t('closed')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-escobar-red/10 rounded-md border border-escobar-red/30">
                <p className="text-escobar-navy font-medium flex items-center">
                  <span className="mr-2">🗣️</span>
                  {t('weSpeak')}
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-montserrat font-semibold text-escobar-navy mb-6">
                {language === 'en' ? 'Send Us a Message' : 'Envíanos un Mensaje'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">{t('name')}</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">{t('yourEmail')}</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">{t('yourPhone')}</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="vehicleInfo">{t('vehicleInfo')}</Label>
                  <Input 
                    id="vehicleInfo" 
                    name="vehicleInfo" 
                    value={formData.vehicleInfo}
                    onChange={handleChange}
                    className="mt-1" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">{t('damageDescription')}</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-escobar-red hover:bg-red-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>{language === 'en' ? 'Sending...' : 'Enviando...'}</span>
                  ) : (
                    <span>{t('submit')}</span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

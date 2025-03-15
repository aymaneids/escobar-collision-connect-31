
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Camera, Calendar, Car, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Estimate = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    make: '',
    model: '',
    year: '',
    damageDescription: '',
    preferredDate: ''
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
        title: language === 'en' ? 'Estimate Request Sent!' : '¡Solicitud de Presupuesto Enviada!',
        description: language === 'en' 
          ? 'We will contact you soon with your free estimate.' 
          : 'Nos pondremos en contacto contigo pronto con tu presupuesto gratuito.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        make: '',
        model: '',
        year: '',
        damageDescription: '',
        preferredDate: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-escobar-navy text-center mb-6">
            {language === 'en' ? 'Get Your Free Estimate' : 'Obtén Tu Presupuesto Gratis'}
          </h1>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {language === 'en' 
              ? 'Fill out the form below to receive a comprehensive repair estimate. We will contact you shortly after receiving your information.' 
              : 'Completa el formulario a continuación para recibir un presupuesto de reparación completo. Nos pondremos en contacto contigo poco después de recibir tu información.'}
          </p>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red">
                  <FileText size={28} />
                </div>
                <h3 className="font-medium text-escobar-navy mt-3">
                  {language === 'en' ? 'Submit Details' : 'Envía Detalles'}
                </h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red">
                  <Camera size={28} />
                </div>
                <h3 className="font-medium text-escobar-navy mt-3">
                  {language === 'en' ? 'Send Photos (Optional)' : 'Envía Fotos (Opcional)'}
                </h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-escobar-red/10 flex items-center justify-center text-escobar-red">
                  <Calendar size={28} />
                </div>
                <h3 className="font-medium text-escobar-navy mt-3">
                  {language === 'en' ? 'Get Your Estimate' : 'Recibe Tu Presupuesto'}
                </h3>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-escobar-navy flex items-center mb-4">
                  <Car className="mr-2 text-escobar-red" size={20} />
                  {language === 'en' ? 'Vehicle Information' : 'Información del Vehículo'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="make">
                      {language === 'en' ? 'Make' : 'Marca'}
                    </Label>
                    <Input 
                      id="make" 
                      name="make" 
                      value={formData.make}
                      onChange={handleChange}
                      className="mt-1" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="model">
                      {language === 'en' ? 'Model' : 'Modelo'}
                    </Label>
                    <Input 
                      id="model" 
                      name="model" 
                      value={formData.model}
                      onChange={handleChange}
                      className="mt-1" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="year">
                      {language === 'en' ? 'Year' : 'Año'}
                    </Label>
                    <Input 
                      id="year" 
                      name="year" 
                      value={formData.year}
                      onChange={handleChange}
                      className="mt-1" 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="damageDescription" className="flex items-center">
                  <MessageSquare className="mr-2 text-escobar-red" size={18} />
                  {t('damageDescription')}
                </Label>
                <textarea 
                  id="damageDescription" 
                  name="damageDescription" 
                  rows={4} 
                  value={formData.damageDescription}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="preferredDate">
                  {language === 'en' ? 'Preferred Contact Date (Optional)' : 'Fecha de Contacto Preferida (Opcional)'}
                </Label>
                <Input 
                  id="preferredDate" 
                  name="preferredDate" 
                  type="date" 
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-escobar-red hover:bg-red-700 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>{language === 'en' ? 'Submitting...' : 'Enviando...'}</span>
                  ) : (
                    <span>{language === 'en' ? 'Get Your Free Estimate' : 'Obtener Presupuesto Gratis'}</span>
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                {language === 'en' 
                  ? 'By submitting this form, you agree to be contacted regarding your estimate request.' 
                  : 'Al enviar este formulario, aceptas ser contactado con respecto a tu solicitud de presupuesto.'}
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Estimate;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-escobar-navy font-montserrat font-bold text-2xl">Escobar</span>
            <span className="text-escobar-red font-montserrat font-bold text-2xl ml-1">Auto</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-inter text-escobar-navy hover:text-escobar-red transition-colors">
              {t('home')}
            </Link>
            <Link to="/about" className="font-inter text-escobar-navy hover:text-escobar-red transition-colors">
              {t('about')}
            </Link>
            <Link to="/services" className="font-inter text-escobar-navy hover:text-escobar-red transition-colors">
              {t('services')}
            </Link>
            <Link to="/gallery" className="font-inter text-escobar-navy hover:text-escobar-red transition-colors">
              {t('gallery')}
            </Link>
            <Link to="/contact" className="font-inter text-escobar-navy hover:text-escobar-red transition-colors">
              {t('contact')}
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="text-escobar-navy hover:text-escobar-red"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button asChild variant="default" className="bg-escobar-red hover:bg-red-700 text-white">
              <a href="tel:+15555555555">{t('getEstimate')}</a>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="mr-2 text-escobar-navy"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-escobar-navy p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-inter text-escobar-navy hover:text-escobar-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/about" 
                className="font-inter text-escobar-navy hover:text-escobar-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/services" 
                className="font-inter text-escobar-navy hover:text-escobar-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Link 
                to="/gallery" 
                className="font-inter text-escobar-navy hover:text-escobar-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('gallery')}
              </Link>
              <Link 
                to="/contact" 
                className="font-inter text-escobar-navy hover:text-escobar-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Button asChild variant="default" className="bg-escobar-red hover:bg-red-700 text-white w-full">
                <a href="tel:+15555555555">{t('getEstimate')}</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

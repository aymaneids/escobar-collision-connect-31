
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-escobar-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white font-montserrat font-bold text-2xl">Escobar</span>
              <span className="text-escobar-red font-montserrat font-bold text-2xl ml-1">Auto</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('aboutSectionText')}
            </p>
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-2 text-escobar-red flex items-center justify-center">
                <Phone size={16} />
              </div>
              <a href="tel:+15555555555" className="text-gray-300 hover:text-escobar-red transition-colors">
                (555) 555-5555
              </a>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-2 text-escobar-red flex items-center justify-center">
                <Mail size={16} />
              </div>
              <a href="mailto:info@escobarautocollision.com" className="text-gray-300 hover:text-escobar-red transition-colors">
                info@escobarautocollision.com
              </a>
            </div>
            <div className="flex items-start mb-3">
              <div className="w-6 h-6 mr-2 text-escobar-red flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <span className="text-gray-300">
                123 Auto Repair St, Collision City, CA 90210
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4 border-b border-gray-700 pb-2">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-escobar-red transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-escobar-red transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-escobar-red transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-escobar-red transition-colors">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-escobar-red transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4 border-b border-gray-700 pb-2">
              {t('businessHours')}
            </h3>
            <div className="flex items-start mb-3">
              <div className="w-6 h-6 mr-2 text-escobar-red flex items-center justify-center">
                <Clock size={16} />
              </div>
              <div>
                <div className="mb-2">
                  <span className="text-gray-300">{t('mondayToSaturday')}:</span>
                  <span className="text-white ml-2">9:00 AM - 6:00 PM</span>
                </div>
                <div>
                  <span className="text-gray-300">{t('sunday')}:</span>
                  <span className="text-white ml-2">{t('closed')}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-3 bg-escobar-red/10 rounded-md border border-escobar-red/30">
              <p className="text-white font-medium">{t('weSpeak')}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Escobar Auto Collision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

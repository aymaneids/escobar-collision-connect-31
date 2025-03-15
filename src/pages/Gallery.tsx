
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';

const galleryImages = [
  { 
    id: 1, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Front bumper collision repair', 
      es: 'Reparación de colisión del parachoques delantero' 
    } 
  },
  { 
    id: 2, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Door panel dent removal', 
      es: 'Eliminación de abolladuras del panel de la puerta' 
    } 
  },
  { 
    id: 3, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Rear quarter panel repair', 
      es: 'Reparación del panel trasero lateral' 
    } 
  },
  { 
    id: 4, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Complete paint restoration', 
      es: 'Restauración completa de pintura' 
    } 
  },
  { 
    id: 5, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Hood repair after accident', 
      es: 'Reparación del capó después de accidente' 
    } 
  },
  { 
    id: 6, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Fender replacement and color matching', 
      es: 'Reemplazo de guardabarros y coincidencia de color' 
    } 
  },
  { 
    id: 7, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Side mirror replacement', 
      es: 'Reemplazo de espejo lateral' 
    } 
  },
  { 
    id: 8, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Window tinting and protection film', 
      es: 'Polarizado de ventanas y película de protección' 
    } 
  },
  { 
    id: 9, 
    before: '/placeholder.svg', 
    after: '/placeholder.svg', 
    description: { 
      en: 'Headlight restoration', 
      es: 'Restauración de faros' 
    } 
  }
];

const ITEMS_PER_PAGE = 6;

const Gallery = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'before-after'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);
  
  // Get current items
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = galleryImages.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <Images className="h-8 w-8 text-escobar-red mr-2" />
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-escobar-navy">
                {t('gallery')}
              </h1>
            </div>
            
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              {language === 'en' 
                ? 'Browse through our portfolio of collision repair projects. See the quality of our work through before and after transformations.' 
                : 'Explore nuestro portafolio de proyectos de reparación de colisiones. Vea la calidad de nuestro trabajo a través de transformaciones de antes y después.'}
            </p>
          </div>
          
          {/* Gallery Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-gray-300 rounded-md overflow-hidden">
              <button 
                className={`px-4 py-2 ${activeTab === 'all' ? 'bg-escobar-red text-white' : 'bg-white text-escobar-navy'}`}
                onClick={() => setActiveTab('all')}
              >
                {language === 'en' ? 'All Projects' : 'Todos los Proyectos'}
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'before-after' ? 'bg-escobar-red text-white' : 'bg-white text-escobar-navy'}`}
                onClick={() => setActiveTab('before-after')}
              >
                {t('beforeAfter')}
              </button>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative bg-gray-100">
                  {activeTab === 'all' ? (
                    <img 
                      src={item.after} 
                      alt={`Project ${item.id}`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full">
                      <div className="w-1/2 h-full relative">
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                          {language === 'en' ? 'Before' : 'Antes'}
                        </div>
                        <img 
                          src={item.before} 
                          alt={`Before project ${item.id}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-1/2 h-full relative">
                        <div className="absolute top-2 right-2 bg-escobar-red/90 text-white text-xs px-2 py-1 rounded z-10">
                          {language === 'en' ? 'After' : 'Después'}
                        </div>
                        <img 
                          src={item.after} 
                          alt={`After project ${item.id}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-escobar-navy font-medium">
                    {item.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={prevPage} 
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      isActive={currentPage === index + 1}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={nextPage} 
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
          
          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              {language === 'en' 
                ? 'These are just a few examples of our work. Contact us to see more or to discuss your specific needs.' 
                : 'Estos son solo algunos ejemplos de nuestro trabajo. Contáctenos para ver más o para discutir sus necesidades específicas.'}
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;

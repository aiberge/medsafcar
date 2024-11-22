import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/212661345712`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-40">
            <div className="flex items-center">
              <img src="/mesalog.png" alt="Fayolle Car Logo" className="h-36 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-[#5E67B6]">Accueil</a>
              <a href="#cars" className="text-white hover:text-[#5E67B6]">Voitures</a>
              <a href="#about" className="text-white hover:text-[#5E67B6]">À propos</a>
              <a href="#contact" className="text-white hover:text-[#5E67B6]">Contact</a>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center bg-[#5E67B6] text-white px-4 py-2 rounded-lg hover:bg-[#432F25] transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>06 61 34 57 12</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#A7984E]"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-90">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-white hover:text-[#A7984E]">Accueil</a>
              <a href="#cars" className="block px-3 py-2 text-white hover:text-[#A7984E]">Voitures</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-[#A7984E]">À propos</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#A7984E]">Contact</a>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center w-full bg-[#5E67B6] text-white px-3 py-2 rounded-lg hover:bg-[#432F25] transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>06 61 34 57 12</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bienvenue chez <span className="italic text-[#5E67B6]">MEDSAF CAR</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Votre agence de location de voitures premium
          </p>
          <a
            href="#cars"
            className="inline-block bg-[#5E67B6] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#432F25] transition-colors"
          >
            Voir les voitures disponibles
          </a>
        </div>
      </div>

      <a
        href="#cars"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </div>
  );
}
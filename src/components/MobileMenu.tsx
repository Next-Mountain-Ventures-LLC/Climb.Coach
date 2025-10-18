import React, { useState, useEffect } from 'react';
import logo from "../assets/main_no_bg_nw_b5d07dc7.png";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // Toggle body scroll
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-toggle"
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal hover:bg-mountain-green/20 hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mountain-green transition-colors"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {/* Menu icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} 
          aria-hidden="true"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        {/* Close icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} 
          aria-hidden="true"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {/* Mobile menu - slide out panel */}
      <div 
        id="mobile-menu" 
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? '' : 'translate-x-full hidden'} border-l border-mountain-green/30`}
      >
        <div className="flex flex-col h-full">
          <div className="py-6 px-4 border-b border-mountain-green/20">
            <img src={logo.src} alt="Climb.Coach" width={120} height={30} className="h-8 w-auto mx-auto" />
          </div>
          
          <nav className="flex flex-col flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-6">
              <a
                href="#about"
                className="block py-2 font-medium text-charcoal hover:text-blue-mell transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#method"
                className="block py-2 font-medium text-charcoal hover:text-blue-mell transition-colors"
                onClick={toggleMenu}
              >
                The Climb Method
              </a>
              <a
                href="#services"
                className="block py-2 font-medium text-charcoal hover:text-blue-mell transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <a
                href="#climbos"
                className="block py-2 font-medium text-charcoal hover:text-blue-mell transition-colors"
                onClick={toggleMenu}
              >
                ClimbOS
              </a>
            </div>
          </nav>
          
          <div className="p-4 border-t border-mountain-green/20">
            <a
              href="#services"
              className="w-full flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-white hover:bg-cambridge-blue/90 h-10 px-6 py-2"
              style={{ backgroundColor: '#364958' }}
              onClick={toggleMenu}
            >
              Start Free Trial
            </a>
            
            <p className="text-sm text-center mt-4 text-charcoal/70">
              First month free - No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div 
        id="mobile-menu-backdrop" 
        className={`md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
        onClick={toggleMenu}
      />
    </>
  );
}
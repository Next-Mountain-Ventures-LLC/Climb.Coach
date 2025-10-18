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

      {/* Mobile menu - full page with simple top-down layout */}
      <div 
        id="mobile-menu" 
        className={`md:hidden fixed inset-0 z-50 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ 
          height: '100vh',
          width: '100vw',
          overflowY: 'auto' // Allow scrolling if needed
        }}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-6 px-6 border-b border-mountain-green/20 flex justify-between items-center">
            <img src={logo.src} alt="Climb.Coach" width={180} height={40} className="h-10 w-auto" />
            <button
              onClick={toggleMenu}
              className="p-2 text-charcoal hover:bg-mountain-green/20 rounded-full transition-colors"
              aria-label="Close menu"
            >
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
                className="h-6 w-6" 
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation with CTA button directly below */}
          <nav className="w-full px-6 py-10">
            <ul className="space-y-6">
              <li>
                <a
                  href="#about"
                  className="block py-2 text-2xl text-center font-medium text-charcoal hover:text-blue-mell transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="block py-2 text-2xl text-center font-medium text-charcoal hover:text-blue-mell transition-colors"
                  onClick={toggleMenu}
                >
                  The Climb Method
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 text-2xl text-center font-medium text-charcoal hover:text-blue-mell transition-colors"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#climbos"
                  className="block py-2 text-2xl text-center font-medium text-charcoal hover:text-blue-mell transition-colors"
                  onClick={toggleMenu}
                >
                  ClimbOS
                </a>
              </li>
              
              {/* CTA Button integrated into the navigation list */}
              <li className="pt-8">
                <a
                  href="https://buy.stripe.com/4gM00kgix9gKfyU9Cogfu02"
                  className="block w-full text-center rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-white hover:bg-cambridge-blue/90 h-16 px-6 py-2 text-xl"
                  style={{ 
                    backgroundColor: '#364958',
                    boxShadow: '0 4px 6px rgba(54, 73, 88, 0.25)',
                    lineHeight: '3rem' // Ensure vertical centering of text
                  }}
                  onClick={toggleMenu}
                >
                  Start Free Trial
                </a>
                
                <p className="text-sm text-center mt-4 text-charcoal/70 font-medium">
                  First month free - No credit card required
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* We don't need a separate backdrop for a full-page menu */}
    </>
  );
}
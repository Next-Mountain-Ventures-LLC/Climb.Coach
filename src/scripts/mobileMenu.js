// Mobile menu functionality
function initMobileMenu() {
  console.log('Initializing mobile menu from standalone JS file');
  
  // Get elements
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  
  console.log('Elements found:', {
    toggleButton: !!toggleButton,
    mobileMenu: !!mobileMenu,
    backdrop: !!backdrop
  });
  
  if (!toggleButton || !mobileMenu || !backdrop) {
    console.error('Mobile menu elements not found');
    return;
  }
  
  // Set up click handler on button
  toggleButton.addEventListener('click', function() {
    console.log('Toggle button clicked');
    
    const isOpen = mobileMenu.classList.contains('translate-x-full') === false;
    
    if (isOpen) {
      // Close menu
      mobileMenu.classList.add('translate-x-full');
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      
      setTimeout(function() {
        mobileMenu.classList.add('hidden');
        backdrop.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }, 300);
      
      // Update button state
      toggleButton.setAttribute('aria-expanded', 'false');
      
      // Swap icons
      const menuIcon = toggleButton.querySelector('svg:first-child');
      const closeIcon = toggleButton.querySelector('svg:last-child');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        menuIcon.classList.add('block');
        closeIcon.classList.add('hidden');
        closeIcon.classList.remove('block');
      }
    } else {
      // Open menu
      mobileMenu.classList.remove('hidden');
      backdrop.classList.remove('hidden');
      
      // Small delay to trigger transitions
      setTimeout(function() {
        mobileMenu.classList.remove('translate-x-full');
        backdrop.classList.add('opacity-100');
        backdrop.classList.remove('opacity-0');
        document.body.classList.add('overflow-hidden');
      }, 10);
      
      // Update button state
      toggleButton.setAttribute('aria-expanded', 'true');
      
      // Swap icons
      const menuIcon = toggleButton.querySelector('svg:first-child');
      const closeIcon = toggleButton.querySelector('svg:last-child');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.add('hidden');
        menuIcon.classList.remove('block');
        closeIcon.classList.remove('hidden');
        closeIcon.classList.add('block');
      }
    }
  });
  
  // Close menu when clicking backdrop
  backdrop.addEventListener('click', function() {
    console.log('Backdrop clicked');
    toggleButton.click();
  });
  
  // Close menu when clicking on links
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      console.log('Menu link clicked');
      toggleButton.click();
    });
  });
  
  // Close menu when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('translate-x-full') === false) {
      toggleButton.click();
    }
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}
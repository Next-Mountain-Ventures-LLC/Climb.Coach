// Mobile menu functionality
console.log('Mobile menu script loaded from public directory');

function toggleMobileMenu() {
  console.log('Toggle mobile menu called');
  
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  
  if (!mobileMenuToggle || !mobileMenu || !mobileMenuBackdrop) {
    console.error('Required elements not found');
    return;
  }
  
  const menuIcon = mobileMenuToggle.querySelector('svg:first-child');
  const closeIcon = mobileMenuToggle.querySelector('svg:last-child');
  const body = document.body;
  
  const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
  
  if (expanded) {
    // Close menu
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('translate-x-full');
    mobileMenuBackdrop.classList.add('opacity-0');
    mobileMenuBackdrop.classList.remove('opacity-100');
    
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      mobileMenuBackdrop.classList.add('hidden');
      body.classList.remove('overflow-hidden');
    }, 300);
    
    if (menuIcon && closeIcon) {
      menuIcon.classList.remove('hidden');
      menuIcon.classList.add('block');
      closeIcon.classList.add('hidden');
      closeIcon.classList.remove('block');
    }
  } else {
    // Open menu
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    mobileMenuBackdrop.classList.remove('hidden');
    mobileMenu.classList.remove('hidden');
    
    setTimeout(() => {
      mobileMenuBackdrop.classList.add('opacity-100');
      mobileMenuBackdrop.classList.remove('opacity-0');
      mobileMenu.classList.remove('translate-x-full');
      body.classList.add('overflow-hidden');
    }, 10);
    
    if (menuIcon && closeIcon) {
      menuIcon.classList.add('hidden');
      menuIcon.classList.remove('block');
      closeIcon.classList.remove('hidden');
      closeIcon.classList.add('block');
    }
  }
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing mobile menu');
  
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  
  if (!mobileMenuToggle || !mobileMenu || !mobileMenuBackdrop) {
    console.error('Required elements not found during initialization');
    return;
  }
  
  console.log('Adding click event listener to mobile menu toggle');
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Close menu when clicking backdrop
  mobileMenuBackdrop.addEventListener('click', toggleMobileMenu);
  
  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
  
  // Close menu when pressing escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuToggle.getAttribute('aria-expanded') === 'true') {
      toggleMobileMenu();
    }
  });
});

// In case DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  console.log('DOM already loaded, initializing mobile menu now');
  setTimeout(() => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
      console.log('Adding click event listener to mobile menu toggle (delayed)');
      mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
  }, 100);
}
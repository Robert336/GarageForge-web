/**
 * GarageForge Main JavaScript
 * Minimal JavaScript for mobile navigation and smooth scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const mobileNav = document.querySelector('.header__mobile-nav');
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('header__mobile-nav--open');
            
            // Animate hamburger
            const hamburger = mobileToggle.querySelector('.header__hamburger');
            hamburger.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(45deg)';
        });
        
        // Close mobile menu when clicking nav links
        const mobileLinks = document.querySelectorAll('.header__mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('header__mobile-nav--open');
                const hamburger = mobileToggle.querySelector('.header__hamburger');
                hamburger.style.transform = 'rotate(0deg)';
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Account for sticky header height
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Basic form validation enhancement (optional)
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            // Basic client-side validation can be added here
            // For now, just ensure required fields are filled
            const requiredFields = this.querySelectorAll('[required]');
            let allValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    allValid = false;
                    field.focus();
                    return false;
                }
            });
            
            if (!allValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
}); 
// Main JavaScript for GarageForge Website
// Minimal JavaScript following the project's HTML/CSS-first approach

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            navMenu.classList.toggle('nav__menu--open');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('nav__menu--open');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('nav__menu--open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('nav__menu--open');
            }
        });
    }
    
    // Smooth scrolling for anchor links (if any are added later)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter__btn');
    const projects = document.querySelectorAll('.project');
    
    if (filterButtons.length > 0 && projects.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('filter__btn--active'));
                this.classList.add('filter__btn--active');
                
                // Filter projects
                projects.forEach(project => {
                    const category = project.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        project.classList.remove('hidden');
                    } else {
                        project.classList.add('hidden');
                    }
                });
            });
        });
    }
    
    // Basic form validation (for future contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Remove error class on input
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    }, { once: true });
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Focus first invalid field
                const firstInvalid = form.querySelector('.error');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
    });
});
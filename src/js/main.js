/**
 * GarageForge Main JavaScript
 * Minimal JavaScript for mobile navigation and smooth scrolling
 */

// Project data for featured section switching
const projectData = {
    'fan-turntable': {
        title: 'Remote-Controlled Fan Turntable',
        description: 'We built a simple rotating platform that lets someone aim their bedroom fan with just a remote control. Our client needed a way to redirect airflow without getting up due to accessibility reasons, so we designed a custom circular base, set up the motor system, and wired everything together. The clever part? We used airsoft BBs as smooth bearings to make it spin effortlessly. It\'s a small device that makes a big difference in daily comfort.',
        gallery: [
            {
                src: './assets/images/projects/fan-turntable/main.jpg',
                alt: 'Remote-Controlled Fan Turntable - Main View',
                title: 'Main view'
            },
            {
                src: './assets/images/projects/fan-turntable/detail1.jpg',
                alt: 'Remote-Controlled Fan Turntable - Motor Detail',
                title: 'Motor detail'
            },
            {
                src: './assets/images/projects/fan-turntable/detail2.jpg',
                alt: 'Remote-Controlled Fan Turntable - Remote Control',
                title: 'Remote control'
            },
            {
                src: './assets/images/projects/fan-turntable/detail3.jpg',
                alt: 'Remote-Controlled Fan Turntable - BB Bearing System',
                title: 'BB bearing system'
            }
        ]
    },
    'signage-1': {
        title: 'Modern Office Signage',
        description: 'Professional dimensional letters designed for corporate environments. These custom 3D printed letters provide a sleek, modern aesthetic for office branding while maintaining durability and professional appearance. Each letter is precisely crafted to company specifications and mounting requirements.',
        gallery: [
            {
                src: './assets/images/projects/custom-signage-1.jpg',
                alt: 'Modern Office Signage - Main View',
                title: 'Main view'
            },
            {
                src: './assets/images/projects/custom-signage-1.jpg',
                alt: 'Modern Office Signage - Detail',
                title: 'Letter detail'
            },
            {
                src: './assets/images/projects/custom-signage-1.jpg',
                alt: 'Modern Office Signage - Installation',
                title: 'Installation view'
            }
        ]
    },
    'signage-2': {
        title: 'Decorative Wall Letters',
        description: 'Custom typography solutions for interior design projects. These decorative 3D printed letters add personality and branding to residential and commercial spaces. Available in various sizes, fonts, and finishes to match any design aesthetic.',
        gallery: [
            {
                src: './assets/images/projects/custom-signage-2.jpg',
                alt: 'Decorative Wall Letters - Main View',
                title: 'Main view'
            },
            {
                src: './assets/images/projects/custom-signage-2.jpg',
                alt: 'Decorative Wall Letters - Close-up',
                title: 'Letter detail'
            },
            {
                src: './assets/images/projects/custom-signage-2.jpg',
                alt: 'Decorative Wall Letters - Mounted',
                title: 'Wall mounted'
            }
        ]
    },
    'signage-3': {
        title: 'Outdoor Business Signs',
        description: 'Weather-resistant signage solutions for storefronts and outdoor applications. These durable 3D printed signs are designed to withstand the elements while maintaining their appearance. Perfect for business identification and wayfinding applications.',
        gallery: [
            {
                src: './assets/images/projects/custom-signage-3.jpg',
                alt: 'Outdoor Business Signs - Main View',
                title: 'Main view'
            },
            {
                src: './assets/images/projects/custom-signage-3.jpg',
                alt: 'Outdoor Business Signs - Weather Detail',
                title: 'Weather resistant'
            },
            {
                src: './assets/images/projects/custom-signage-3.jpg',
                alt: 'Outdoor Business Signs - Installation',
                title: 'Storefront installation'
            }
        ]
    },
    'signage-4': {
        title: 'Event Branding Elements',
        description: 'Temporary displays and branding elements for trade shows, conferences, and special events. These lightweight yet professional 3D printed elements help create memorable brand experiences. Easy to transport, set up, and customize for different events.',
        gallery: [
            {
                src: './assets/images/projects/custom-signage-4.jpg',
                alt: 'Event Branding Elements - Main View',
                title: 'Main view'
            },
            {
                src: './assets/images/projects/custom-signage-4.jpg',
                alt: 'Event Branding Elements - Setup',
                title: 'Event setup'
            },
            {
                src: './assets/images/projects/custom-signage-4.jpg',
                alt: 'Event Branding Elements - Display',
                title: 'Trade show display'
            }
        ]
    }
};

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
    
    // Mobile expandable project cards
    const projectCards = document.querySelectorAll('.project-card--small');
    
    // Only add click functionality on mobile/tablet devices
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }
    
    function handleCardClick(card) {
        if (!isMobileDevice()) return;
        
        // Toggle expanded state
        card.classList.toggle('expanded');
        
        // Close other expanded cards
        projectCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
    }
    
    function initializeMobileCards() {
        if (isMobileDevice()) {
            projectCards.forEach(card => {
                // Remove any existing click listeners
                card.removeEventListener('click', card.clickHandler);
                
                // Add click listener
                card.clickHandler = function() {
                    handleCardClick(card);
                };
                card.addEventListener('click', card.clickHandler);
                
                // Make cards keyboard accessible
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
                card.setAttribute('aria-expanded', 'false');
                
                // Add keyboard support
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(card);
                        // Update aria-expanded
                        const isExpanded = card.classList.contains('expanded');
                        card.setAttribute('aria-expanded', isExpanded);
                    }
                });
            });
        } else {
            // Remove mobile functionality on desktop
            projectCards.forEach(card => {
                card.removeEventListener('click', card.clickHandler);
                card.classList.remove('expanded');
                card.removeAttribute('tabindex');
                card.removeAttribute('role');
                card.removeAttribute('aria-expanded');
            });
        }
    }
    
    // Initialize on load
    initializeMobileCards();
    
    // Re-initialize on window resize (responsive behavior)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initializeMobileCards();
        }, 250);
    });
    
    // Project Gallery Functionality - Support for multiple galleries
    function initializeGallery(gallery) {
        const mainImage = gallery.querySelector('.project-gallery__main-image');
        const thumbnails = gallery.querySelectorAll('.project-gallery__thumbnail');
        
        if (!mainImage || thumbnails.length === 0) return;
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails in this gallery
                thumbnails.forEach(t => t.classList.remove('project-gallery__thumbnail--active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('project-gallery__thumbnail--active');
                
                // Update main image using data attributes
                const newImageSrc = this.getAttribute('data-image');
                const newImageAlt = this.getAttribute('data-alt');
                
                if (newImageSrc && newImageAlt) {
                    mainImage.src = newImageSrc;
                    mainImage.alt = newImageAlt;
                }
            });
            
            // Add keyboard support for accessibility
            thumbnail.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }
    
    // Initialize all galleries on the page
    const galleries = document.querySelectorAll('.project-gallery');
    galleries.forEach(gallery => {
        initializeGallery(gallery);
    });
    
    // Function to update featured project content
    function updateFeaturedProject(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        // Update title
        const titleElement = document.querySelector('.project-card--featured .project-card__title');
        if (titleElement) {
            titleElement.textContent = project.title;
        }
        
        // Update description
        const descriptionElement = document.querySelector('.project-card--featured .project-card__description');
        if (descriptionElement) {
            descriptionElement.textContent = project.description;
        }
        
        // Update gallery
        const mainImage = document.querySelector('.project-gallery__main-image');
        const thumbnailContainer = document.querySelector('.project-gallery__thumbnails');
        
        if (mainImage && thumbnailContainer && project.gallery.length > 0) {
            // Update main image with first gallery image
            mainImage.src = project.gallery[0].src;
            mainImage.alt = project.gallery[0].alt;
            
            // Clear existing thumbnails
            thumbnailContainer.innerHTML = '';
            
            // Create new thumbnails
            project.gallery.forEach((image, index) => {
                const thumbnailButton = document.createElement('button');
                thumbnailButton.className = `project-gallery__thumbnail${index === 0 ? ' project-gallery__thumbnail--active' : ''}`;
                thumbnailButton.setAttribute('data-image', image.src);
                thumbnailButton.setAttribute('data-alt', image.alt);
                
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = image.src;
                thumbnailImg.alt = image.title;
                
                thumbnailButton.appendChild(thumbnailImg);
                thumbnailContainer.appendChild(thumbnailButton);
                
                // Add click event for new thumbnail
                thumbnailButton.addEventListener('click', function() {
                    // Remove active class from all thumbnails
                    thumbnailContainer.querySelectorAll('.project-gallery__thumbnail').forEach(t => 
                        t.classList.remove('project-gallery__thumbnail--active')
                    );
                    
                    // Add active class to clicked thumbnail
                    this.classList.add('project-gallery__thumbnail--active');
                    
                    // Update main image
                    mainImage.src = this.getAttribute('data-image');
                    mainImage.alt = this.getAttribute('data-alt');
                });
                
                // Add keyboard support
                thumbnailButton.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
        }
        
        // Add visual feedback to show which project is selected
        const allClickableCards = document.querySelectorAll('.project-card--clickable');
        allClickableCards.forEach(card => {
            card.classList.remove('project-card--selected');
        });
        
        const selectedCard = document.querySelector(`[data-project-id="${projectId}"]`);
        if (selectedCard) {
            selectedCard.classList.add('project-card--selected');
        }
    }
    
    // Project Switching Functionality
    const clickableProjectCards = document.querySelectorAll('.project-card--clickable');
    clickableProjectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't interfere with mobile expand functionality
            if (isMobileDevice()) return;
            
            const projectId = this.getAttribute('data-project-id');
            if (projectId) {
                updateFeaturedProject(projectId);
            }
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = this.getAttribute('data-project-id');
                if (projectId && !isMobileDevice()) {
                    updateFeaturedProject(projectId);
                }
            }
        });
        
        // Make cards focusable for keyboard navigation
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${card.querySelector('.project-card__title').textContent} in featured section`);
    });
}); 
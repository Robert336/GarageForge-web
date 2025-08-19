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
                src: './assets/images/projects/fan-turntable/turntable_photo_with_fans.webp',
                alt: 'Remote-Controlled Fan Turntable - Main View',
                title: 'Main view'
            },
            {
                src: './assets/images/projects/fan-turntable/turntable_insides.webp',
                alt: 'Remote-Controlled Fan Turntable - Motor Detail',
                title: 'Motor detail'
            },
            {
                src: './assets/images/projects/fan-turntable/turntable_demo_clonetrooper.webp',
                alt: 'Remote-Controlled Fan Turntable - Remote Control',
                title: 'Remote control'
            },
            {
                src: './assets/images/projects/fan-turntable/detail3.jpg',
                alt: 'Remote-Controlled Fan Turntable - BB Bearing System',
                title: 'BB bearing system'
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
    
    // ==========================================================================
    // CTA FORM: Submit email to Google Apps Script endpoint
    // ==========================================================================
    const ctaForm = document.querySelector('.cta__form');
    if (ctaForm) {
        const ctaInput = ctaForm.querySelector('.cta__input');
        const ctaButton = ctaForm.querySelector('.cta__button');
        const footerText = ctaForm.querySelector('.cta__footer-text');
        const endpoint = ctaForm.getAttribute('data-endpoint') || '';

        ctaForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            if (!ctaInput) return;

            const email = ctaInput.value.trim();
            if (!email) return;

            // Check if the email is in a valid format (simple regex)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                if (footerText) {
                    footerText.textContent = 'Please enter a valid email address.';
                    footerText.style.color = 'red';
                }
                if (ctaButton) {
                    ctaButton.disabled = false;
                    ctaButton.textContent = originalButtonText;
                }
                return;
            }

            // Basic disable and feedback
            const originalButtonText = ctaButton ? ctaButton.textContent : '';
            if (ctaButton) {
                ctaButton.disabled = true;
                ctaButton.textContent = 'Sending…';
            }

            // Prepare payload
            const timestampIso = new Date().toISOString();
            const payload = { email, timestamp: timestampIso };

            // Prefer JSON POST. If endpoint is empty, just simulate success UI.
            let succeeded = false;
            try {
                if (endpoint) {
                    // For Google Apps Script, enable one of the following:
                    // - JSON endpoint in doPost(e) parsing JSON body
                    // - or accept form-urlencoded below

                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                        // If your GAS is deployed without CORS, you may need no-cors mode.
                        // mode: 'no-cors',
                    });

                    // In no-cors, response.ok is always false/opaque. We treat as success optimistically.
                    if (response.type === 'opaque') {
                        succeeded = true;
                    } else {
                        succeeded = response.ok;
                    }
                } else {
                    // No endpoint configured; do not send, but show success for UX during dev
                    succeeded = true;
                }
            } catch (err) {
                // Retry once using form-url-encoded as a fallback (often easier for GAS)
                try {
                    if (endpoint) {
                        const formData = new URLSearchParams();
                        formData.set('email', email);
                        formData.set('timestamp', timestampIso);
                        const resp2 = await fetch(endpoint, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: formData.toString(),
                            // mode: 'no-cors',
                        });
                        succeeded = resp2.type === 'opaque' ? true : resp2.ok;
                    }
                } catch (e2) {
                    succeeded = false;
                }
            }

            // UI feedback
            if (succeeded) {
                if (ctaButton) ctaButton.textContent = 'Sent!';
                if (footerText) footerText.textContent = 'Thanks! We\'ll be in touch shortly.';
                ctaInput.value = '';
            } else {
                if (ctaButton) ctaButton.textContent = 'Try again';
                if (footerText) footerText.textContent = 'Something went wrong. Please email us directly.';
            }

            // Re-enable button after a short delay for UX
            setTimeout(() => {
                if (ctaButton) {
                    ctaButton.disabled = false;
                    ctaButton.textContent = originalButtonText || 'Get a Quote';
                }
            }, 2500);
        });
    }

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

    // ==========================================================================
    // FAQ ACCORDION FUNCTIONALITY
    // ==========================================================================
    
    // Initialize FAQ accordion
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                toggleFaqItem(item, question, answer);
            });
            
            // Add keyboard support
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaqItem(item, question, answer);
                }
            });
        }
    });
    
    function toggleFaqItem(item, question, answer) {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherQuestion = otherItem.querySelector('.faq__question');
                const otherAnswer = otherItem.querySelector('.faq__answer');
                
                if (otherQuestion && otherAnswer) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherAnswer.setAttribute('aria-hidden', 'true');
                    otherItem.removeAttribute('data-expanded');
                }
            }
        });
        
        // Toggle current item
        if (isExpanded) {
            question.setAttribute('aria-expanded', 'false');
            answer.setAttribute('aria-hidden', 'true');
            item.removeAttribute('data-expanded');
        } else {
            question.setAttribute('aria-expanded', 'true');
            answer.setAttribute('aria-hidden', 'false');
            item.setAttribute('data-expanded', 'true');
        }
    }
});
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
    
    // STL Upload and Quote Calculator functionality
    const fileUploadArea = document.getElementById('file-upload-area');
    const fileInput = document.getElementById('stl-file-input');
    const fileInfo = document.getElementById('file-info');
    const quoteCalculator = document.getElementById('quote-calculator');
    const quoteDisplay = document.getElementById('quote-display');
    
    if (fileUploadArea && fileInput) {
        // File upload handling
        fileUploadArea.addEventListener('click', () => fileInput.click());
        
        fileUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUploadArea.classList.add('dragover');
        });
        
        fileUploadArea.addEventListener('dragleave', () => {
            fileUploadArea.classList.remove('dragover');
        });
        
        fileUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files[0]);
            }
        });
        
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
            }
        });
        
        function handleFileUpload(file) {
            if (!file.name.toLowerCase().endsWith('.stl')) {
                alert('Please upload an STL file.');
                return;
            }
            
            if (file.size > 50 * 1024 * 1024) { // 50MB limit
                alert('File size must be under 50MB.');
                return;
            }
            
            // Display file info
            document.getElementById('file-name').textContent = file.name;
            document.getElementById('file-size').textContent = formatFileSize(file.size);
            fileInfo.style.display = 'block';
            quoteCalculator.style.display = 'block';
            
            // Store file size for calculations
            window.uploadedFileSize = file.size;
            
            // Trigger quote calculation if options are selected
            calculateQuote();
        }
        
        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
    }
    
    // Quote calculator functionality
    const materialSelect = document.getElementById('material-select');
    const qualitySelect = document.getElementById('quality-select');
    const quantityInput = document.getElementById('quantity-input');
    const rushCheckbox = document.getElementById('rush-checkbox');
    
    if (materialSelect && qualitySelect && quantityInput && rushCheckbox) {
        [materialSelect, qualitySelect, quantityInput, rushCheckbox].forEach(element => {
            element.addEventListener('change', calculateQuote);
        });
        
        function calculateQuote() {
            if (!window.uploadedFileSize || !materialSelect.value || !qualitySelect.value) {
                if (quoteDisplay) quoteDisplay.style.display = 'none';
                return;
            }
            
            // Estimate weight based on file size (rough approximation)
            // This is a simplified calculation - real implementation would analyze STL geometry
            const estimatedWeight = Math.max(10, Math.round(window.uploadedFileSize / 10000)); // Very rough estimate
            
            const materialPrice = parseFloat(materialSelect.options[materialSelect.selectedIndex].dataset.price);
            const qualityMultiplier = parseFloat(qualitySelect.options[qualitySelect.selectedIndex].dataset.multiplier);
            const quantity = parseInt(quantityInput.value) || 1;
            const isRush = rushCheckbox.checked;
            
            // Calculate costs
            const baseCost = estimatedWeight * materialPrice;
            const qualityAdjustedCost = baseCost * qualityMultiplier;
            const quantityCost = qualityAdjustedCost * quantity;
            const rushMultiplier = isRush ? 1.5 : 1;
            const totalCost = quantityCost * rushMultiplier;
            const rushCost = isRush ? quantityCost * 0.5 : 0;
            
            // Update display
            document.getElementById('estimated-weight').textContent = estimatedWeight + ' grams';
            document.getElementById('material-cost').textContent = '$' + baseCost.toFixed(2);
            document.getElementById('quality-adjustment').textContent = '$' + (qualityAdjustedCost - baseCost).toFixed(2);
            document.getElementById('quantity-display').textContent = '×' + quantity;
            document.getElementById('total-estimate').textContent = '$' + totalCost.toFixed(2);
            
            const rushLine = document.getElementById('rush-line');
            if (isRush) {
                document.getElementById('rush-cost').textContent = '+$' + rushCost.toFixed(2);
                rushLine.style.display = 'flex';
            } else {
                rushLine.style.display = 'none';
            }
            
            quoteDisplay.style.display = 'block';
        }
    }
    
    // Scroll to contact form function
    window.scrollToContactForm = function() {
        const contactForm = document.getElementById('form-title');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
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
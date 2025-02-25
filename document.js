document.addEventListener('DOMContentLoaded', function() {
    // Property search functionality
    const searchForm = document.getElementById('property-search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, this would submit to a backend
            // For now, just redirect to the properties page
            window.location.href = 'properties.html';
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (name.value.trim() === '') {
                isValid = false;
                highlightError(name);
            }
            
            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                isValid = false;
                highlightError(email);
            }
            
            if (message.value.trim() === '') {
                isValid = false;
                highlightError(message);
            }
            
            if (isValid) {
                // Display success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.textContent = 'Your message has been sent. We\'ll get back to you soon!';
                contactForm.appendChild(successMessage);
                
                // Reset the form
                contactForm.reset();
                
                // In a real application, this would submit to a backend
                // For demonstration, we're just showing a success message
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                highlightError(emailInput);
            } else {
                // Show success message
                const formGroup = emailInput.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-2';
                successMessage.textContent = 'Thank you for subscribing!';
                formGroup.parentElement.appendChild(successMessage);
                
                // Reset the form
                newsletterForm.reset();
            }
        });
    }
    
    // Property filter functionality
    const filterForm = document.getElementById('property-filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, this would filter properties based on criteria
            // For demonstration, we'll just reload the page
            window.location.reload();
        });
    }
});

// Helper functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function highlightError(input) {
    input.classList.add('is-invalid');
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.classList.remove('is-invalid');
        }
    });
}

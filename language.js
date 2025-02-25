// Language translations
const translations = {
    'en': {
        'home': 'Home',
        'properties': 'Properties',
        'services': 'Services',
        'about': 'About',
        'blog': 'Blog',
        'contact': 'Contact',
        'hero-title': 'Your Las Vegas Real Estate Specialist',
        'hero-subtitle': 'Helping French and Romanian clients find their dream homes in Las Vegas',
        'view-properties': 'View Properties',
        'contact-me': 'Contact Me',
        'featured-properties': 'Featured Properties',
        'view-details': 'View Details',
        'view-all-properties': 'View All Properties',
        'my-services': 'My Services',
        'buying': 'Buying Properties',
        'selling': 'Selling Properties',
        'relocation': 'International Relocation',
        'buying-desc': 'Expert guidance through the entire home buying process in Las Vegas.',
        'selling-desc': 'Strategic marketing and negotiation to sell your property at the best price.',
        'relocation-desc': 'Specialized assistance for French and Romanian clients moving to Las Vegas.',
        'testimonials': 'What My Clients Say',
        'quick-links': 'Quick Links',
        'contact-info': 'Contact Information',
        'newsletter': 'Newsletter',
        'newsletter-desc': 'Subscribe to get the latest property listings and news.',
        'subscribe': 'Subscribe',
        
        // Properties page
        'property-type': 'Property Type',
        'price-range': 'Price Range',
        'bedrooms': 'Bedrooms',
        'bathrooms': 'Bathrooms',
        'filter': 'Filter Properties',
        
        // Contact page
        'get-in-touch': 'Get In Touch',
        'contact-desc': 'Have questions about Las Vegas real estate? Contact me for personalized assistance in English, French, or Romanian.',
        'office-address': 'Office Address',
        'phone': 'Phone',
        'email': 'Email',
        'business-hours': 'Business Hours',
        'send-message': 'Send a Message',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'your-phone': 'Your Phone',
        'subject': 'Subject',
        'message': 'Message',
        'privacy-consent': 'I agree to the privacy policy',
        
        // About page
        'about-me-title': 'Marie Durant',
        'agent-title': 'Las Vegas Real Estate Specialist',
        'about-me-desc': 'With over 15 years of experience in Las Vegas real estate, I specialize in helping French and Romanian clients find their perfect homes or investment properties in the vibrant Las Vegas market.',
        'about-me-desc2': 'Born in Paris and fluent in French, English, and Romanian, I understand the unique needs of international buyers and the challenges they face when relocating or investing in a new country.',
        'experience': 'Experience:',
        'specialization': 'Specialization:',
        'languages': 'Languages:',
        'certifications': 'Certifications:',
        'my-values': 'My Values',
        'integrity': 'Integrity',
        'client-first': 'Client First',
        'cultural-sensitivity': 'Cultural Sensitivity',
        'integrity-desc': 'Honest communication and transparent dealings in every transaction.',
        'client-first-desc': 'Your needs and goals are always my top priority.',
        'cultural-sensitivity-desc': 'Understanding and respecting cultural differences in the home buying process.',
        'achievements': 'Achievements & Recognition',
        'homes-sold': 'Homes Sold',
        'client-satisfaction': 'Client Satisfaction',
        'international-clients': 'International Clients',
        'industry-awards': 'Industry Awards'
    },
    'fr': {
        'home': 'Accueil',
        'properties': 'Propriétés',
        'services': 'Services',
        'about': 'À Propos',
        'blog': 'Blog',
        'contact': 'Contact',
        'hero-title': 'Votre Spécialiste Immobilier à Las Vegas',
        'hero-subtitle': 'Aider les clients français à trouver leur maison de rêve à Las Vegas',
        'view-properties': 'Voir les Propriétés',
        'contact-me': 'Me Contacter',
        'featured-properties': 'Propriétés en Vedette',
        'view-details': 'Voir les Détails',
        'view-all-properties': 'Voir Toutes les Propriétés',
        'my-services': 'Mes Services',
        'buying': 'Achat de Propriétés',
        'selling': 'Vente de Propriétés',
        'relocation': 'Relocalisation Internationale',
        'buying-desc': 'Conseils d\'experts tout au long du processus d\'achat à Las Vegas.',
        'selling-desc': 'Marketing stratégique et négociation pour vendre votre propriété au meilleur prix.',
        'relocation-desc': 'Assistance spécialisée pour les clients français déménageant à Las Vegas.',
        'testimonials': 'Ce que Disent Mes Clients',
        'quick-links': 'Liens Rapides',
        'contact-info': 'Coordonnées',
        'newsletter': 'Newsletter',
        'newsletter-desc': 'Abonnez-vous pour recevoir les dernières annonces immobilières et actualités.',
        'subscribe': 'S\'abonner'
    },
    'ro': {
        'home': 'Acasă',
        'properties': 'Proprietăți',
        'services': 'Servicii',
        'about': 'Despre',
        'blog': 'Blog',
        'contact': 'Contact',
        'hero-title': 'Specialistul dvs. Imobiliar în Las Vegas',
        'hero-subtitle': 'Ajutăm clienții români să își găsească casa visurilor în Las Vegas',
        'view-properties': 'Vezi Proprietăți',
        'contact-me': 'Contactează-mă',
        'featured-properties': 'Proprietăți Recomandate',
        'view-details': 'Vezi Detalii',
        'view-all-properties': 'Vezi Toate Proprietățile',
        'my-services': 'Serviciile Mele',
        'buying': 'Cumpărarea Proprietăților',
        'selling': 'Vânzarea Proprietăților',
        'relocation': 'Relocare Internațională',
        'buying-desc': 'Îndrumare expertă în întregul proces de cumpărare în Las Vegas.',
        'selling-desc': 'Marketing strategic și negociere pentru a vă vinde proprietatea la cel mai bun preț.',
        'relocation-desc': 'Asistență specializată pentru clienții români care se mută în Las Vegas.',
        'testimonials': 'Ce Spun Clienții Mei',
        'quick-links': 'Link-uri Rapide',
        'contact-info': 'Informații de Contact',
        'newsletter': 'Newsletter',
        'newsletter-desc': 'Abonați-vă pentru a primi cele mai recente anunțuri imobiliare și știri.',
        'subscribe': 'Abonare'
    }
};

// Function to change the language
function changeLanguage(lang) {
    // Store the selected language in local storage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else {
                    element.value = translations[lang][key];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update the document language
    document.documentElement.lang = lang;
}

// Load the selected language when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);
});

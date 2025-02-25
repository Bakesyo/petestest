// Language translation system
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
    'buying-desc': 'Expert guidance through the entire home buying process in Las Vegas.',
    'selling': 'Selling Properties',
    'selling-desc': 'Strategic marketing and negotiation to sell your property at the best price.',
    'relocation': 'International Relocation',
    'relocation-desc': 'Specialized assistance for French and Romanian clients moving to Las Vegas.',
    'testimonials': 'What My Clients Say',
    'quick-links': 'Quick Links',
    'contact-info': 'Contact Information',
    'newsletter': 'Newsletter',
    'newsletter-desc': 'Subscribe to get the latest property listings and news.',
    'subscribe': 'Subscribe'
  },
  'fr': {
    'home': 'Accueil',
    'properties': 'Propriétés',
    'services': 'Services',
    'about': 'À Propos',
    'blog': 'Blog',
    'contact': 'Contact',
    'hero-title': 'Votre Spécialiste Immobilier à Las Vegas',
    'hero-subtitle': 'Aidant les clients français à trouver leur maison de rêve à Las Vegas',
    'view-properties': 'Voir les Propriétés',
    'contact-me': 'Me Contacter',
    'featured-properties': 'Propriétés en Vedette',
    'view-details': 'Voir les Détails',
    'view-all-properties': 'Voir Toutes les Propriétés',
    'my-services': 'Mes Services',
    'buying': 'Achat de Propriétés',
    'buying-desc': 'Conseils d\'expert tout au long du processus d\'achat d\'une maison à Las Vegas.',
    'selling': 'Vente de Propriétés',
    'selling-desc': 'Marketing stratégique et négociation pour vendre votre propriété au meilleur prix.',
    'relocation': 'Relocalisation Internationale',
    'relocation-desc': 'Assistance spécialisée pour les clients français qui déménagent à Las Vegas.',
    'testimonials': 'Ce que Disent Mes Clients',
    'quick-links': 'Liens Rapides',
    'contact-info': 'Coordonnées',
    'newsletter': 'Bulletin d\'Information',
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
    'hero-title': 'Specialistul Tău Imobiliar în Las Vegas',
    'hero-subtitle': 'Ajutăm clienții români să-și găsească casa visurilor în Las Vegas',
    'view-properties': 'Vezi Proprietățile',
    'contact-me': 'Contactează-mă',
    'featured-properties': 'Proprietăți Recomandate',
    'view-details': 'Vezi Detalii',
    'view-all-properties': 'Vezi Toate Proprietățile',
    'my-services': 'Serviciile Mele',
    'buying': 'Cumpărarea de Proprietăți',
    'buying-desc': 'Îndrumare de expert în întregul proces de cumpărare a unei case în Las Vegas.',
    'selling': 'Vânzarea de Proprietăți',
    'selling-desc': 'Marketing strategic și negociere pentru a vinde proprietatea la cel mai bun preț.',
    'relocation': 'Relocare Internațională',
    'relocation-desc': 'Asistență specializată pentru clienții români care se mută în Las Vegas.',
    'testimonials': 'Ce Spun Clienții Mei',
    'quick-links': 'Linkuri Rapide',
    'contact-info': 'Informații de Contact',
    'newsletter': 'Buletin Informativ',
    'newsletter-desc': 'Abonează-te pentru a primi cele mai recente listări și știri imobiliare.',
    'subscribe': 'Abonare'
  }
};

// Set default language
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
  currentLanguage = lang;
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Update all elements with data-lang attribute
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Add active class to selected language button
  document.querySelectorAll('.language-selector button').forEach(btn => {
    if (btn.textContent.toLowerCase().includes(lang)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language preference
  const savedLang = localStorage.getItem('preferredLanguage');
  
  // Apply saved language or default to English
  changeLanguage(savedLang || 'en');
});

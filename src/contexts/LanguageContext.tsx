
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero section
    'hero.title': 'CaroFlex',
    'hero.subtitle': 'Premium Custom Apparel Printing & Embroidery',
    'hero.description': 'Transform your ideas into stunning custom shirts, hoodies, and apparel. Professional quality printing and embroidery services for individuals and businesses.',
    'hero.getQuote': 'Get Custom Quote',
    'hero.viewWork': 'View Our Work',
    
    // Services section
    'services.title': 'Our Services',
    'services.description': 'From screen printing to embroidery, we offer comprehensive custom apparel solutions for all your printing needs.',
    'services.screenPrint.title': 'DTF Printing',
    'services.screenPrint.description': 'High-quality screen printing for bulk orders. Perfect for events, teams, and promotional merchandise.',
    'services.screenPrint.feature1': 'Vibrant colors',
    'services.screenPrint.feature2': 'Durable prints',
    'services.screenPrint.feature3': 'Cost-effective for large orders',
    'services.screenPrint.feature4': 'Multiple color options',
    'services.embroidery.title': 'Embroidery',
    'services.embroidery.description': 'Premium embroidery services for a professional, polished look. Ideal for corporate apparel and uniforms.',
    'services.embroidery.feature1': 'Professional finish',
    'services.embroidery.feature2': 'Long-lasting',
    'services.embroidery.feature3': 'Corporate logos',
    'services.embroidery.feature4': 'Multiple thread colors',
    'services.heatTransfer.title': 'Heat Transfer',
    'services.heatTransfer.description': 'Perfect for small orders and detailed designs. Great for personalized gifts and custom artwork.',
    'services.heatTransfer.feature1': 'Detailed designs',
    'services.heatTransfer.feature2': 'Photo quality',
    'services.heatTransfer.feature3': 'Small order friendly',
    'services.heatTransfer.feature4': 'Quick turnaround',
    
    // Portfolio section
    'portfolio.title': 'Our Work',
    'portfolio.description': 'Take a look at some of our recent projects. From corporate apparel to custom designs, we bring your vision to life with precision and quality.',
    
    // Contact section
    'contact.title': 'Get In Touch',
    'contact.description': 'Ready to bring your custom apparel ideas to life? Contact us for a free quote and let\'s discuss your printing needs.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Service Needed',
    'contact.form.message': 'Project Details',
    'contact.form.messagePlaceholder': 'Tell us about your project - quantity, design ideas, timeline, etc.',
    'contact.form.submit': 'Get Quote',
    'contact.visit.title': 'Visit Our Shop',
    'contact.call.title': 'Call Us',
    'contact.email.title': 'Email Us',
    
    // Footer
    'footer.description': 'Your trusted partner for premium custom apparel printing and embroidery services. Quality craftsmanship, competitive pricing, and exceptional customer service.',
    'footer.services': 'Services',
    'footer.portfolio': 'Portfolio',
    'footer.contact': 'Contact',
    'footer.quote': 'Get Quote',
    'footer.copyright': '© 2025 CaroFlex Printing. All rights reserved. | Bringing your designs to life, one print at a time.'
  },
  fr: {
    // Hero section
    'hero.title': 'CaroFlex',
    'hero.subtitle': 'Impression et Broderie de Vêtements Personnalisés Premium',
    'hero.description': 'Transformez vos idées en magnifiques t-shirts, sweats à capuche et vêtements personnalisés. Services d\'impression et de broderie de qualité professionnelle pour particuliers et entreprises.',
    'hero.getQuote': 'Obtenir un Devis',
    'hero.viewWork': 'Voir Nos Réalisations',
    
    // Services section
    'services.title': 'Nos Services',
    'services.description': 'De la sérigraphie à la broderie, nous offrons des solutions complètes de vêtements personnalisés pour tous vos besoins d\'impression.',
    'services.screenPrint.title': 'Impression DTF',
    'services.screenPrint.description': 'Sérigraphie de haute qualité pour les commandes en gros. Parfait pour les événements, équipes et marchandises promotionnelles.',
    'services.screenPrint.feature1': 'Couleurs vives',
    'services.screenPrint.feature2': 'Impressions durables',
    'services.screenPrint.feature3': 'Économique pour grandes commandes',
    'services.screenPrint.feature4': 'Options de couleurs multiples',
    'services.embroidery.title': 'Broderie',
    'services.embroidery.description': 'Services de broderie premium pour un look professionnel et soigné. Idéal pour les vêtements d\'entreprise et uniformes.',
    'services.embroidery.feature1': 'Finition professionnelle',
    'services.embroidery.feature2': 'Longue durée',
    'services.embroidery.feature3': 'Logos d\'entreprise',
    'services.embroidery.feature4': 'Couleurs de fil multiples',
    'services.heatTransfer.title': 'Transfert Thermique',
    'services.heatTransfer.description': 'Parfait pour les petites commandes et designs détaillés. Idéal pour cadeaux personnalisés et œuvres d\'art personnalisées.',
    'services.heatTransfer.feature1': 'Designs détaillés',
    'services.heatTransfer.feature2': 'Qualité photo',
    'services.heatTransfer.feature3': 'Adapté aux petites commandes',
    'services.heatTransfer.feature4': 'Délai rapide',
    
    // Portfolio section
    'portfolio.title': 'Nos Réalisations',
    'portfolio.description': 'Découvrez quelques-uns de nos projets récents. Des vêtements d\'entreprise aux designs personnalisés, nous donnons vie à votre vision avec précision et qualité.',
    
    // Contact section
    'contact.title': 'Contactez-Nous',
    'contact.description': 'Prêt à donner vie à vos idées de vêtements personnalisés ? Contactez-nous pour un devis gratuit et discutons de vos besoins d\'impression.',
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.service': 'Service Requis',
    'contact.form.message': 'Détails du Projet',
    'contact.form.messagePlaceholder': 'Parlez-nous de votre projet - quantité, idées de design, délais, etc.',
    'contact.form.submit': 'Obtenir un Devis',
    'contact.visit.title': 'Visitez Notre Boutique',
    'contact.call.title': 'Appelez-Nous',
    'contact.email.title': 'Envoyez-nous un Email',
    
    // Footer
    'footer.description': 'Votre partenaire de confiance pour les services d\'impression et de broderie de vêtements personnalisés premium. Artisanat de qualité, prix compétitifs et service client exceptionnel.',
    'footer.services': 'Services',
    'footer.portfolio': 'Portfolio',
    'footer.contact': 'Contact',
    'footer.quote': 'Obtenir un Devis',
    'footer.copyright': '© 2025 CaroFlex Printing. Tous droits réservés. | Donnons vie à vos designs, une impression à la fois.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

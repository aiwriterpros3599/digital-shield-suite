
import { useState, useEffect } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt';

const translations = {
  en: {
    dashboard: 'Dashboard',
    humanizer: 'AI Humanizer',
    verification: 'Image Verification',
    scanner: 'Content Scanner',
    welcome: 'Welcome back!',
    overview: 'Here\'s what\'s happening with your brand protection today.',
    recentActivity: 'Recent Activity',
    quickActions: 'Quick Actions',
    viewAll: 'View All',
    launchTool: 'Launch Tool',
    settings: 'Settings',
    profile: 'Profile',
    billing: 'Billing',
    signOut: 'Sign Out'
  },
  es: {
    dashboard: 'Panel',
    humanizer: 'Humanizador IA',
    verification: 'Verificación de Imágenes',
    scanner: 'Escáner de Contenido',
    welcome: '¡Bienvenido de nuevo!',
    overview: 'Esto es lo que está pasando con tu protección de marca hoy.',
    recentActivity: 'Actividad Reciente',
    quickActions: 'Acciones Rápidas',
    viewAll: 'Ver Todo',
    launchTool: 'Lanzar Herramienta',
    settings: 'Configuración',
    profile: 'Perfil',
    billing: 'Facturación',
    signOut: 'Cerrar Sesión'
  },
  fr: {
    dashboard: 'Tableau de Bord',
    humanizer: 'Humaniseur IA',
    verification: 'Vérification d\'Images',
    scanner: 'Scanner de Contenu',
    welcome: 'Bon retour !',
    overview: 'Voici ce qui se passe avec votre protection de marque aujourd\'hui.',
    recentActivity: 'Activité Récente',
    quickActions: 'Actions Rapides',
    viewAll: 'Voir Tout',
    launchTool: 'Lancer l\'Outil',
    settings: 'Paramètres',
    profile: 'Profil',
    billing: 'Facturation',
    signOut: 'Se Déconnecter'
  },
  de: {
    dashboard: 'Dashboard',
    humanizer: 'KI-Humanisierer',
    verification: 'Bildverifikation',
    scanner: 'Content-Scanner',
    welcome: 'Willkommen zurück!',
    overview: 'Hier ist, was heute mit Ihrem Markenschutz passiert.',
    recentActivity: 'Letzte Aktivität',
    quickActions: 'Schnellaktionen',
    viewAll: 'Alle Anzeigen',
    launchTool: 'Tool Starten',
    settings: 'Einstellungen',
    profile: 'Profil',
    billing: 'Abrechnung',
    signOut: 'Abmelden'
  },
  pt: {
    dashboard: 'Painel',
    humanizer: 'Humanizador IA',
    verification: 'Verificação de Imagens',
    scanner: 'Scanner de Conteúdo',
    welcome: 'Bem-vindo de volta!',
    overview: 'Aqui está o que está acontecendo com sua proteção de marca hoje.',
    recentActivity: 'Atividade Recente',
    quickActions: 'Ações Rápidas',
    viewAll: 'Ver Todos',
    launchTool: 'Lançar Ferramenta',
    settings: 'Configurações',
    profile: 'Perfil',
    billing: 'Faturamento',
    signOut: 'Sair'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && translations[saved]) return saved;
      const browserLang = navigator.language.split('-')[0] as Language;
      return translations[browserLang] ? browserLang : 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return { language, setLanguage, t };
};

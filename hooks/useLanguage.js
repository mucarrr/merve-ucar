import { useState, useEffect, useCallback } from 'react';

const useLanguage = () => {
  const [language, setLanguage] = useState('tr'); // Default Türkçe
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Önce localStorage'dan kontrol et
        const savedLanguage = localStorage.getItem('preferred-language');
        if (savedLanguage) {
          setLanguage(savedLanguage);
          setLoading(false);
          return;
        }

        // Browser dil ayarını kontrol et
        const browserLang = navigator.language || navigator.languages?.[0];
        const isTurkishBrowser = browserLang?.startsWith('tr');
        
        // IP'den ülke bilgisini al
        let country = null;
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          country = data.country_code;
        } catch (error) {
          console.log('IP detection failed, using browser language only');
        }
        
        // Dil belirleme mantığı
        if (isTurkishBrowser || country === 'TR') {
          setLanguage('tr');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.error('Language detection error:', error);
        setLanguage('tr'); // Fallback to Turkish
      } finally {
        setLoading(false);
      }
    };

    detectLanguage();
  }, []);

  const switchLanguage = useCallback((newLang) => {
    setLanguage(newLang);
    localStorage.setItem('preferred-language', newLang);
    // Force re-render by dispatching event with new language
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));
  }, []);

  return { language, loading, switchLanguage };
};

export default useLanguage;

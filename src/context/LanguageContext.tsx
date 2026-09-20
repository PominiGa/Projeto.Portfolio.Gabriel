import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

export type Lang = 'pt' | 'en';
export type Translations = (typeof translations)[Lang];

interface LangCtx { lang: Lang; toggleLang: () => void; T: Translations; }

const LangContext = createContext<LangCtx>({
  lang: 'pt', toggleLang: () => {}, T: translations.pt,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    (localStorage.getItem('gp-lang') as Lang) || 'pt'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('gp-lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(l => (l === 'pt' ? 'en' : 'pt'));

  return (
    <LangContext.Provider value={{ lang, toggleLang, T: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLanguage = () => useContext(LangContext);
'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type Locale = 'en' | 'fa';

const defaultLocale: Locale = 'en';

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Locale) || defaultLocale;
    }
    return defaultLocale;
  });

  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    import(`@/locales/${locale}/common.json`)
      .then((mod) => setMessages(mod))
      .catch((err) => console.error('Failed to load translations:', err));

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', locale);
    }
  }, [locale]);

  const t = (key: string) => messages[key] || key;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

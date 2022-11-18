import { resolveBrowserLocale } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from 'ra-language-english';
import es from 'ra-language-spanish';

const translations = { en, es };

export const i18nProvider = polyglotI18nProvider(
    locale => translations[locale] ? translations[locale] : translations.en,
    resolveBrowserLocale(),
    [{ locale: 'en', name: 'English' }, { locale: 'es', name: 'Español' }],
);

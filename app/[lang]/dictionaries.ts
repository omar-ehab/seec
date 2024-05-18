import 'server-only';

const dictionaries = {
  en: () =>
    import('../i18n/locales/en/translations.json').then(
      (module) => module.default
    ),
  ar: () =>
    import('../i18n/locales/ar/translations.json').then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: 'en' | 'ar') =>
  dictionaries[locale]();

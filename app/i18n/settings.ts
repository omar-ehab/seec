export const fallbackLng = 'ar';
export const languages: LangType[] = [fallbackLng, 'en'];
export const defaultNS = 'translations';

export function getOptions(
  lang: LangType = fallbackLng,
  ns: string = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

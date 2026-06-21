import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

const dictionaries: Record<string, any> = { en, ar };

export function useTranslations(locale: string | undefined) {
  // Fallback to default language if undefined
  const lang = locale && dictionaries[locale] ? locale : 'en';
  const dict = dictionaries[lang];

  // The translation function t('nested.key')
  return function t(key: string): string {
  if (typeof key !== 'string') return String(key ?? '');
  return key.split('.').reduce((obj: any, i) => obj?.[i], dict) ?? key;
};
}

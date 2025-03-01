import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Try to get the user's language from cookies
  const localeCookie = (await cookies()).get('locale');
  // Fallback to English if no cookie is set
  const locale = localeCookie?.value || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
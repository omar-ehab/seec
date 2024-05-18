import { headers } from 'next/headers';

export default function getServerPathname() {
  const headersList = headers();
  const fullUrl = headersList.get('referer') || '';
  return `/${fullUrl.split('/').slice(3).join('/')}`;
}

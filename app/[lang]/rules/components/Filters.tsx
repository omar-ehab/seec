'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters({ lang }: { lang: LangType }) {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul className={'text-sub_p flex items-center gap-4'}>
      <li>
        <Link
          href={`/${lang}/rules`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/rules` && params.get('type') === null,
          })}
        >
          الكل
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/rules?type=systems`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/rules` && params.get('type') === 'systems',
          })}
        >
          الأنظمة
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/rules?type=regulations`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/rules` &&
              params.get('type') === 'regulations',
          })}
        >
          اللوائح
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/rules?type=evidence`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/rules` &&
              params.get('type') === 'evidence',
          })}
        >
          الأدلة
        </Link>
      </li>
    </ul>
  );
}

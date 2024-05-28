'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters({ lang }: { lang: LangType }) {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul className={'flex items-center gap-4 text-[#7E8989]'}>
      <li>
        <Link
          href={`/${lang}/rules`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
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
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
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
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
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
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
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

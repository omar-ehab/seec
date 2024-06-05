'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters({ lang }: { lang: LangType }) {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul className={'flex items-center gap-6 text-sub_p'}>
      <li>
        <Link
          href={`/${lang}/events`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/events` && params.get('type') === null,
          })}
        >
          الكل
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/events?type=coming`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/events` && params.get('type') === 'coming',
          })}
        >
          الفعاليات القادمة
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/events?type=previous`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/events` &&
              params.get('type') === 'previous',
          })}
        >
          الفعاليات السابقة
        </Link>
      </li>
    </ul>
  );
}

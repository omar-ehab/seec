'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters({ lang }: { lang: LangType }) {
  const params = useSearchParams();

  return (
    <ul
      className={'flex items-center gap-6 text-center text-sub_p xs:text-start'}
    >
      <li>
        <Link
          href={`/${lang}/development-and-sharing`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === null,
          })}
        >
          الكل
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/development-and-sharing?type=current`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'current',
          })}
        >
          الحالية
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/development-and-sharing?type=finished`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'finished',
          })}
        >
          المنتهية
        </Link>
      </li>
    </ul>
  );
}

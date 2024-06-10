'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters({ lang }: { lang: LangType }) {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul
      className={'flex items-center gap-6 text-center text-sub_p xs:text-start'}
    >
      <li>
        <Link
          href={`/${lang}/media-library`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/media-library` &&
              params.get('type') === null,
          })}
        >
          الكل
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/media-library?type=images`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/media-library` &&
              params.get('type') === 'images',
          })}
        >
          الصور
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/media-library?type=videos`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              pathname === `/${lang}/media-library` &&
              params.get('type') === 'videos',
          })}
        >
          الفيديو
        </Link>
      </li>
    </ul>
  );
}

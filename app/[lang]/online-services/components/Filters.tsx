'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters() {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul className={'text-sub_p flex items-center gap-4'}>
      <li>
        <Link
          href={pathname}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === null,
          })}
        >
          الكل
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=programs`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'programs',
          })}
        >
          البرامج
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=sectors`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'sectors',
          })}
        >
          القطاعات
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=initiatives`}
          className={cn('text-sub_p flex items-center hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'initiatives',
          })}
        >
          مبادرات
        </Link>
      </li>
    </ul>
  );
}

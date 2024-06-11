'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters() {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul className={'flex items-center gap-4 text-sub_p'}>
      <li>
        <Link
          href={pathname}
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
          href={`${pathname}?type=about`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'about',
          })}
        >
          عن المركز
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=systems`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'systems',
          })}
        >
          الأنظمة
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=services`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'services',
          })}
        >
          الخدمات
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=courses`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'courses',
          })}
        >
          الدورات
        </Link>
      </li>
    </ul>
  );
}

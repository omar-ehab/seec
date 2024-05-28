'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters() {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul className={'flex items-center gap-4 text-[#7E8989]'}>
      <li>
        <Link
          href={pathname}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === null,
          })}
        >
          الكل
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=development`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'development',
          })}
        >
          التطوير
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=design`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'design',
          })}
        >
          التصميم
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=hr`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'hr',
          })}
        >
          الموارد البشرية
        </Link>
      </li>
    </ul>
  );
}

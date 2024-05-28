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
          href={`${pathname}?type=systems`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'programs',
          })}
        >
          البرامج
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=regulations`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
            'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
              params.get('type') === 'sectors',
          })}
        >
          القطاعات
        </Link>
      </li>
      <li>
        <Link
          href={`${pathname}?type=evidence`}
          className={cn('flex items-center text-[#7E8989] hover:text-primary', {
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

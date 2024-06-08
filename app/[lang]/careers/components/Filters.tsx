'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Filters() {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <ul
      className={'flex flex-wrap items-center justify-stretch gap-4 text-sub_p'}
    >
      <li className='grow xs:grow-0'>
        <Link
          href={pathname}
          className={cn(
            'flex items-center justify-center text-sub_p hover:text-primary',
            {
              'justify-center rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
                params.get('type') === null,
            }
          )}
        >
          الكل
        </Link>
      </li>
      <li className='grow xs:grow-0'>
        <Link
          href={`${pathname}?type=development`}
          className={cn(
            'flex items-center justify-center text-sub_p hover:text-primary',
            {
              'justify-center rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
                params.get('type') === 'development',
            }
          )}
        >
          التطوير
        </Link>
      </li>
      <li className='grow xs:grow-0'>
        <Link
          href={`${pathname}?type=design`}
          className={cn(
            'flex items-center justify-center text-sub_p hover:text-primary',
            {
              'justify-center rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
                params.get('type') === 'design',
            }
          )}
        >
          التصميم
        </Link>
      </li>
      <li className='grow xs:grow-0'>
        <Link
          href={`${pathname}?type=hr`}
          className={cn(
            'flex items-center justify-center text-sub_p hover:text-primary',
            {
              'justify-center rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
                params.get('type') === 'hr',
            }
          )}
        >
          الموارد البشرية
        </Link>
      </li>
    </ul>
  );
}

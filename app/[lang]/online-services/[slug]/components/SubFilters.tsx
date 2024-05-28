'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SubFilters({ lang }: { lang: LangType }) {
  const pathname = usePathname();
  const params = useSearchParams();

  const navigationUrl = (subType: string | null) => {
    const updatedSearchParams = new URLSearchParams(params.toString());
    if (subType) {
      updatedSearchParams.set('sub_type', subType);
    } else {
      updatedSearchParams.delete('sub_type');
    }

    return pathname + '?' + updatedSearchParams.toString();
  };

  return (
    <ul
      className={
        'text-sub_p flex items-center gap-2 border-b border-[#D7DAD7] pb-3 pt-2'
      }
    >
      <li>
        <Link
          href={navigationUrl(null)}
          className={cn('px-4 pb-3 hover:text-black', {
            'border-b-2 border-primary font-medium text-black':
              params.get('sub_type') === null,
          })}
        >
          الخطوات
        </Link>
      </li>
      <li>
        <Link
          href={navigationUrl('manufacturing')}
          className={cn('px-4 pb-3 hover:text-black', {
            'border-b-2 border-primary font-medium text-black':
              params.get('sub_type') === 'requirements',
          })}
        >
          المتطلبات
        </Link>
      </li>
      <li>
        <Link
          href={navigationUrl('buildings')}
          className={cn('px-4 pb-3 hover:text-black', {
            'border-b-2 border-primary font-medium text-black':
              params.get('sub_type') === 'faq',
          })}
        >
          الأسئلة الشائعة
        </Link>
      </li>
    </ul>
  );
}

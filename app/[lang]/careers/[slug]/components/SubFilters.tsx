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
        'flex items-center gap-2 border-b border-[#D7DAD7] pb-3 pt-2 text-sub_p'
      }
    >
      <li>
        <Link
          href={navigationUrl(null)}
          className={cn(
            'px-2 pb-3 text-sm hover:text-black xs:px-4 xs:text-base',
            {
              'border-b-2 border-primary font-medium text-black':
                params.get('sub_type') === null,
            }
          )}
        >
          المتطلبات
        </Link>
      </li>
      <li>
        <Link
          href={navigationUrl('manufacturing')}
          className={cn(
            'px-2 pb-3 text-sm hover:text-black xs:px-4 xs:text-base',
            {
              'border-b-2 border-primary font-medium text-black':
                params.get('sub_type') === 'features',
            }
          )}
        >
          المميزات
        </Link>
      </li>
      <li>
        <Link
          href={navigationUrl('buildings')}
          className={cn(
            'px-2 pb-3 text-sm hover:text-black xs:px-4 xs:text-base',
            {
              'border-b-2 border-primary font-medium text-black':
                params.get('sub_type') === 'faq',
            }
          )}
        >
          الأسئلة الشائعة
        </Link>
      </li>
    </ul>
  );
}

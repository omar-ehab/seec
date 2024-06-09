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
  if (params.get('type') === 'systems') {
    return (
      <ul
        className={
          'flex items-center gap-2 border-b border-[#D7DAD7] pb-3 pt-2 text-sub_p'
        }
      >
        <li>
          <Link
            href={navigationUrl(null)}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === null,
            })}
          >
            كل الأنظمة
          </Link>
        </li>
        <li>
          <Link
            href={navigationUrl('manufacturing')}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'manufacturing',
            })}
          >
            الصناعة
          </Link>
        </li>
        <li>
          <Link
            href={navigationUrl('buildings')}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'buildings',
            })}
          >
            المباني
          </Link>
        </li>
        <li>
          <Link
            href={navigationUrl('transportation')}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'transportation',
            })}
          >
            النقل
          </Link>
        </li>
        <li>
          <Link
            href={navigationUrl('benefits')}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'benefits',
            })}
          >
            المنافع
          </Link>
        </li>
        <li>
          <Link
            href={navigationUrl('training_programs')}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'training_programs',
            })}
          >
            البرامج التدريبية
          </Link>
        </li>
        <li>
          <Link
            href={navigationUrl('energy_services_companies')}
            className={cn('px-4 pb-3 hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'energy_services_companies',
            })}
          >
            شركات خدمات الطاقة
          </Link>
        </li>
      </ul>
    );
  }
  return null;
}

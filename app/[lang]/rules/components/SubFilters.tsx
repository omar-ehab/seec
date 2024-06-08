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
          'flex flex-wrap items-center justify-start gap-y-4 border-b border-[#D7DAD7] pt-2 text-sub_p'
        }
      >
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl(null)}
            className={cn('block px-4 pb-3 text-center hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === null,
            })}
          >
            كل الأنظمة
          </Link>
        </li>
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl('manufacturing')}
            className={cn('block px-4 pb-3 hover:text-black lg:text-center', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'manufacturing',
            })}
          >
            الصناعة
          </Link>
        </li>
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl('buildings')}
            className={cn('block px-4 pb-3 text-center hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'buildings',
            })}
          >
            المباني
          </Link>
        </li>
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl('transportation')}
            className={cn('block px-4 pb-3 text-center hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'transportation',
            })}
          >
            النقل
          </Link>
        </li>
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl('benefits')}
            className={cn('block px-4 pb-3 text-center hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'benefits',
            })}
          >
            المنافع
          </Link>
        </li>
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl('training_programs')}
            className={cn('block px-4 pb-3 text-center hover:text-black', {
              'border-b-2 border-primary font-medium text-black':
                pathname === `/${lang}/rules` &&
                params.get('sub_type') === 'training_programs',
            })}
          >
            البرامج التدريبية
          </Link>
        </li>
        <li className='grow lg:grow-0'>
          <Link
            href={navigationUrl('energy_services_companies')}
            className={cn('block px-4 pb-3 text-center hover:text-black', {
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

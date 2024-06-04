import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  lang: LangType;
  activeTab:
    | 'about-center'
    | 'center-strategy'
    | 'center-specializations'
    | 'board-members'
    | 'energy-efficiency-sectors'
    | 'energy-efficiency-enablers';
};
export default function SubLinks({ lang, activeTab }: Props) {
  return (
    <ul className={'flex flex-row flex-wrap gap-3  md:gap-4'}>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/about-center`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'about-center',
            }
          )}
        >
          تعرف على المركز
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/center-strategy`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'center-strategy',
            }
          )}
        >
          استراتيجية المركز
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/center-specializations`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'center-specializations',
            }
          )}
        >
          اختصاصات المركز
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/board-members`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'board-members',
            }
          )}
        >
          مجلس الإدارة
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/energy-efficiency-sectors`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'energy-efficiency-sectors',
            }
          )}
        >
          قطاعات كفاءة الطاقة
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/energy-efficiency-enablers`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'energy-efficiency-enablers',
            }
          )}
        >
          ممكنات كفاءة الطاقة
        </Link>
      </li>
    </ul>
  );
}

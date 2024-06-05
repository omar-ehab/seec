import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  lang: LangType;
  activeTab:
    | 'news'
    | 'events'
    | 'reports'
    | 'media-library'
    | 'open-data'
    | 'statistics'
    | 'visual-identity';
};
export default function SubLinks({ lang, activeTab }: Props) {
  return (
    <ul className={'flex flex-row flex-wrap gap-3  md:gap-4'}>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/news`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'news',
            }
          )}
        >
          الأخبار
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/events`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'events',
            }
          )}
        >
          الفعاليات
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/reports`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'reports',
            }
          )}
        >
          التقارير
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/media-library`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'media-library',
            }
          )}
        >
          مكتبة الوسائط
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/open-data`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'open-data',
            }
          )}
        >
          البيانات المفتوحة
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/statistics`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'statistics',
            }
          )}
        >
          الاحصاءات
        </Link>
      </li>
      <li className='grow text-center xs:grow-0'>
        <Link
          href={`/${lang}/visual-identity`}
          className={cn(
            'block rounded bg-white px-3 py-1.5 text-sm text-sub_p hover:bg-zinc-50 xs:flex-1 md:px-6 md:py-3 md:text-base',
            {
              'bg-primary font-medium text-white hover:bg-primary':
                activeTab === 'visual-identity',
            }
          )}
        >
          الهوية البصرية
        </Link>
      </li>
    </ul>
  );
}

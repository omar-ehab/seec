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
    <ul className={'flex flex-row flex-wrap gap-4 pt-6'}>
      <li className={'mb-6'}>
        <Link
          href={`/${lang}/about-center`}
          className={cn('rounded bg-white px-6 py-3 text-sub_p', {
            'bg-primary font-medium text-white': activeTab === 'about-center',
          })}
        >
          تعرف على المركز
        </Link>
      </li>
      <li className={'mb-6'}>
        <Link
          href={`/${lang}/center-strategy`}
          className={cn('rounded bg-white px-6 py-3 text-sub_p', {
            'bg-primary font-medium text-white':
              activeTab === 'center-strategy',
          })}
        >
          استراتيجية المركز
        </Link>
      </li>
      <li className={'mb-6'}>
        <Link
          href={`/${lang}/center-specializations`}
          className={cn('rounded bg-white px-6 py-3 text-sub_p', {
            'bg-primary font-medium text-white':
              activeTab === 'center-specializations',
          })}
        >
          اختصاصات المركز
        </Link>
      </li>
      <li className={'mb-6'}>
        <Link
          href={`/${lang}/board-members`}
          className={cn('rounded bg-white px-6 py-3 text-sub_p', {
            'bg-primary font-medium text-white': activeTab === 'board-members',
          })}
        >
          مجلس الإدارة
        </Link>
      </li>
      <li className={'mb-6'}>
        <Link
          href={`/${lang}/energy-efficiency-sectors`}
          className={cn('rounded bg-white px-6 py-3 text-sub_p', {
            'bg-primary font-medium text-white':
              activeTab === 'energy-efficiency-sectors',
          })}
        >
          قطاعات كفاءة الطاقة
        </Link>
      </li>
      <li className={'mb-6'}>
        <Link
          href={`/${lang}/energy-efficiency-enablers`}
          className={cn('rounded bg-white px-6 py-3 text-sub_p', {
            'bg-primary font-medium text-white':
              activeTab === 'energy-efficiency-enablers',
          })}
        >
          ممكنات كفاءة الطاقة
        </Link>
      </li>
    </ul>
  );
}

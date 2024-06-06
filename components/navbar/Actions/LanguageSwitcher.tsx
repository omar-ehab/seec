'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageCircleIcon from '@/components/icons/LanguageCircleIcon';
import { cn } from '@/lib/utils';

type Props = {
  lang: LangType;
  isTransparent: boolean;
};
export default function LanguageSwitcher({ lang, isTransparent }: Props) {
  const invertLang: LangType = lang === 'en' ? 'ar' : 'en';
  const pathname = usePathname();
  const newPathname = pathname.replace(`/${lang}`, `/${invertLang}`);
  return (
    <Link
      href={newPathname}
      className={cn('group flex items-center gap-1 text-sub_p', {
        'text-[rgba(255,255,255,.75)]': isTransparent,
      })}
    >
      <LanguageCircleIcon
        size={24}
        className={cn('text-sub_p group-hover:text-black', {
          'text-[rgba(255,255,255,.75)] group-hover:text-white': isTransparent,
        })}
      />
      <span
        className={cn('mb-1 group-hover:text-black', {
          'text-[rgba(255,255,255,.75)] group-hover:text-white': isTransparent,
        })}
      >
        {lang === 'en' ? 'العربية' : 'English'}
      </span>
    </Link>
  );
}

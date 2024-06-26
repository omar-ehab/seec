'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const last3Years = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
];

export default function Filters({ lang }: { lang: LangType }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const onSelect = (value: string) => {
    const updatedSearchParams = new URLSearchParams(params.toString());
    if (!value) {
      updatedSearchParams.delete('year');
    } else {
      updatedSearchParams.set('year', value);
    }

    router.push(pathname + '?' + updatedSearchParams.toString());
  };

  return (
    <ul
      className={'flex w-full items-center gap-2 text-sub_p xs:w-auto xs:gap-6'}
    >
      <li>
        <Link
          href={`/${lang}/news`}
          className={cn('flex items-center text-sub_p hover:text-primary', {
            'rounded-full bg-primary/10  px-4 py-1 font-medium text-primary xs:py-2':
              pathname === `/${lang}/news` && params.get('year') === null,
          })}
        >
          الكل
        </Link>
      </li>
      {last3Years.map((year) => (
        <li key={year} className='hidden xs:block'>
          <Link
            href={`/${lang}/news?year=${year}`}
            className={cn('flex items-center text-sub_p hover:text-primary', {
              'rounded-full bg-primary/10 px-4 py-2 font-medium text-primary':
                pathname === `/${lang}/news` &&
                params.get('year') === year.toString(),
            })}
          >
            {year}
          </Link>
        </li>
      ))}
      <li>
        <Select
          onValueChange={onSelect}
          value={params.get('year') ?? undefined}
        >
          <SelectTrigger className='h-6 w-[100px] border-none focus:ring-primary'>
            <SelectValue placeholder='اختيار سنة' className={'text-sub_p'} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from(Array(10).keys()).map((i) => (
                <SelectItem
                  key={i}
                  className={'cursor-pointer text-sub_p'}
                  value={(new Date().getFullYear() - i).toString()}
                >
                  {(new Date().getFullYear() - i).toString()}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </li>
    </ul>
  );
}

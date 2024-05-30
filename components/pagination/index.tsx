'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

type Props = {
  numberOfPages: number;
  className?: string;
};
export default function Pagination({ numberOfPages, className }: Props) {
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();
  const currentPage = Number(currentSearchParams.get('page') ?? '1');

  const navigationUrl = (page: number) => {
    const updatedSearchParams = new URLSearchParams(
      currentSearchParams.toString()
    );
    updatedSearchParams.set('page', page.toString());

    return pathname + '?' + updatedSearchParams.toString();
  };
  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      {currentPage > 1 ? (
        <Link
          href={navigationUrl(currentPage - 1)}
          className={
            'flex size-8 items-center justify-center rounded-full text-sub_p hover:bg-primary/10 hover:text-primary md:size-10'
          }
        >
          <ArrowRightIcon />
        </Link>
      ) : (
        <ArrowRightIcon className={'cursor-not-allowed text-zinc-300'} />
      )}
      <div className={'flex items-center justify-center gap-2'}>
        {[...Array(numberOfPages)].map((i, idx) => {
          if (idx + 1 === currentPage) {
            return (
              <div
                key={idx}
                className={
                  'flex size-8 items-center justify-center rounded-full bg-primary font-medium text-white md:size-10'
                }
              >
                {idx + 1}
              </div>
            );
          }
          return (
            <Link
              href={navigationUrl(idx + 1)}
              key={idx}
              className={
                'flex size-8 items-center justify-center rounded-full border border-[#D7D7D7] bg-white font-medium text-sub_p hover:border-primary hover:text-primary md:size-10'
              }
            >
              {idx + 1}
            </Link>
          );
        })}
      </div>
      {currentPage < numberOfPages ? (
        <Link
          href={navigationUrl(currentPage + 1)}
          className={
            'flex size-8 items-center justify-center rounded-full  text-sub_p hover:bg-primary/10 hover:text-primary md:size-10'
          }
        >
          <ArrowLeftIcon />
        </Link>
      ) : (
        <ArrowLeftIcon className={'cursor-not-allowed text-zinc-300'} />
      )}
    </div>
  );
}

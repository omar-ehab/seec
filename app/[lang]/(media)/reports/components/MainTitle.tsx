'use client';

import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import ReportImage from '@/public/reports_bg.jpg';

export default function MainTitle({ className }: { className?: string }) {
  const params = useSearchParams();
  const selectedYear =
    params.get('year') || new Date().getFullYear().toString();

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white py-10 md:h-[240px]',
        className
      )}
    >
      <Image
        src={ReportImage}
        alt={'reports'}
        height={240}
        className={'absolute inset-0 h-full w-full object-cover'}
      />
      <div
        className={
          'absolute inset-0 z-10 bg-gradient-to-b from-[#73AE28] to-[#006F59] opacity-75'
        }
      ></div>
      <h3
        className={
          'relative z-20 text-xl font-bold text-white xs:text-2xl md:text-4xl'
        }
      >
        التقرير السنوي لعام {selectedYear}
      </h3>
    </div>
  );
}

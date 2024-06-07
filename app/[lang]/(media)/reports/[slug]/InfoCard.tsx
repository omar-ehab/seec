import React from 'react';
import { cn } from '@/lib/utils';

export default function InfoCard({
  icon,
  title,
  value,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-grow basis-60 flex-col items-center gap-5 text-center sm:items-stretch sm:text-start xl:flex-grow-0',
        className
      )}
    >
      {icon}
      <div className={'flex flex-col gap-2'}>
        <p className={'text-sm text-sub_p'}>{title}</p>
        <p className={'font-medium text-black'}>{value}</p>
      </div>
    </div>
  );
}

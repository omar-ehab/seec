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
        'flex flex-col items-center gap-5 text-center md:items-start md:text-start',
        className
      )}
    >
      {icon}
      <div className={'flex flex-col items-center gap-2 md:items-start'}>
        <p className={'text-sm text-sub_p'}>{title}</p>
        <p className={'font-medium text-black'}>{value}</p>
      </div>
    </div>
  );
}

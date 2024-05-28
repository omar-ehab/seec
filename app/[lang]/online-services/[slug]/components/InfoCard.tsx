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
    <div className={cn('flex flex-col gap-5', className)}>
      {icon}
      <div className={'flex flex-col gap-2'}>
        <p className={'text-sub_p text-sm'}>{title}</p>
        <p className={'font-medium text-black'}>{value}</p>
      </div>
    </div>
  );
}

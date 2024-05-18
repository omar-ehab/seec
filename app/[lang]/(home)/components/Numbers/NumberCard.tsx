import React, { ComponentType } from 'react';
import NumberCounter from '@/components/ui/number-counter';

type Props = {
  title: string;
  number: number;
  unit?: string;
  description: string;
  hasPlus?: boolean;
  Icon?: ComponentType<{ className?: string }>;
};
export default function NumberCard({
  title,
  number,
  unit,
  description,
  hasPlus = false,
  Icon,
}: Props) {
  return (
    <div
      className={
        'number_card_gradient group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 hover:shadow-[0px_4px_0px_0px_#73AE28]'
      }
    >
      <p>{title}</p>
      <p className='flex items-end gap-2 font-semibold text-[#73AE28]'>
        <span className={'text-6xl'}>
          {hasPlus ? '+' : ''}
          <NumberCounter value={number} durationInSeconds={3} />
        </span>
        {unit && <span className={'text-2xl'}>{unit}</span>}
      </p>
      <p className='text-2xl font-medium text-black'>{description}</p>
      {Icon && (
        <Icon
          className={
            'absolute -left-3 bottom-1 h-20 w-20 opacity-0 group-hover:opacity-25'
          }
        />
      )}
    </div>
  );
}

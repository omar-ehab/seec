import React from 'react';
import NumberCounter from '@/components/ui/number-counter';

type Props = {
  title: string;
  number: number;
  unit?: string;
  description: string;
  hasPlus?: boolean;
};
export default function NumberCard({
  title,
  number,
  unit,
  description,
  hasPlus = false,
}: Props) {
  return (
    <div
      className={
        'number_card_gradient group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 hover:shadow-[0px_4px_0px_0px_#73AE28] md:p-6'
      }
    >
      <p className='text-sm'>{title}</p>
      <p className='flex items-end gap-2 text-3xl font-medium leading-10 text-[#73AE28] md:text-6xl'>
        <span>
          {hasPlus ? '+' : ''}
          <NumberCounter value={number} durationInSeconds={3} />
        </span>
        {unit && <span className={'text-2xl'}>{unit}</span>}
      </p>
      <p className='mt-2 text-base font-medium text-black md:text-xl'>
        {description}
      </p>
    </div>
  );
}

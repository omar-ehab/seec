'use client';
import { useSwiper } from 'swiper/react';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function SliderNavigation({ numberOfSlides }: { numberOfSlides: number }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiper = useSwiper();
  swiper.on('activeIndexChange', (swiper) => {
    setActiveIndex(swiper.activeIndex);
  });
  return (
    <div className={'absolute z-20 top-[50%] -translate-y-1/2 w-full flex items-center justify-between px-12'}>
      <button
        className={cn('text-white bg-black/50 flex items-center justify-center rounded-full size-14 focus:outline-none', {
          'opacity-50 cursor-not-allowed': activeIndex === 0,
        })}
        disabled={activeIndex === 0}
        onClick={() => swiper.slidePrev()}
      >
        <ArrowRightIcon />
      </button>
      <button
        className={cn('text-white bg-black/50 flex items-center justify-center rounded-full size-14 focus:outline-none', {
          'opacity-50 cursor-not-allowed': activeIndex === numberOfSlides - 1,
        })}
        disabled={activeIndex === numberOfSlides - 1}
        onClick={() => swiper.slideNext()}
      >
        <ArrowLeftIcon />
      </button>
    </div>
  );
}
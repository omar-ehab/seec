import { useSwiper } from 'swiper/react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function SliderIndicators() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiper = useSwiper();
  swiper.on('activeIndexChange', (swiper) => {
    setActiveIndex(swiper.activeIndex);
  });

  return (
    <div
      className={
        'container absolute bottom-6 left-0 right-0 z-20 mt-6 flex items-center gap-2 md:bottom-12 md:mt-12'
      }
    >
      {swiper.slides.map((_, index) => (
        <button
          key={`header_slider_${index}`}
          className={cn('h-1 min-w-6 max-w-16 rounded-full bg-white/65', {
            'grow bg-white/100': index === activeIndex,
          })}
          onClick={() => swiper.slideTo(index)}
        />
      ))}
    </div>
  );
}

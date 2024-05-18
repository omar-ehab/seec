import { useSwiper, useSwiperSlide } from 'swiper/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SliderNavigations() {
  const swiper = useSwiper();
  useSwiperSlide();
  return (
    <div className={'flex items-center'}>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={swiper.activeIndex === 0}
        aria-disabled={swiper.activeIndex === 0}
        className={cn('size-12 text-white', {
          'cursor-not-allowed text-white/50': swiper.activeIndex === 0,
          'flex items-center justify-center rounded-full hover:bg-black/50':
            swiper.activeIndex > 0,
        })}
      >
        <ArrowRightIcon />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={cn('size-12 text-white', {
          'cursor-not-allowed text-white/50':
            swiper.activeIndex === swiper.slides.length - 1,
          'flex items-center justify-center rounded-full hover:bg-black/50':
            swiper.activeIndex < swiper.slides.length - 1,
        })}
      >
        <ArrowLeftIcon />
      </button>
    </div>
  );
}

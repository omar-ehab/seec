'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '@/components/header/Slider/Slide';
import SliderIndicators from '@/components/header/Slider/SliderIndicators';

export default function Slider({ lang }: { lang: LangType }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      className={'!absolute inset-0 h-full w-full'}
    >
      <SwiperSlide className={'h-full w-full'}>
        <Slide
          isVideo={true}
          url={'/videos/slider.mp4'}
          title={
            'كفاءة..من أجل مستقبل أفضل، وموارد أكثر استدامة، ومجتمع ينعم بالرفاهية'
          }
          buttonTitle={'تعرف على المركز'}
          buttonUrl={`/${lang}/about-center`}
        />
      </SwiperSlide>
      <SwiperSlide className={'h-full w-full'}>
        <Slide
          isVideo={true}
          url={'/videos/slider.mp4'}
          title={
            'كفاءة..من أجل مستقبل أفضل، وموارد أكثر استدامة، ومجتمع ينعم بالرفاهية'
          }
          buttonTitle={'تعرف على المركز'}
          buttonUrl={`/${lang}/about-center`}
        />
      </SwiperSlide>
      <SwiperSlide className={'h-full w-full'}>
        <Slide
          isVideo={true}
          url={'/videos/slider.mp4'}
          title={
            'كفاءة..من أجل مستقبل أفضل، وموارد أكثر استدامة، ومجتمع ينعم بالرفاهية'
          }
          buttonTitle={'تعرف على المركز'}
          buttonUrl={`/${lang}/about-center`}
        />
      </SwiperSlide>
      <SwiperSlide className={'h-full w-full'}>
        <Slide
          isVideo={true}
          url={'/videos/slider.mp4'}
          title={
            'كفاءة..من أجل مستقبل أفضل، وموارد أكثر استدامة، ومجتمع ينعم بالرفاهية'
          }
          buttonTitle={'تعرف على المركز'}
          buttonUrl={`/${lang}/about-center`}
        />
      </SwiperSlide>
      <SliderIndicators />
    </Swiper>
  );
}

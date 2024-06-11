'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '@/app/[lang]/(home)/components/News/Slide';
import FirstImage from './1.png';
import SecondImage from './2.jpg';
import ThirdImage from './3.jpg';
import FourthImage from './4.jpg';
import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useWindowSize } from '@uidotdev/usehooks';

type Props = {
  className?: string;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
};
export default function Slider({ className, setSwiper }: Props) {
  const { width } = useWindowSize();
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={'auto'}
      initialSlide={0}
      className={className}
      slidesOffsetAfter={width && width > 769 ? 1000 : 500}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide
        className={
          '!h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={FirstImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={SecondImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={ThirdImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={FourthImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={FirstImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={SecondImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={ThirdImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-full md:!h-[360px] md:!w-1/4 md:first:!w-[40%]'
        }
      >
        <Slide
          src={FourthImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
    </Swiper>
  );
}

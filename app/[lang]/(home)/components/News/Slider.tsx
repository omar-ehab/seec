'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '@/app/[lang]/(home)/components/News/Slide';
import MomkenatImage from '@/public/momkenat.png';
import Estbdalmage from '@/public/estbdal.png';
import KafaaImage from '@/public/kafaa.png';
import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

type Props = {
  className?: string;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
};
export default function Slider({ className, setSwiper }: Props) {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={'auto'}
      className={className}
      slidesOffsetBefore={80}
      slidesOffsetAfter={200}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide
        className={
          '!h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={MomkenatImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={Estbdalmage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={KafaaImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={MomkenatImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={MomkenatImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={Estbdalmage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={KafaaImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
      <SwiperSlide
        className={
          ' !h-[196px] !w-[calc(100%-3rem)] md:!h-[360px] first:md:!w-[40%] [&:not(:first-child)]:md:!w-1/4'
        }
      >
        <Slide
          src={MomkenatImage}
          title={
            ' وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات'
          }
        />
      </SwiperSlide>
    </Swiper>
  );
}

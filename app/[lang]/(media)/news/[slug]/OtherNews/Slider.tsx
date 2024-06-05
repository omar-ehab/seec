'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '@/app/[lang]/(media)/news/[slug]/OtherNews/Slide';
import MomkenatImage from '@/public/momkenat.png';
import Estbdalmage from '@/public/estbdal.png';
import KafaaImage from '@/public/kafaa.png';
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
          '!h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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
          ' !h-[196px] !w-[calc(100%-3rem)] first:!w-[40%] md:!h-[360px] md:!w-1/4'
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

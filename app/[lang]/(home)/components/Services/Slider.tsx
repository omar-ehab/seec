'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '@/app/[lang]/(home)/components/Services/Slide';
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
      slidesOffsetBefore={80}
      slidesOffsetAfter={80}
      className={className}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide>
        <Slide
          src={MomkenatImage}
          title={'ممكنات'}
          description={
            'المنصة الموحدة لممكنات كفاءة الطاقة (ممكنات) هي صفحة الكترونية تجمع كافة الخدمات والأخبار المرتبطة بقطاع خدمات كفاءة الطاقة وتمثل مرجعاً شاملاً.'
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          src={Estbdalmage}
          title={'مبادرة استبدال'}
          description={
            'مبادرة وطنية تهدف إلى تحفيز استبدال مكيفات الشباك القديمة بأخرى جديدة أعلى توفيراً في الاستهلاك | تحت تنفيذ المركز السعودي لكفاءة الطاقة.'
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          src={KafaaImage}
          title={'برنامج إدارة الطاقة'}
          description={
            'المنصة الإلكترونية للبرنامج التي تتضمن التعريف بالبرنامج ونظام إدارة الطاقة والخيارات المتاحة للمنشآت، كما تحتوى على منصة لبناء القدرات التي تساعد المنشآت في تطبيق'
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          src={Estbdalmage}
          title={'مبادرة استبدال'}
          description={
            'مبادرة وطنية تهدف إلى تحفيز استبدال مكيفات الشباك القديمة بأخرى جديدة أعلى توفيراً في الاستهلاك | تحت تنفيذ المركز السعودي لكفاءة الطاقة.'
          }
        />
      </SwiperSlide>
    </Swiper>
  );
}

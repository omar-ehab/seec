'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '@/app/[lang]/(home)/components/Services/Slide';
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
      className={className}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide className='!w-full xs:!w-fit'>
        <Slide
          src={MomkenatImage}
          title={'ممكنات'}
          description={
            'المنصة الموحدة لممكنات كفاءة الطاقة (ممكنات) هي صفحة الكترونية تجمع كافة الخدمات والأخبار المرتبطة بقطاع خدمات كفاءة الطاقة وتمثل مرجعاً شاملاً.'
          }
        />
      </SwiperSlide>
      <SwiperSlide className='!w-full xs:!w-fit'>
        <Slide
          src={Estbdalmage}
          title={'مبادرة استبدال'}
          description={
            'مبادرة وطنية تهدف إلى تحفيز استبدال مكيفات الشباك القديمة بأخرى جديدة أعلى توفيراً في الاستهلاك | تحت تنفيذ المركز السعودي لكفاءة الطاقة.'
          }
        />
      </SwiperSlide>
      <SwiperSlide className='!w-full xs:!w-fit'>
        <Slide
          src={KafaaImage}
          title={'برنامج إدارة الطاقة'}
          description={
            'المنصة الإلكترونية للبرنامج التي تتضمن التعريف بالبرنامج ونظام إدارة الطاقة والخيارات المتاحة للمنشآت، كما تحتوى على منصة لبناء القدرات التي تساعد المنشآت في تطبيق'
          }
        />
      </SwiperSlide>
      <SwiperSlide className='!w-full xs:!w-fit'>
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

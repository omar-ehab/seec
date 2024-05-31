'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import FileCard from '@/app/[lang]/rules/components/FileCard';
import { useParams } from 'next/navigation';

type Props = {
  className?: string;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
};
export default function Slider({ className, setSwiper }: Props) {
  const { lang } = useParams<{ lang: string }>();
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3.25}
      slidesOffsetBefore={80}
      slidesOffsetAfter={80}
      className={className}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide>
        <FileCard
          category={'اللوائح'}
          title={'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'}
          link={`/${lang}/rules/slug`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <FileCard
          category={'اللوائح'}
          title={'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'}
          link={`/${lang}/rules/slug`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <FileCard
          category={'اللوائح'}
          title={'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'}
          link={`/${lang}/rules/slug`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <FileCard
          category={'اللوائح'}
          title={'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'}
          link={`/${lang}/rules/slug`}
        />
      </SwiperSlide>
    </Swiper>
  );
}

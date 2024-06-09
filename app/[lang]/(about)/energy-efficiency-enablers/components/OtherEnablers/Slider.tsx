'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import EnablerCard from '@/app/[lang]/(about)/energy-efficiency-enablers/EnablerCard';
import Building2Icon from '@/components/icons/Building2Icon';
import UserIdIcon from '@/components/icons/UserIdIcon';
import BookUploadIcon from '@/components/icons/BookUploadIcon';
import SearchingIcon from '@/components/icons/SearchingIcon';
import { useParams } from 'next/navigation';

type Props = {
  className?: string;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
};
export default function Slider({ className, setSwiper }: Props) {
  const { lang } = useParams();
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={'auto'}
      className={className}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide className=' w-full whitespace-nowrap xs:!w-[300px] md:!w-[332px]'>
        <EnablerCard
          href={`/${lang}/energy-efficiency-enablers/energy-services-companies`}
          icon={
            <Building2Icon className={'text-black group-hover:text-white'} />
          }
          title='شركات خدمات الطاقة'
          className={'bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className=' w-full whitespace-nowrap xs:!w-[300px] md:!w-[332px]'>
        <EnablerCard
          href={`/${lang}/energy-efficiency-enablers/human-capabilities-development`}
          icon={<UserIdIcon className={'text-black group-hover:text-white'} />}
          title='تنمية القدرات البشرية'
          className={'bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className=' w-full whitespace-nowrap xs:!w-[300px] md:!w-[332px]'>
        <EnablerCard
          href={`/${lang}/energy-efficiency-enablers/awareness`}
          icon={
            <BookUploadIcon className={'text-black group-hover:text-white'} />
          }
          title='التوعية'
          className={'bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className=' w-full whitespace-nowrap xs:!w-[300px] md:!w-[332px]'>
        <EnablerCard
          href={`/${lang}/energy-efficiency-enablers/inspection-monitoring-certification`}
          icon={
            <SearchingIcon className={'text-black group-hover:text-white'} />
          }
          title='الفحص والمراقبة والشهادات'
          className={'bg-white'}
        />
      </SwiperSlide>
    </Swiper>
  );
}

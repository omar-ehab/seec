'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useWindowSize } from '@uidotdev/usehooks';
import SectorCard from '@/app/[lang]/(about)/energy-efficiency-sectors/SectorCard';
import BuildingIcon from '@/components/icons/BuildingIcon';
import CarIcon from '@/components/icons/CarIcon';
import EnergyIcon from '@/components/icons/EnergyIcon';
import FactoryIcon from '@/components/icons/FactoryIcon';
import { useParams } from 'next/navigation';
import BookIcon from '@/components/icons/BookIcon';

type Props = {
  className?: string;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
};
export default function Slider({ className, setSwiper }: Props) {
  const { lang } = useParams();
  const { width } = useWindowSize();
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={'auto'}
      slidesOffsetAfter={width && width > 769 ? 500 : 200}
      className={className}
      slidesOffsetBefore={80}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide className='!w-fit'>
        <SectorCard
          href={`/${lang}/energy-efficiency-sectors/buildings-sector`}
          icon={
            <BuildingIcon className={'text-black group-hover:text-white'} />
          }
          title='قطاع المباني'
          className={'h-72 w-80 bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className='!w-fit'>
        <SectorCard
          href={`/${lang}/energy-efficiency-sectors/land-transport-sector`}
          icon={<CarIcon className={'text-black group-hover:text-white'} />}
          title='قطاع النقل البري'
          className={'h-72 w-80 bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className='!w-fit'>
        <SectorCard
          href={`/${lang}/energy-efficiency-sectors/benefits-sector`}
          icon={<EnergyIcon className={'text-black group-hover:text-white'} />}
          title='قطاع المنافع'
          className={'h-72 w-80 bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className='!w-fit'>
        <SectorCard
          href={`/${lang}/energy-efficiency-sectors/industry-sector`}
          icon={<FactoryIcon className={'text-black group-hover:text-white'} />}
          title='قطاع الصناعة'
          className={'h-72 w-80 bg-white'}
        />
      </SwiperSlide>
      <SwiperSlide className='!w-fit'>
        <SectorCard
          href={`/${lang}/energy-efficiency-sectors/industry-sector`}
          icon={
            <BookIcon
              className={'text-black group-hover:text-white'}
              size={40}
            />
          }
          title='الفحص والمراقبة والشهادة'
          className={'h-72 w-80 bg-white'}
        />
      </SwiperSlide>
    </Swiper>
  );
}

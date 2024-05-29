'use client';
import AgricultureLogo from '@/public/logos/agriculture.png';
import CityLogo from '@/public/logos/city.png';
import AramcoLogo from '@/public/logos/aramco.png';
import EnergyLogo from '@/public/logos/energy.png';
import FinanceLogo from '@/public/logos/finance.png';
import HousingLogo from '@/public/logos/housing.png';
import MediaLogo from '@/public/logos/media.png';
import TransportationLogo from '@/public/logos/transportation.png';
import WaterElectricLogo from '@/public/logos/water_elec.png';
import PartnerCard from './PartnerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Partners() {
  return (
    <section className='relative w-full  bg-[#F8FBF3] py-16'>
      <div className={'mb-12 flex items-center justify-between px-6 md:px-20'}>
        <h2 className={'text-2xl font-bold text-black md:text-4xl'}>
          شركاؤنا في النجاح
        </h2>
      </div>
      <div>
        <Swiper
          speed={5000}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={'auto'}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop
          className='partners !bt-1 !pb-3 md:!pb-5 md:!pt-1 '
        >
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={AramcoLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={EnergyLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={FinanceLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={HousingLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={MediaLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={TransportationLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={WaterElectricLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={CityLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={AgricultureLogo} link='#' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          speed={5000}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={'auto'}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop
          className='partners !pb-3 !pt-1 md:!pb-6 md:!pt-1'
        >
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={AramcoLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={EnergyLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={FinanceLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={HousingLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={MediaLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={TransportationLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={WaterElectricLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={CityLogo} link='#' />
          </SwiperSlide>
          <SwiperSlide className='!w-[10rem] md:!w-[18.5rem]'>
            <PartnerCard name='test' logo={AgricultureLogo} link='#' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import FirstImage from '@/app/[lang]/(media)/media-library/images/1.png';
import SecondImage from '@/app/[lang]/(media)/media-library/images/2.png';
import ThirdImage from '@/app/[lang]/(media)/media-library/images/3.png';
import FourthImage from '@/app/[lang]/(media)/media-library/images/4.png';
// import FifthImage from '@/app/[lang]/(media)/media-library/images/5.png';
// import SixthImage from '@/app/[lang]/(media)/media-library/images/6.png';
import CancelIcon from '@/components/icons/CancelIcon';
import SliderNavigation from '@/app/[lang]/(media)/media-library/components/Slider/SliderNavigation';

type Props = {
  setDialogOpen: (open: boolean) => void;
};

export default function AlbumSlider({ setDialogOpen }: Props) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      className={'!absolute h-full w-full'}
    >
      <SwiperSlide className={'rounded-lg overflow-hidden p-6 w-full h-full'}>
        <div className={'!h-[90%]'}>
          <Image src={FirstImage} alt={'First Image'} className={'!h-full w-full object-cover rounded-lg'} />
        </div>
        <div className={'flex items-center justify-between mt-6'}>
          <div className={'flex flex-col'}>
            <p className={'text-white'}>تكريم الجهات الحكومية المتميزة في استهلاك الطاقة للعام 2022م</p>
            <span className={'text-[#D7DAD7] text-xs'}>12/4/2024</span>
          </div>
          <button
            className={'bg-[#202021]/25 hover:bg-[#202021]/15 size-8 text-white rounded-full flex items-center justify-center'}
            onClick={() => setDialogOpen(false)}
          >
            <CancelIcon size={14} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={'rounded-lg overflow-hidden p-6 w-full h-full'}>
        <div className={'!h-[90%]'}>
          <Image src={SecondImage} alt={'First Image'} className={'!h-full w-full object-cover rounded-lg'} />
        </div>
        <div className={'flex items-center justify-between mt-6'}>
          <div className={'flex flex-col'}>
            <p className={'text-white'}>تكريم الجهات الحكومية المتميزة في استهلاك الطاقة للعام 2022م</p>
            <span className={'text-[#D7DAD7] text-xs'}>12/4/2024</span>
          </div>
          <button
            className={'bg-[#202021]/25 hover:bg-[#202021]/15 size-8 text-white rounded-full flex items-center justify-center'}
            onClick={() => setDialogOpen(false)}
          >
            <CancelIcon size={14} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={'rounded-lg overflow-hidden p-6 w-full h-full'}>
        <div className={'!h-[90%]'}>
          <Image src={ThirdImage} alt={'First Image'} className={'!h-full w-full object-cover rounded-lg'} />
        </div>
        <div className={'flex items-center justify-between mt-6'}>
          <div className={'flex flex-col'}>
            <p className={'text-white'}>تكريم الجهات الحكومية المتميزة في استهلاك الطاقة للعام 2022م</p>
            <span className={'text-[#D7DAD7] text-xs'}>12/4/2024</span>
          </div>
          <button
            className={'bg-[#202021]/25 hover:bg-[#202021]/15 size-8 text-white rounded-full flex items-center justify-center'}
            onClick={() => setDialogOpen(false)}
          >
            <CancelIcon size={14} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={'rounded-lg overflow-hidden p-6 w-full h-full'}>
        <div className={'!h-[90%]'}>
          <Image src={FourthImage} alt={'First Image'} className={'!h-full w-full object-cover rounded-lg'} />
        </div>
        <div className={'flex items-center justify-between mt-6'}>
          <div className={'flex flex-col'}>
            <p className={'text-white'}>تكريم الجهات الحكومية المتميزة في استهلاك الطاقة للعام 2022م</p>
            <span className={'text-[#D7DAD7] text-xs'}>12/4/2024</span>
          </div>
          <button
            className={'bg-[#202021]/25 hover:bg-[#202021]/15 size-8 text-white rounded-full flex items-center justify-center'}
            onClick={() => setDialogOpen(false)}
          >
            <CancelIcon size={14} />
          </button>
        </div>
      </SwiperSlide>
      <SliderNavigation numberOfSlides={4} />
    </Swiper>
  );
}
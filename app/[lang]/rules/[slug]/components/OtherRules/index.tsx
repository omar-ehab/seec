'use client';
import Slider from '@/app/[lang]/rules/[slug]/components/OtherRules/Slider';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';
import { Swiper } from 'swiper/types';

export default function OtherRules() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  return (
    <section className={'relative bg-[#F7F9FA]'}>
      <div className={'relative h-24 bg-[#F7F9FA]'}>
        <span
          className={'skewed-t absolute top-0 block h-full w-full bg-[#FFFFFF]'}
        ></span>
        <span
          className={
            'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgb(215,215,215)] to-transparent'
          }
        ></span>
      </div>
      <div className={'mb-12 flex items-center justify-between px-20 pt-10'}>
        <h2 className={'text-4xl font-bold text-black'}>لوائح وأنظمة آخرى</h2>
        <div className={'flex items-center gap-6'}>
          <div className={'flex items-center gap-4'}>
            <button
              onClick={() => {
                if (swiper) {
                  swiper.slidePrev();
                }
              }}
              className={
                'flex size-12 items-center justify-center rounded-full border border-white bg-white text-sub_p hover:bg-primary/10 hover:text-primary'
              }
            >
              <ArrowRightIcon />
            </button>
            <button
              onClick={() => {
                if (swiper) {
                  swiper.slideNext();
                }
              }}
              className={
                'flex size-12 items-center justify-center rounded-full border border-white bg-white text-sub_p hover:bg-primary/10 hover:text-primary'
              }
            >
              <ArrowLeftIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={'pb-24'}>
        <Slider setSwiper={setSwiper} />
      </div>
    </section>
  );
}

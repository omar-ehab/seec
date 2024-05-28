'use client';
import Slider from '@/app/[lang]/(home)/components/News/Slider';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Swiper } from 'swiper/types';

export default function News() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  return (
    <section className={'relative bg-white pt-20'}>
      <div className={'mb-12 flex items-center justify-between px-20'}>
        <h2 className={'text-4xl font-bold text-black'}>آخر المستجدات</h2>
        <div className={'flex items-center gap-6'}>
          <div className={'flex items-center gap-4'}>
            <button
              onClick={() => {
                if (swiper) {
                  swiper.slidePrev();
                }
              }}
              className={
                'text-sub_p flex size-12 items-center justify-center rounded-full border border-white bg-white hover:bg-primary/10 hover:text-primary'
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
                'text-sub_p flex size-12 items-center justify-center rounded-full border border-white bg-white hover:bg-primary/10 hover:text-primary'
              }
            >
              <ArrowLeftIcon />
            </button>
          </div>
          <Link
            href={'#'}
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'text-medium flex h-12 items-center justify-center rounded-full border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary'
            )}
          >
            <span className={'mb-1'}>عرض الكل</span>
            <ChevronLeftIcon className={'size-5'} />
          </Link>
        </div>
      </div>
      <div className={'pb-24'}>
        <Slider setSwiper={setSwiper} />
      </div>
      <div className={'relative h-24 bg-white'}>
        <span
          className={'skewed-t absolute top-0 block h-full w-full bg-white'}
        ></span>
        <span
          className={
            'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgb(215,215,215)] to-transparent'
          }
        ></span>
        <span
          className={'skewed-b absolute top-0 block h-full w-full bg-[#F8FBF5]'}
        ></span>
      </div>
    </section>
  );
}

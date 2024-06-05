'use client';
import Slider from '@/app/[lang]/(media)/news/[slug]/OtherNews/Slider';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Swiper } from 'swiper/types';

export default function OtherNews({ lang }: { lang: LangType }) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  return (
    <section className={'news relative overflow-x-hidden bg-[#F7F9FA]'}>
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
          className={'skewed-b absolute top-0 block h-full w-full bg-[#F7F9FA]'}
        ></span>
      </div>
      <div className='container pt-20'>
        <div className={'mb-12 flex items-center justify-between'}>
          <h2 className={'text-2xl font-bold text-black md:text-4xl'}>
            آخر المستجدات
          </h2>
          <div className={'hidden items-center gap-6 md:flex'}>
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
            <Link
              href={`/${lang}/news`}
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
          <Slider setSwiper={setSwiper} className='!overflow-visible' />
          <Link
            href={`/${lang}/news/slug`}
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'text-medium mx-6 mt-6 flex h-12 items-center justify-center rounded-full border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary md:hidden'
            )}
          >
            <span className={'mb-1'}>عرض الكل</span>
            <ChevronLeftIcon className={'size-5'} />
          </Link>
        </div>
      </div>
    </section>
  );
}

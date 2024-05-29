import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import SliderNavigations from '@/components/header/Slider/SliderNavigations';
import SliderIndicators from '@/components/header/Slider/SliderIndicators';

type Props = {
  isVideo: boolean;
  url: string;
  title: string;
  buttonTitle?: string;
  buttonUrl?: string;
};
export default function Slide({
  isVideo = false,
  url,
  title,
  buttonTitle,
  buttonUrl,
}: Props) {
  return (
    <div className='relative h-full w-full'>
      {isVideo ? (
        <video
          className={'h-full w-full object-cover'}
          preload={'auto'}
          autoPlay
          muted
          loop
        >
          <source src={url} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image alt={''} src={url} className={'h-full w-full object-cover'} />
      )}
      <div
        className={'absolute inset-0 z-10 h-full w-full bg-black opacity-50'}
      ></div>
      <div
        className={
          'absolute bottom-12 z-20 w-full  px-6 md:bottom-32 md:px-[84px]'
        }
      >
        <h2
          className={
            'mb-6 max-w-[950px] text-2xl font-bold text-white md:mb-8 lg:text-[40px] lg:leading-[64px]'
          }
        >
          {title}
        </h2>
        <div className={'flex w-full items-center gap-8 md:w-auto'}>
          {buttonTitle && buttonUrl ? (
            <Link
              href={buttonUrl}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'flex items-center gap-1 rounded-full text-base font-medium '
              )}
            >
              <span className={'mb-1'}>{buttonTitle}</span>
              <ChevronLeftIcon size={20} />
            </Link>
          ) : null}
          <SliderNavigations />
        </div>
      </div>
    </div>
  );
}

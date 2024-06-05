import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSwiperSlide } from 'swiper/react';

type Props = {
  src: any;
  title: string;
  className?: string;
};

export default function Slide({ src, title, className }: Props) {
  const { isActive } = useSwiperSlide();
  return (
    <Link
      href={'#'}
      className={cn(
        'group relative block h-full w-full overflow-hidden rounded-xl bg-white',
        {},
        className
      )}
    >
      <span className={'absolute inset-0 z-10 bg-black/50'}></span>
      <Image
        src={src}
        alt={title}
        className={
          'z-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
        }
      />
      <p
        className={cn(
          'absolute bottom-6 right-6 z-20 w-[257px] text-base text-white md:text-2xl',
          {
            'text-white': isActive,
          }
        )}
      >
        {title}
      </p>
    </Link>
  );
}

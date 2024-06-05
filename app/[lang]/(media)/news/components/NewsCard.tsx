import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  image: any;
  title: string;
  date: string;
  href: string;
  className?: string;
};
export default function NewsCard({
  image,
  title,
  date,
  href,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn('relative h-[360px] overflow-hidden rounded-xl', className)}
    >
      <span className={'news__card_gradient absolute inset-0 z-10'}></span>
      <div className={'absolute z-0 h-full w-full'}>
        <Image
          src={image}
          alt={title}
          height={360}
          className={'h-full w-full object-cover'}
        />
      </div>
      <div
        className={'relative z-20 flex h-full w-full flex-col justify-end p-8'}
      >
        <span className={'mb-2 text-sm text-white/75'}>{date}</span>
        <p className={'text-xl font-medium text-white'}>{title}</p>
      </div>
    </Link>
  );
}

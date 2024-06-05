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
export default function EventCard({
  image,
  title,
  date,
  href,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'home__services__slide-gradient group flex flex-col gap-4 rounded-2xl border border-[#D7DAD7] p-2',
        className
      )}
    >
      <div className={'h-[200px] w-full overflow-hidden rounded-lg'}>
        <Image
          src={image}
          alt={title}
          height={200}
          className={'h-full w-full object-cover'}
        />
      </div>
      <div className={'mb-2 flex flex-col gap-2'}>
        <p className={'text-xl text-black group-hover:text-white'}>{title}</p>
        <p className={'text-sm text-sub_p group-hover:text-[#D7DAD7]'}>
          {date}
        </p>
      </div>
    </Link>
  );
}

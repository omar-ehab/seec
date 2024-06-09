import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  src: any;
  title: string;
  description: string;
  className?: string;
};
export default function Slide({ src, title, description, className }: Props) {
  return (
    <div
      className={cn(
        'home__services__slide-gradient group flex flex-col gap-4 rounded-2xl border  border-[#D7D7D7] bg-white p-4 hover:border-white xs:w-64 md:h-auto md:w-[25.5rem] md:border-2 md:p-6',

        className
      )}
    >
      <div
        className={
          'border=[rgba(126,137,137,.24)]  size-10 rounded-lg border bg-white p-1 md:size-20 md:rounded-2xl'
        }
      >
        <Image src={src} alt={title} width={64} height={64} />
      </div>
      <p
        className={
          'text-base font-medium text-black group-hover:text-white md:text-[1.25rem]'
        }
      >
        {title}
      </p>
      <p
        className={'text-xs text-black/50 group-hover:text-white/50 md:text-sm'}
      >
        {description}
      </p>
    </div>
  );
}

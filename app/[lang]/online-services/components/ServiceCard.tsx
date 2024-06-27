import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  src: any;
  title: string;
  description: string;
  className?: string;
};
export default function ServiceCard({
  src,
  title,
  description,
  className,
}: Props) {
  return (
    <Link
      href={`/online-services/slug`}
      className={cn(
        'home__services__slide-gradient group rounded-2xl border-2 border-[#D7D7D7] bg-white p-6 hover:border-white',
        className
      )}
    >
      <div
        className={
          'border=[rgba(126,137,137,.24)] mb-4 size-20 rounded-2xl border bg-white p-2'
        }
      >
        <Image src={src} alt={title} width={64} height={64} />
      </div>
      <div
        className={
          'text-[1.25rem] font-medium text-black group-hover:text-white'
        }
      >
        {title}
      </div>
      <p className={'text-sm text-black/50 group-hover:text-white/50'}>
        {description}
      </p>
    </Link>
  );
}

import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  href: string;
  icon: any;
  title: string;
  className?: string;
};
export default function SectorCard({ href, icon, title, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'home__services__slide-gradient group flex flex-col items-center justify-center gap-9 rounded-2xl border-2 border-[#D7D7D7] px-6 py-14 hover:border-white',
        className
      )}
    >
      {icon}
      <p
        className={
          'mb-1 text-center text-2xl font-medium text-black group-hover:text-white'
        }
      >
        {title}
      </p>
    </Link>
  );
}

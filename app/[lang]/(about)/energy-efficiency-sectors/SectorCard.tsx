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
        'home__services__slide-gradient group flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#D7D7D7] p-4 hover:border-white xs:px-6 xs:py-6 sm:gap-9 sm:rounded-2xl sm:py-14',
        className
      )}
    >
      {icon}
      <p
        className={
          'mb-1 text-center font-medium text-black group-hover:text-white sm:text-2xl'
        }
      >
        {title}
      </p>
    </Link>
  );
}

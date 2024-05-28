import { cn } from '@/lib/utils';
import Link from 'next/link';
import ShareIcon from '@/components/icons/ShareIcon';

type Props = {
  category: string;
  title: string;
  link: string;
  className?: string;
};
export default function JobCard({ category, title, link, className }: Props) {
  return (
    <div
      className={cn(
        'home__services__slide-gradient group rounded-2xl border-2 border-[#D7D7D7] bg-white p-6 hover:border-white',
        className
      )}
    >
      <span className={'mb-2 text-sm text-[#7E8989] group-hover:text-white/75'}>
        {category}
      </span>
      <p className={'mb-4 text-xl text-black group-hover:text-white'}>
        {title}
      </p>
      <div className={'flex items-center justify-between'}>
        <Link
          href={link}
          className={
            'rounded-full bg-black/5 px-4 py-2 text-[#7E8989] group-hover:bg-black/25 group-hover:text-white'
          }
        >
          معاينة
        </Link>
        <button
          className={
            'flex items-center gap-1 text-[#7E8989] hover:text-primary group-hover:text-white'
          }
        >
          <ShareIcon className={'mt-1'} />
          <span className={'ml-1'}>مشاركة</span>
        </button>
      </div>
    </div>
  );
}

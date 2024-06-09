import PdfIcon from '@/components/icons/colored/PdfIcon';
import Link from 'next/link';
import ShareIcon from '@/components/icons/ShareIcon';

type Props = {
  category: string;
  title: string;
  link: string;
};
export default function FileCard({ category, title, link }: Props) {
  return (
    <div
      className={
        'home__services__slide-gradient group flex flex-col rounded-2xl border border-[#D7D7D7] bg-white p-6 hover:border-white'
      }
    >
      <PdfIcon className={'mb-6'} />
      <span className={'mb-2 text-sm text-sub_p group-hover:text-white/75'}>
        {category}
      </span>
      <p className={'mb-4 text-xl text-black group-hover:text-white'}>
        {title}
      </p>
      <div className={'flex items-center justify-between'}>
        <Link
          href={link}
          className={
            'rounded-full bg-black/5 px-4 py-2 text-sub_p group-hover:bg-black/25 group-hover:text-white'
          }
        >
          معاينة
        </Link>
        <button
          className={
            'flex items-center gap-1 text-sub_p hover:text-primary group-hover:text-white'
          }
        >
          <ShareIcon />
          <span className={'ml-1'}>مشاركة</span>
        </button>
      </div>
    </div>
  );
}

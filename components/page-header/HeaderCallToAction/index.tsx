import VolumeUpIcon from '@/components/icons/VolumeUpIcon';
import EyeIcon from '@/components/icons/EyeIcon';
import SearchMinusIcon from '@/components/icons/SearchMinusIcon';
import SearchAddIcon from '@/components/icons/SearchAddIcon';
import { Separator } from '@/components/ui/separator';
import ShareIcon from '@/components/icons/ShareIcon';
import PrintButton from '@/components/page-header/HeaderCallToAction/PrintButton';
import ColoredStarIcon from '@/components/icons/colored/StarIcon';
import StarIcon from '@/components/icons/StarIcon';

type Props = {
  numberOfViews: number;
  rate?: number;
};
export default function HeaderCallToAction({ numberOfViews, rate }: Props) {
  return (
    <div
      className={
        'flex  w-full flex-col items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-mini_call_to_action md:flex-row md:gap-0 '
      }
    >
      <div className={'flex items-center gap-2'}>
        {rate ? (
          <>
            <div className={'flex items-center gap-2'}>
              <ColoredStarIcon />
              <span className={'ml-1'}>{rate}/5</span>
            </div>
            <span>.</span>
          </>
        ) : null}
        <p className={'text-sub_p'}>
          <span className={'ml-1'}>{numberOfViews}</span>
          مشاهدة
        </p>
      </div>
      <div className={'flex h-6 items-center gap-4'}>
        <ul className={'flex items-center gap-4'}>
          <li>
            <button className={'text-sub_p'}>
              <VolumeUpIcon className={'hover:text-primary'} />
            </button>
          </li>
          <li>
            <button className={'text-sub_p'}>
              <EyeIcon className={'hover:text-primary'} />
            </button>
          </li>
          <li>
            <button className={'text-sub_p'}>
              <SearchMinusIcon className={'hover:text-primary'} />
            </button>
          </li>
          <li>
            <button className={'text-sub_p'}>
              <SearchAddIcon className={'hover:text-primary'} />
            </button>
          </li>
        </ul>
        {rate ? (
          <>
            <Separator orientation={'vertical'} />
            <button
              className={'flex items-center gap-1 text-sub_p hover:text-primary group'}
            >
              <StarIcon />
              <span className={'ml-1'}>إضافة تقييم</span>
            </button>
          </>
        ) : null}
        <Separator orientation={'vertical'} />
        <PrintButton />
        <Separator orientation={'vertical'} />
        <button
          className={'flex items-center gap-1 text-sub_p hover:text-primary'}
        >
          <ShareIcon />
          <span className={'ml-1'}>مشاركة</span>
        </button>
      </div>
    </div>
  );
}

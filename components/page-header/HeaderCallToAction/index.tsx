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
        'flex  w-full flex-col items-center justify-between gap-4 rounded-2xl bg-white p-2 shadow-mini_call_to_action md:flex-row md:gap-0 md:p-5 '
      }
    >
      <div className={'md:text-md flex items-center gap-2 text-lg'}>
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
      <div className={'flex items-center gap-2.5 sm:h-6 sm:gap-4'}>
        <ul className={'just flex items-center gap-3 xs:gap-4'}>
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
              className={
                'group flex items-center gap-1 text-sub_p hover:text-primary'
              }
            >
              <StarIcon />
              <span className={'ml-1'}>إضافة تقييم</span>
            </button>
          </>
        ) : null}
        <Separator className='h-8 sm:h-full' orientation={'vertical'} />
        <PrintButton />
        <Separator className='h-8 sm:h-full' orientation={'vertical'} />
        <button
          className={
            'flex flex-col items-center justify-center gap-0 text-sub_p hover:text-primary sm:flex-row sm:gap-1'
          }
        >
          <ShareIcon />
          <span className={''}>مشاركة</span>
        </button>
      </div>
    </div>
  );
}

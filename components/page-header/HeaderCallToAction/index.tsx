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
        'flex w-full flex-col items-center justify-between gap-6 rounded-2xl bg-white px-1 py-3 shadow-mini_call_to_action md:gap-4 lg:flex-row lg:gap-0 lg:px-5'
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
      <div
        className={
          'grid w-full grid-flow-dense grid-cols-3 content-center items-center justify-center justify-items-center gap-x-0 gap-y-4 md:flex md:w-auto md:gap-4'
        }
      >
        <ul className={'col-span-full flex items-center gap-6 md:gap-4'}>
          <li>
            <button
              className={'rounded-full border p-2 text-sub_p md:border-0'}
            >
              <VolumeUpIcon
                className={'size-4  hover:text-primary md:size-auto'}
              />
            </button>
          </li>
          <li>
            <button
              className={'rounded-full border p-2 text-sub_p md:border-0'}
            >
              <EyeIcon className={'size-4  hover:text-primary md:size-auto'} />
            </button>
          </li>
          <li>
            <button
              className={'rounded-full border p-2 text-sub_p md:border-0'}
            >
              <SearchMinusIcon
                className={'size-4  hover:text-primary md:size-auto'}
              />
            </button>
          </li>
          <li>
            <button
              className={'rounded-full border p-2 text-sub_p md:border-0'}
            >
              <SearchAddIcon
                className={'size-4  hover:text-primary md:size-auto'}
              />
            </button>
          </li>
        </ul>
        {rate ? (
          <>
            <Separator
              className='hidden h-8 md:block'
              orientation={'vertical'}
            />
            <button
              className={
                'group col-start-2 flex items-center gap-1 text-sm text-sub_p hover:text-primary sm:text-base'
              }
            >
              <StarIcon className=' size-4 sm:size-auto sm:text-base' />
              <span className={''}>إضافة تقييم</span>
            </button>
          </>
        ) : null}
        <Separator className='hidden h-8 md:block' orientation={'vertical'} />
        <PrintButton />
        <Separator className='hidden h-8 md:block' orientation={'vertical'} />
        <button
          className={
            'col-start-3 flex flex-row  items-center justify-center gap-1 text-sm  text-sub_p hover:text-primary sm:text-base'
          }
        >
          <ShareIcon className=' size-4 sm:size-auto sm:text-base' />
          <span className={''}>مشاركة</span>
        </button>
      </div>
    </div>
  );
}

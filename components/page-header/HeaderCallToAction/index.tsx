import VolumeUpIcon from '@/components/icons/VolumeUpIcon';
import EyeIcon from '@/components/icons/EyeIcon';
import SearchMinusIcon from '@/components/icons/SearchMinusIcon';
import SearchAddIcon from '@/components/icons/SearchAddIcon';
import { Separator } from '@/components/ui/separator';
import ShareIcon from '@/components/icons/ShareIcon';
import PrintButton from '@/components/page-header/HeaderCallToAction/PrintButton';

type Props = {
  numberOfViews: number;
};
export default function HeaderCallToAction({ numberOfViews }: Props) {
  return (
    <div
      className={
        'flex h-16 w-full items-center justify-between rounded-2xl bg-white p-5 shadow-mini_call_to_action '
      }
    >
      <p className={'text-[#7E8989]'}>
        <span className={'ml-1'}>{numberOfViews}</span>
        مشاهدة
      </p>
      <div className={'flex h-6 items-center gap-4'}>
        <ul className={'flex items-center gap-4'}>
          <li>
            <button className={'text-[#7E8989]'}>
              <VolumeUpIcon className={'hover:text-primary'} />
            </button>
          </li>
          <li>
            <button className={'text-[#7E8989]'}>
              <EyeIcon className={'hover:text-primary'} />
            </button>
          </li>
          <li>
            <button className={'text-[#7E8989]'}>
              <SearchMinusIcon className={'hover:text-primary'} />
            </button>
          </li>
          <li>
            <button className={'text-[#7E8989]'}>
              <SearchAddIcon className={'hover:text-primary'} />
            </button>
          </li>
        </ul>
        <Separator orientation={'vertical'} />
        <PrintButton />
        <Separator orientation={'vertical'} />
        <button
          className={
            'flex items-center gap-1 text-[#7E8989] hover:text-primary'
          }
        >
          <ShareIcon />
          <span className={'ml-1'}>مشاركة</span>
        </button>
      </div>
    </div>
  );
}

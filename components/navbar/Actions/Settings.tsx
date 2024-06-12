import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SettingsIcon from '@/components/icons/SettingsIcon';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import PlusIcon from '@/components/icons/PlusIcon';
import MinusIcon from '@/components/icons/MinusIcon';
import { Button } from '@/components/ui/button';
import VolumeHighIcon from '@/components/icons/VolumeHighIcon';

type Props = { isTransparent: boolean };
export default function Settings({ isTransparent }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'group flex h-10 w-10 items-center justify-center rounded-full border',
          {
            'border-white/75 hover:border-white': isTransparent,
            'border-[#7E8989] hover:border-black': !isTransparent,
          }
        )}
      >
        <SettingsIcon
          size={20}
          className={cn({
            'text-[rgba(255,255,255,0.75)] group-hover:text-white':
              isTransparent,
            'text-sub_p group-hover:text-black': !isTransparent,
          })}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'w-[170px] rounded-lg p-2'}>
        <div className={'flex flex-col items-start gap-4'}>
          <div className={'flex w-full flex-col items-end gap-2'}>
            <p className={'text-sub_p'}>المظهر الداكن</p>
            <Switch />
          </div>
          <div className={'flex w-full flex-col  items-end gap-2'}>
            <p className={'text-sub_p'}>الخط</p>
            <div
              className={
                'flex w-full items-center justify-between rounded-full bg-[#CAD6DB]/50 p-1'
              }
            >
              <button
                className={
                  'flex size-8 items-center justify-center rounded-full bg-white shadow-[0_2px_4px_0_rgba(32,32,33,.15)] hover:bg-zinc-50'
                }
              >
                <MinusIcon size={16} className={'text-sub_p'} />
              </button>
              <span className={'text-black'}>Aa</span>
              <button
                className={
                  'flex size-8 items-center justify-center rounded-full bg-white shadow-[0_2px_4px_0_rgba(32,32,33,.15)] hover:bg-zinc-50'
                }
              >
                <PlusIcon size={16} className={'text-primary'} />
              </button>
            </div>
          </div>

          <div className={'flex w-full flex-col items-end gap-2'}>
            <p className={'text-sub_p'}>قراءة الصفحة</p>
            <Button
              variant={'outline'}
              className={
                'flex w-full items-center justify-center gap-2 rounded-full border-primary text-primary hover:text-primary'
              }
            >
              <span>قراءة</span>
              <VolumeHighIcon />
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

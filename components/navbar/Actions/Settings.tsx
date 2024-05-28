import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SettingsIcon from '@/components/icons/SettingsIcon';
import { cn } from '@/lib/utils';

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
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { Input } from '@/components/ui/input';
import SearchIcon from '@/components/icons/SearchIcon';

export default function SearchInput() {
  return (
    <div className={'relative w-[300px]'}>
      <Input
        className={
          'rounded-full bg-transparent pr-10 placeholder:text-sub_p focus-visible:ring-primary'
        }
        placeholder={'البحث عن فعالية'}
      />
      <SearchIcon
        className={'absolute right-3 top-1/2 -translate-y-1/2 text-sub_p'}
        size={18}
      />
    </div>
  );
}

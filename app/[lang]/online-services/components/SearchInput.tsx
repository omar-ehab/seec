import { Input } from '@/components/ui/input';
import SearchIcon from '@/components/icons/SearchIcon';

export default function SearchInput() {
  return (
    <div className={'relative w-[300px]'}>
      <Input
        className={
          'rounded-full bg-transparent pr-10 placeholder:text-[#7E8989] focus-visible:ring-primary'
        }
        placeholder={'البحث عن خدمة'}
      />
      <SearchIcon
        className={'absolute right-3 top-1/2 -translate-y-1/2 text-[#7E8989]'}
        size={18}
      />
    </div>
  );
}

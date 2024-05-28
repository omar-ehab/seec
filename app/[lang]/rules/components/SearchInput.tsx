import { Input } from '@/components/ui/input';
import SearchIcon from '@/components/icons/SearchIcon';

export default function SearchInput() {
  return (
    <div className={'relative w-[300px]'}>
      <Input
        className={
          'placeholder:text-sub_p rounded-full bg-transparent pr-10 focus-visible:ring-primary'
        }
        placeholder={'البحث عن ملف'}
      />
      <SearchIcon
        className={'text-sub_p absolute right-3 top-1/2 -translate-y-1/2'}
        size={18}
      />
    </div>
  );
}

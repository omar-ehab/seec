'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Subscribe() {
  return (
    <div className={'relative w-full max-w-[420px] '}>
      <Input
        className={
          'h-12 flex-1 rounded-full placeholder:text-sub_p focus-visible:ring-primary md:w-[420px]'
        }
        placeholder={'ادخل بريدك الإلكتروني'}
      />
      <Button
        className={
          'absolute left-0 top-0 h-12 w-24 rounded-full px-3 py-6 font-medium'
        }
      >
        إشتراك
      </Button>
    </div>
  );
}

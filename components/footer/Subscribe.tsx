'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Subscribe() {
  return (
    <div className={'relative'}>
      <Input
        className={
          ' placeholder:text-sub_p h-12 min-w-[420px] rounded-full focus-visible:ring-primary'
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

import CommentIcon from '@/components/icons/colored/CommentIcon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CommentCta({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-2xl bg-primary/10 p-6',
        className
      )}
    >
      <div className={'flex items-center gap-6'}>
        <CommentIcon />
        <p className={'text-xl text-black'}>
          هل لديك تعليق أو استفسار عن الخدمة
        </p>
      </div>
      <Button
        variant={'outline'}
        className={
          'rounded-full border-primary bg-white text-primary hover:text-primary'
        }
      >
        اضافة تعليق
      </Button>
    </div>
  );
}

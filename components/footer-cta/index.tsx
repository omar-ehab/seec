import CommentCta from '@/components/comment-cta';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  lastUpdateDate: string;
  className?: string;
};

export default function FooterCta({ lastUpdateDate, className }: Props) {
  return (
    <div className={cn('mt-24', className)}>
      <p className={'mb-8'}>
        <span className={'ml-2 text-sub_p'}>آخر تحديث بتاريخ:</span>
        <span className={'font-medium text-black'}>{lastUpdateDate}</span>
      </p>
      <CommentCta className={'mb-6'} />
      <div className={'flex items-center gap-6'}>
        <p>هل أعجبك المحتوى المقدم في هذه الصفحة؟</p>
        <div className={'flex items-center gap-4'}>
          <Button
            variant={'outline'}
            className={
              'h-8 rounded-full border-primary px-4 py-2 text-primary hover:text-primary'
            }
          >
            نعم
          </Button>
          <Button
            variant={'outline'}
            className={
              'h-8 rounded-full border-primary px-4 py-2 text-primary hover:text-primary'
            }
          >
            لا
          </Button>
        </div>
      </div>
    </div>
  );
}

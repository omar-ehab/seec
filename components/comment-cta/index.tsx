import CommentIcon from '@/components/icons/colored/CommentIcon';
import { cn } from '@/lib/utils';
import CommentDialog from '@/components/comment-cta/CommentDialog';

export default function CommentCta({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary/10 px-4 py-6 xs:flex-row xs:gap-4 md:py-4',
        className
      )}
    >
      <div className={'flex items-center gap-6'}>
        <CommentIcon className={'size-8 flex-shrink-0'} />
        <p className={'text-xl text-black'}>
          هل لديك تعليق أو استفسار عن الخدمة
        </p>
      </div>
      <CommentDialog />
    </div>
  );
}

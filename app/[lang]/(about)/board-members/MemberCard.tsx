import Image from 'next/image';
import { cn } from '@/lib/utils';
import Logo from '@/app/[lang]/(about)/board-members/Logo';

type Props = {
  image?: any;
  size?: 'sm' | 'lg';
  title: string;
  name: string;
  position: string;
  className?: string;
};
export default function MemberCard({
  image,
  size = 'sm',
  title,
  name,
  position,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-6',
        {
          'w-[257px]': size === 'sm',
          'w-[320px]': size === 'lg',
        },
        className
      )}
    >
      <div
        className={cn('rounded-full bg-white', {
          'size-24': size === 'sm',
          'size-40': size === 'lg',
        })}
      >
        <div
          className={cn('h-full w-full rounded-full', {
            'normal_member_image_bg size-24': size === 'sm',
            'leader_member_image_bg size-40': size === 'lg',
            'flex items-center justify-center': !image,
          })}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              width={size === 'sm' ? 150 : 100}
              height={size === 'sm' ? 150 : 100}
              className='h-full w-full rounded-full object-contain'
            />
          ) : (
            <Logo className={''} />
          )}
        </div>
      </div>
      <div>
        <p className={'mb-1 text-center text-xs text-black'}>{title}</p>
        <p
          className={cn('mb-2 text-center font-medium text-black', {
            'text-[18px]': size === 'sm',
            'text-2xl': size === 'lg',
          })}
        >
          {name}
        </p>
        <p
          className={cn('text-center text-sm', {
            'text-sub_p': size === 'sm',
            'text-primary': size === 'lg',
          })}
        >
          {position}
        </p>
      </div>
    </div>
  );
}

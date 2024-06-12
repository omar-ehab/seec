import { cn } from '@/lib/utils';

type Props = {
  size: 'sm' | 'lg';
  className?: string;
};

export default function ColorPreview({ size, className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size === 'lg' ? 160 : 96}
      height={size === 'lg' ? 193 : 114}
      fill='none'
      viewBox={size === 'lg' ? '0 0 160 193' : '0 0 96 114'}
      className={cn('text-primary', className)}
    >
      {size === 'lg' ? (
        <path
          fill='currentColor'
          d='M160 31.694c0-8.128-6.094-14.965-14.169-15.895l-128-14.745C8.331-.04 0 7.387 0 16.949V176.91c0 9.612 8.415 17.054 17.955 15.88l128-15.755c8.02-.987 14.045-7.799 14.045-15.88V31.694z'
        ></path>
      ) : (
        <path
          fill='currentColor'
          d='M96 24.273c0-8.131-6.1-14.97-14.178-15.896l-64-7.334C8.326-.046 0 7.38 0 16.939V97.92c0 9.608 8.408 17.049 17.945 15.882l64-7.838C89.969 104.983 96 98.168 96 90.084v-65.81z'
        ></path>
      )}
    </svg>
  );
}

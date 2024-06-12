import IconProps from '@/types/icon-props';

export default function MinusIcon({ size, className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={size ?? 24}
      height={size ?? 24}
      fill={'none'}
      className={className}
    >
      <path
        d='M20 12L4 12'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

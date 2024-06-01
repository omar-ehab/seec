export default function MoneyIcon({ ...props }: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
      {...props}
    >
      <path
        stroke='#202021'
        strokeWidth='1.5'
        d='M16 26c-1.776.83-4.11 1.334-6.666 1.334-1.422 0-2.774-.156-4-.437-2.11-.483-2.667-1.724-2.667-3.715V8.819c0-1.313 1.387-2.215 2.667-1.922 1.226.281 2.578.437 4 .437C11.89 7.334 14.224 6.83 16 6c1.777-.83 4.11-1.333 6.667-1.333 1.421 0 2.774.156 4 .437 2.109.483 2.667 1.723 2.667 3.715v14.363c0 1.313-1.387 2.215-2.667 1.922a18.012 18.012 0 00-4-.437c-2.556 0-4.89.503-6.667 1.333z'
      ></path>
      <path
        stroke='url(#paint0_linear_1902_6361)'
        strokeWidth='1.5'
        d='M19.334 16a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z'
      ></path>
      <path
        stroke='#202021'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M7.334 17.334v.012M24.667 14.656v.012'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_1902_6361'
          x1='16'
          x2='16'
          y1='13.577'
          y2='19.334'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#73AE28'></stop>
          <stop offset='1' stopColor='#006F59'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

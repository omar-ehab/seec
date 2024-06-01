export default function ClockIcon({ ...props }: any) {
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
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16 29.334c-7.364 0-13.333-5.97-13.333-13.334C2.667 8.637 8.637 2.667 16 2.667c5.97 0 10.968 3.924 12.667 9.333h-3.333'
      ></path>
      <path
        stroke='url(#paint0_linear_1902_6373)'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16 10.667V16l2.667 2.667'
      ></path>
      <path
        stroke='#202021'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M29.273 17.333c.04-.438.06-.883.06-1.333M20 29.333c.456-.15.9-.324 1.333-.523m6.388-6.143c.257-.496.486-1.01.686-1.539m-4.15 5.844c.459-.38.894-.79 1.301-1.23'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_1902_6373'
          x1='17.333'
          x2='17.333'
          y1='11.758'
          y2='18.667'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#73AE28'></stop>
          <stop offset='1' stopColor='#006F59'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

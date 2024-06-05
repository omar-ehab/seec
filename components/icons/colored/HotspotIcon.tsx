export default function HotspotIcon({ ...props }: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
      {...props}
    >
      <circle
        cx='15.999'
        cy='18.667'
        r='2.667'
        stroke='url(#paint0_linear_2055_24210)'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      ></circle>
      <path
        stroke='#202021'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.333 26.667a13.274 13.274 0 01-2.667-8.002c0-7.363 5.97-13.333 13.333-13.333 7.364 0 13.334 5.97 13.334 13.333 0 3.003-.993 5.773-2.667 8.002M10.037 23.997a8 8 0 1111.926 0'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_2055_24210'
          x1='15.999'
          x2='15.999'
          y1='16.728'
          y2='21.333'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#73AE28'></stop>
          <stop offset='1' stopColor='#006F59'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

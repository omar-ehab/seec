export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='35'
      height='42'
      fill='none'
      viewBox='0 0 35 42'
      className={className}
    >
      <path
        fill='url(#paint0_radial_1563_10369)'
        d='M2.274 3.673A2 2 0 00.5 5.66v31.017a2 2 0 001.794 1.99l30 3.105a2 2 0 002.206-1.99V2.241A2 2 0 0032.273.254l-30 3.419zM25.27 33.726a2.503 2.503 0 01-3.586.003 6.657 6.657 0 01-1.881-4.631V15.22c0-1.438-1.149-2.611-2.563-2.611-1.414 0-2.562 1.17-2.562 2.611v9.955c0 1.427-1.135 2.583-2.535 2.583-1.4 0-2.535-1.156-2.535-2.583v-9.947c0-.474-.5-.803-.974-.803-1.4 0-2.534-1.156-2.534-2.583 0-1.033.44-1.977 1.206-2.592.924-.741 2.268-.881 3.55-.507.857.25 1.818.185 2.588-.267a7.47 7.47 0 013.796-1.034c4.21 0 7.632 3.489 7.632 7.778v13.878c0 .364.144.72.396.976a2.613 2.613 0 01.003 3.652z'
        opacity='0.5'
      ></path>
      <defs>
        <radialGradient
          id='paint0_radial_1563_10369'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(49.1326 0 0 50.0731 -1.245 2.234)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#DCDE22'></stop>
          <stop offset='0.204' stopColor='#B4CC36'></stop>
          <stop offset='0.385' stopColor='#80B241'></stop>
          <stop offset='0.643' stopColor='#2B9046'></stop>
          <stop offset='0.805' stopColor='#297D59'></stop>
          <stop offset='1' stopColor='#2D6D5A'></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

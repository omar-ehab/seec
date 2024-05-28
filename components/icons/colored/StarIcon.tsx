export default function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        fill='url(#paint0_radial_1763_3546)'
        d='M11.996 1.25c1.05 0 1.876.793 2.403 1.862l1.763 3.553c.053.11.18.265.37.407.19.141.377.22.5.24l3.189.534c1.152.194 2.118.758 2.431 1.742.313.982-.146 2.004-.974 2.834h-.001l-2.478 2.499a1.272 1.272 0 00-.277.528 1.318 1.318 0 00-.044.604v.002l.71 3.09c.294 1.287.196 2.562-.71 3.23-.911.668-2.155.372-3.286-.301l-2.99-1.785c-.125-.075-.34-.136-.6-.136-.26 0-.48.06-.613.138l-.002.001-2.984 1.781c-1.129.676-2.371.967-3.282.297-.907-.667-1.009-1.94-.714-3.225l.709-3.09v-.002a1.318 1.318 0 00-.043-.604 1.272 1.272 0 00-.277-.528l-2.48-2.5c-.823-.83-1.28-1.85-.97-2.832.312-.984 1.275-1.55 2.428-1.743l3.187-.534h.001c.117-.02.3-.097.49-.24.19-.141.318-.297.371-.407l.003-.005 1.76-3.549V3.11c.533-1.069 1.362-1.86 2.41-1.86z'
      ></path>
      <defs>
        <radialGradient
          id='paint0_radial_1763_3546'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='rotate(117.013 7.944 5.554) scale(28.6225 23.6124)'
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

export function Imagotype({
  className = '',
  isotypeSize = 32,
}: {
  className?: string;
  isotypeSize?: number;
}) {
  return (
    <div className={`flex gap-2 font-bold tracking-tight ${className}`}>
      <Logo size={isotypeSize} />
      <span className="font-funnel-display text-fg-strong hidden text-2xl lg:block">AtlasWay</span>
    </div>
  );
}

export function Logo({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="634.08"
          y1="-169.43"
          x2="634.08"
          y2="342.56"
          id="gradient-1"
          gradientTransform="matrix(0.72, -0.68, 0.50, 0.53, 100.13, 583.13)"
        >
          <stop offset="0" stopColor="rgb(6, 6, 6)" />
          <stop offset="1" stopColor="rgb(9, 9, 9)" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="589.79"
          y1="9.13"
          x2="589.79"
          y2="318.05"
          id="gradient-0"
          gradientTransform="matrix(0.75, -0.42, 0.42, 0.75, 66.49, 302.93)"
        >
          <stop offset="0" stopColor="rgb(238, 15, 15)" />
          <stop offset="1" stopColor="rgb(119, 1, 1)" />
        </linearGradient>
      </defs>
      <g transform="matrix(1, 0, 0, 1, -333.79, 77.03)">
        <path
          fillRule="evenodd"
          d="M 419.5 -77.03 L 759.46 -77.03 C 807.28 -77.03 845.79 -38.52 845.79 8.67 L 845.79 348.64 C 845.79 396.45 807.28 434.96 759.46 434.96 L 419.5 434.96 C 372.30 434.96 333.79 396.45 333.79 348.64 L 333.79 8.67 C 333.79 -38.52 372.30 -77.03 419.5 -77.03 Z"
          strokeWidth="1"
          paintOrder="fill"
          fill='url("#gradient-1")'
        />
        <g transform="matrix(1, 0, 0, 1, 4.02, -9.91)">
          <path
            fillRule="evenodd"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="50px"
            fill="none"
            d="M 660.4 300.94 L 585.51 177.794 L 511.12 300.94 C 469.52 275.69 441.74 229.96 441.74 177.75 C 441.74 98.20 506.22 33.73 585.51 33.73 C 665.30 33.73 729.78 98.20 729.78 177.75 C 729.78 229.96 701.99 275.69 660.4 300.94 Z"
            stroke='url("#gradient-0")'
          />
          <path
            fillRule="evenodd"
            fill="rgb(238, 15, 15)"
            d="M 585.76 284.41 L 636.80 368.64 L 534.71 368.64 L 585.76 284.41 Z"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
}

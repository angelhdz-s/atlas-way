export function IconCircle({
  className = '',
  porcentage = 0,
  animation = false,
  strokeWidth,
}: {
  className?: string;
  strokeWidth?: string;
  porcentage?: number;
  animation?: boolean;
}) {
  const max = 100;
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      className={className}
      strokeDasharray={max}
      strokeDashoffset={max}
    >
      {animation && (
        <animate
          attributeName="stroke-dashoffset"
          from={max}
          to={max - porcentage * (17 / 30)}
          dur="1s"
          fill="freeze"
        />
      )}
      <circle cx={12} cy={12} r={9} />
    </svg>
  );
}

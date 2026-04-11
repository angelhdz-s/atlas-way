import type { IconProps, IconTypes } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';
import { twMerge } from 'tailwind-merge';

export const defaultIconStrokeWidth = '1.5';
export const defaultIconSizeClass = 'size-6';

export function DefaultIcon({
  Icon,
  className = '',
  strokeWidth = defaultIconStrokeWidth,
}: {
  Icon: IconTypes;
  className?: string;
  strokeWidth?: string;
}) {
  return <Icon className={twMerge(defaultIconSizeClass, className)} strokeWidth={strokeWidth} />;
}

export function IconArrowUp(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </IconWrapper>
  );
}

export function IconArrowsLeftRight(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </IconWrapper>
  );
}

export function IconBarbell(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M2 12h1" />
      <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
      <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
      <path d="M9 12h6" />
      <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
      <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
      <path d="M22 12h-1" />
    </IconWrapper>
  );
}

export function IconLayoutSidebar(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M9 4l0 16" />
    </IconWrapper>
  );
}

export function IconBell(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </IconWrapper>
  );
}

export function IconBellRinging(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
      <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
    </IconWrapper>
  );
}

export function IconBellOff(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
      />
    </IconWrapper>
  );
}

export function IconBellZ(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      <path d="M10 9h4l-4 4h4" />
    </IconWrapper>
  );
}

export function IconBarbellOff(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M2 12h1" />
      <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
      <path d="M6.298 6.288a1 1 0 0 0 -.298 .712v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-8" />
      <path d="M9 12h3" />
      <path d="M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523 -.11 .704 -.29m.296 -3.71v-7a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v4" />
      <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1" />
      <path d="M22 12h-1" />
      <path d="M3 3l18 18" />
    </IconWrapper>
  );
}

export function IconCalendarWeek(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M7 14h.013" />
      <path d="M10.01 14h.005" />
      <path d="M13.01 14h.005" />
      <path d="M16.015 14h.005" />
      <path d="M13.015 17h.005" />
      <path d="M7.01 17h.005" />
      <path d="M10.01 17h.005" />
    </IconWrapper>
  );
}

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

export function IconCircleCheck(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </IconWrapper>
  );
}

export function IconCircleOutline(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </IconWrapper>
  );
}

export function IconMapRoute(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
      <path d="M9 12v.01" />
      <path d="M6 13v.01" />
      <path d="M17 15l-4 -4" />
      <path d="M13 15l4 -4" />
    </IconWrapper>
  );
}

export function IconAlarm(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M12 10l0 3l2 0" />
      <path d="M7 4l-2.75 2" />
      <path d="M17 4l2.75 2" />
    </IconWrapper>
  );
}

export function IconCog(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </IconWrapper>
  );
}

export function IconDeviceDesktop(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
      <path d="M7 20h10" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </IconWrapper>
  );
}

export function IconEdit(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
      <path d="M16 5l3 3" />
    </IconWrapper>
  );
}

export function IconAlertTriangle(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 9v4" />
      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
      <path d="M12 16h.01" />
    </IconWrapper>
  );
}

export function IconFaceHappy(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
      />
    </IconWrapper>
  );
}

export function IconPlayerTrackNext(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 5v14l8 -7z" />
      <path d="M14 5v14l8 -7z" />
    </IconWrapper>
  );
}

export function IconPlayerTrackPrev(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M21 5v14l-8 -7l8 -7" />
      <path d="M10 5v14l-8 -7l8 -7" />
    </IconWrapper>
  );
}

export function IconHome(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </IconWrapper>
  );
}

export function IconInformationCircle(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 9h.01" />
      <path d="M11 12h1v4h1" />
    </IconWrapper>
  );
}

export function IconLanguage(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 5h7" />
      <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
      <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
      <path d="M12 20l4 -9l4 9" />
      <path d="M19.1 18h-6.2" />
    </IconWrapper>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </IconWrapper>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </IconWrapper>
  );
}

export function IconDots(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </IconWrapper>
  );
}

export function IconDeviceDesktopAnalytics(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
      <path d="M7 20h10" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
      <path d="M9 12v-4" />
      <path d="M12 12v-1" />
      <path d="M15 12v-2" />
      <path d="M12 12v-1" />
    </IconWrapper>
  );
}

export function IconScale(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M7 20l10 0" />
      <path d="M6 6l6 -1l6 1" />
      <path d="M12 3l0 17" />
      <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
      <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    </IconWrapper>
  );
}

export function IconSun(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
      <path d="M6.343 17.657l-1.414 1.414" />
      <path d="M6.343 6.343l-1.414 -1.414" />
      <path d="M17.657 6.343l1.414 -1.414" />
      <path d="M17.657 17.657l1.414 1.414" />
      <path d="M4 12h-2" />
      <path d="M12 4v-2" />
      <path d="M20 12h2" />
      <path d="M12 20v2" />
    </IconWrapper>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </IconWrapper>
  );
}

export function IconTrendingDown(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 7l6 6l4 -4l8 8" />
      <path d="M21 10l0 7l-7 0" />
    </IconWrapper>
  );
}

export function IconTrendingUp(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 17l6 -6l4 4l8 -8" />
      <path d="M14 7l7 0l0 7" />
    </IconWrapper>
  );
}

export function IconTrophy(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M8 21l8 0" />
      <path d="M12 17l0 4" />
      <path d="M7 4l10 0" />
      <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
      <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </IconWrapper>
  );
}

export function IconHammer(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
      <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z" />
    </IconWrapper>
  );
}

export function IconXCircle(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </IconWrapper>
  );
}

export function IconXMark(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </IconWrapper>
  );
}

export function IconClipboardList(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M9 12l.01 0" />
      <path d="M13 12l2 0" />
      <path d="M9 16l.01 0" />
      <path d="M13 16l2 0" />
    </IconWrapper>
  );
}

export function IconMan(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10 16v5" />
      <path d="M14 16v5" />
      <path d="M9 9h6l-1 7h-4z" />
      <path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
      <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
      <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </IconWrapper>
  );
}

export function IconChartPie(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
      <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
    </IconWrapper>
  );
}

export function IconReportAnalytics(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M9 17v-5" />
      <path d="M12 17v-1" />
      <path d="M15 17v-3" />
    </IconWrapper>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
    </IconWrapper>
  );
}

export function IconCirclePlus(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </IconWrapper>
  );
}

export function IconCalendarClock(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h10" />
      <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M18 16.5v1.5l.5 .5" />
    </IconWrapper>
  );
}

export function IconMapPlus(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8.5" />
      <path d="M9 4v13" />
      <path d="M15 7v8" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </IconWrapper>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </IconWrapper>
  );
}

export function IconUser(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </IconWrapper>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </IconWrapper>
  );
}

export function IconCalendarCheck(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M15 19l2 2l4 -4" />
    </IconWrapper>
  );
}

export function IconChartLine(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 19l16 0" />
      <path d="M4 15l4 -6l4 2l4 -5l4 4" />
    </IconWrapper>
  );
}

export function IconAward(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
      <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
      <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
    </IconWrapper>
  );
}

export function IconListCheck(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
      <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
      <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
      <path d="M11 6l9 0" />
      <path d="M11 12l9 0" />
      <path d="M11 18l9 0" />
    </IconWrapper>
  );
}

export function IconRouteX(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 17l4 4" />
      <path d="M7 17l-4 4" />
      <path d="M17 3l4 4" />
      <path d="M21 3l-4 4" />
      <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
    </IconWrapper>
  );
}

export function IconSchema(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M5 2h5v4h-5l0 -4" />
      <path d="M15 10h5v4h-5l0 -4" />
      <path d="M5 18h5v4h-5l0 -4" />
      <path d="M5 10h5v4h-5l0 -4" />
      <path d="M10 12h5" />
      <path d="M7.5 6v4" />
      <path d="M7.5 14v4" />
    </IconWrapper>
  );
}

export function IconSitemap(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
      <path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
      <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
      <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
      <path d="M12 9l0 3" />
    </IconWrapper>
  );
}

export function IconRotateClockwise(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
      <path d="M5.63 7.16l0 .01" />
      <path d="M4.06 11l0 .01" />
      <path d="M4.63 15.1l0 .01" />
      <path d="M7.16 18.37l0 .01" />
      <path d="M11 19.94l0 .01" />
    </IconWrapper>
  );
}

export function IconRocket(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
      <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
      <path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </IconWrapper>
  );
}

export function IconGripVertical(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </IconWrapper>
  );
}

export function IconZZ(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-6 8h6" />
    </IconWrapper>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </IconWrapper>
  );
}

export function IconLogout(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
      <path d="M9 12h12l-3 -3" />
      <path d="M18 15l3 -3" />
    </IconWrapper>
  );
}

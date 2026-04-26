'use client';

import { useEffect, useState } from 'react';
import { IconAlarm } from '@/presentation/globals/components/icons/outline/IconAlarm';
import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { IconBell } from '@/presentation/globals/components/icons/outline/IconBell';
import { IconEdit } from '@/presentation/globals/components/icons/outline/IconEdit';
import { IconMapRoute } from '@/presentation/globals/components/icons/outline/IconMapRoute';
import { IconHeart } from '@/presentation/globals/components/icons/outline/IconHeart';
import { IconScale } from '@/presentation/globals/components/icons/outline/IconScale';
import { IconTrendingUp } from '@/presentation/globals/components/icons/outline/IconTrendingUp';
import { IconTrophy } from '@/presentation/globals/components/icons/outline/IconTrophy';
import { IconPlayerTrackNext } from '@/presentation/globals/components/icons/outline/IconPlayerTrackNext';
import styles from '@/presentation/modules/landing/components/bentogrid/IconsAnimation.module.css';
import type { IconTypes } from '@/presentation/globals/presentation.types';

const ICONS: IconTypes[] = [
  IconBell,
  IconBarbell,
  IconMapRoute,
  IconAlarm,
  IconEdit,
  IconPlayerTrackNext,
  IconHeart,
  IconScale,
  IconTrendingUp,
  IconTrophy,
];

const DURATION = 20000;

const DIRECTION = {
  right: `${styles.slide_right}`,
  left: `${styles.slide_left}`,
};

type AnimationDirection = keyof typeof DIRECTION;

function IconContainer({
  className = '',
  style,
  Icon,
}: {
  className?: string;
  style?: React.CSSProperties;
  Icon: IconTypes;
}) {
  return (
    <figure className={`absolute top-0 left-0 block ${className}`} style={style}>
      <Icon
        className="text-fg-strong animate-wiggle-more animate-infinite animate-duration-5000 size-8"
        strokeWidth="1"
      />
    </figure>
  );
}

export function IconsAnimation({ direction }: { direction: AnimationDirection }) {
  const [mounted, setMounted] = useState(false);

  const limitRange = ICONS.length;
  const displacedIndex = Math.floor(Math.random() * limitRange);

  const getIndex = (index: number) => {
    const currentIndex = index + displacedIndex;
    if (currentIndex >= limitRange) {
      return currentIndex - limitRange;
    }
    return currentIndex;
  };

  const getDelay = (index: number) => {
    const delay = getIndex(index) * (DURATION / ICONS.length);
    return delay;
  };

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    mounted && (
      <div className="animate-fade relative h-8 w-full mask-x-from-50% mask-x-to-100%">
        <div className={`absolute top-0 -left-6`}>
          {ICONS.map((Icon, index) => {
            return (
              <IconContainer
                className={`${DIRECTION[direction]}`}
                style={{
                  animationDelay: `-${getDelay(index)}ms`,
                  animationDuration: `${DURATION}ms`,
                }}
                key={index}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    )
  );
}

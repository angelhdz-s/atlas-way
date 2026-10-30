'use client';

import { useEffect, useState } from 'react';
import styles from '@/presentation/modules/landing/components/bentogrid/IconsAnimation.module.css';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

const ICONS_LIST: {
  id: number;
  icon: IconName;
}[] = [
  {
    id: 1,
    icon: 'bell',
  },
  {
    id: 2,
    icon: 'dumbbell',
  },
  {
    id: 3,
    icon: 'waypoints',
  },
  {
    id: 4,
    icon: 'alarm-clock',
  },
  {
    id: 5,
    icon: 'square-pen',
  },
  {
    id: 6,
    icon: 'skip-forward',
  },
  {
    id: 7,
    icon: 'heart',
  },
  {
    id: 8,
    icon: 'scale',
  },
  {
    id: 9,
    icon: 'trending-up',
  },
  {
    id: 10,
    icon: 'trophy',
  },
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
  icon,
}: {
  className?: string;
  style?: React.CSSProperties;
  icon: IconName;
}) {
  return (
    <figure className={`absolute top-0 left-0 block ${className}`} style={style}>
      <Icon
        icon={icon}
        className="text-fg-strong animate-wiggle-more animate-infinite animate-duration-5000 size-8"
        variant={{ weight: 'thin' }}
      />
    </figure>
  );
}

export function IconsAnimation({ direction }: { direction: AnimationDirection }) {
  const [mounted, setMounted] = useState(false);

  const limitRange = ICONS_LIST.length;
  const displacedIndex = Math.floor(Math.random() * limitRange);

  const getIndex = (index: number) => {
    const currentIndex = index + displacedIndex;
    if (currentIndex >= limitRange) {
      return currentIndex - limitRange;
    }
    return currentIndex;
  };

  const getDelay = (index: number) => {
    const delay = getIndex(index) * (DURATION / ICONS_LIST.length);
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
          {ICONS_LIST.map(({ icon, id }, index) => {
            return (
              <IconContainer
                className={`${DIRECTION[direction]}`}
                style={{
                  animationDelay: `-${getDelay(index)}ms`,
                  animationDuration: `${DURATION}ms`,
                }}
                key={id}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    )
  );
}

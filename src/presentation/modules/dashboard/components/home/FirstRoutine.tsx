import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Card } from '@/presentation/modules/card/components/Card';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { IconMapRoute } from '@/presentation/globals/components/icons/outline/IconMapRoute';
import { ImageBackground } from '@/presentation/modules/dashboard/components/home/ImageBackground';

export function FirstRoutine({ className = '' }: { className?: string }) {
  return (
    <Card className={twMerge('relative', className)}>
      <CardTitle Icon={IconMapRoute} title="Create Your First Routine" />
      <ImageBackground>
        <Image
          src="/images/dashboard/routine-dark.png"
          alt="Description of image"
          width={762}
          height={828}
          className="aspect-762/828"
        />
      </ImageBackground>
    </Card>
  );
}

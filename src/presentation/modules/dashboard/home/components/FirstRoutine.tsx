import Image from 'next/image';
import { CardTitle } from '../../card/components/CardTitle';
import { ImageBackground } from './ImageBackground';
import { Card } from '../../card/components/Card';
import { twMerge } from 'tailwind-merge';
import { IconMapRoute } from '@/presentation/globals/components/icons/Icons';

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

import Image from 'next/image';
import { CardTitle } from '../../card/components/CardTitle';
import { ImageBackground } from './ImageBackground';
import { Card } from '../../card/components/Card';
import { twMerge } from 'tailwind-merge';
import { IconClipboardList } from '@/presentation/globals/components/icons/Icons';

export function FirstSession({ className = '' }: { className?: string }) {
  return (
    <Card className={twMerge('relative', className)}>
      <CardTitle Icon={IconClipboardList} title="Create Your Sessions" />
      <ImageBackground>
        <Image
          src="/images/dashboard/session-dark.png"
          alt="Description of image"
          width={773}
          height={876}
          className="aspect-773/876"
        />
      </ImageBackground>
    </Card>
  );
}

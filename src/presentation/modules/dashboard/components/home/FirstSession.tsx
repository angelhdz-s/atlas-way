import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { ImageBackground } from '@/presentation/modules/dashboard/components/home/ImageBackground';
import { Card } from '@/presentation/modules/card/components/Card';
import { IconClipboardList } from '@/presentation/globals/components/icons/outline/IconClipboardList';

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

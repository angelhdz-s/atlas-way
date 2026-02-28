import Image from 'next/image';
import { CardTitle } from '../../card/components/CardTitle';
import { ImageBackground } from './ImageBackground';
import { Card } from '../../card/components/Card';

export function FirstRoutine({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Card
      className={`relative overflow-hidden ${className}`}
    >
      <CardTitle title="Create Your First Routine" />
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

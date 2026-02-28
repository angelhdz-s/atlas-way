import Image from 'next/image';
import { CardTitle } from '../../card/components/CardTitle';
import { ImageBackground } from './ImageBackground';
import { Card } from '../../card/components/Card';

export function FirstSession({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Card
      className={`relative overflow-hidden ${className}`}
    >
      <CardTitle title="Create Your Sessions" />
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

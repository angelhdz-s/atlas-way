import { IconCog } from '@/presentation/globals/components/icons/outline/IconCog';
import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';

type Props = {
  className?: string;
};

export function DevCardSizes({ className }: Props) {
  return (
    <div className={className}>
      <Card className="h-50 space-y-4">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Default</span>
      </Card>

      <Card className="h-50 space-y-4" width="xs">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Width XS</span>
      </Card>

      <Card className="h-50 space-y-4" width="sm">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Width SM</span>
      </Card>

      <Card className="h-50 space-y-4" width="md">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Width MD</span>
      </Card>

      <Card className="h-50 space-y-4" width="lg">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Width LG</span>
      </Card>
    </div>
  );
}

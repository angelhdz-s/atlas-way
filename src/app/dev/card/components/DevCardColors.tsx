import { IconCog } from '@/presentation/globals/components/icons/outline/IconCog';
import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import type { CardVariantProps } from '@/presentation/modules/card/card.config';

type Props = {
  className?: string;
} & CardVariantProps;

export function DevCardColors(props: Props) {
  const { className, ...rest } = props;

  return (
    <div className={className}>
      <Card className="h-50 space-y-4" {...rest} color="default" width="md">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Default</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} color="disabled" width="md">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Disabled</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} color="main" width="md">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Main</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} color="special" width="md">
        <CardHeader>
          <CardTitle title="Card" Icon={IconCog} />
        </CardHeader>
        <span>Special</span>
      </Card>
    </div>
  );
}

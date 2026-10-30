import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import type { CardVariantProps } from '@/presentation/modules/card/card.config';

type Props = {
  className?: string;
} & CardVariantProps;

export function DevCardVariants(props: Props) {
  const { className = '', ...rest } = props;
  return (
    <div className={className}>
      <Card className="h-50 space-y-4" {...rest}>
        <CardHeader>
          <CardTitle title="Card" icon="cog" />
        </CardHeader>
        <span>Default</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} width="xs">
        <CardHeader>
          <CardTitle title="Card" icon="cog" />
        </CardHeader>
        <span>Width XS</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} width="sm">
        <CardHeader>
          <CardTitle title="Card" icon="cog" />
        </CardHeader>
        <span>Width SM</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} width="md">
        <CardHeader>
          <CardTitle title="Card" icon="cog" />
        </CardHeader>
        <span>Width MD</span>
      </Card>

      <Card className="h-50 space-y-4" {...rest} width="lg">
        <CardHeader>
          <CardTitle title="Card" icon="cog" />
        </CardHeader>
        <span>Width LG</span>
      </Card>
    </div>
  );
}

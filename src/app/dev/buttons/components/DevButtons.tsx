import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';
import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  colors: ButtonVariantProps['color'][];
  disabled?: boolean;
  className?: string;
};

export function DevButtons({ className = '', colors }: Props) {
  return (
    <div className={className}>
      {colors.map((color) => (
        <div key={color} className="border-fill-base w-fit space-y-4 border p-8">
          <header className="text-fg-strong font-funnel-display text-2xl font-medium">
            {color?.toUpperCase()}
          </header>
          <section className="flex items-start gap-2 *:space-y-4">
            <div>
              <p>Icon Text</p>
              <AllButtonSizes variant={{ color, type: 'default' }}>
                {' '}
                <Icon icon="plus" variant={{ weight: 'medium' }} /> Button
              </AllButtonSizes>
            </div>
            <div>
              <p>Text Icon</p>
              <AllButtonSizes variant={{ color, type: 'default' }}>
                {' '}
                Button <Icon icon="plus" variant={{ weight: 'medium' }} />
              </AllButtonSizes>
            </div>
            <div>
              <p>Text</p>
              <AllButtonSizes variant={{ color, type: 'default' }}>Button</AllButtonSizes>
            </div>
            <div>
              <p>Icon</p>
              <AllButtonSizes variant={{ color, type: 'icon' }} aria-label="Launch">
                <Icon icon="plus" variant={{ weight: 'medium' }} />
              </AllButtonSizes>
            </div>
          </section>
          <section className="flex items-start gap-2 *:space-y-4">
            <div>
              <p>Text</p>
              <AllButtonSizes disabled variant={{ color, type: 'default' }}>
                Button
              </AllButtonSizes>
            </div>
            <div>
              <p>Icon</p>
              <AllButtonSizes disabled variant={{ color, type: 'icon' }} aria-label="Launch">
                <Icon icon="plus" variant={{ weight: 'moderate' }} />
              </AllButtonSizes>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

function AllButtonSizes({ variant, ...props }: React.ComponentProps<typeof Button>) {
  if (!variant) return;
  if (!variant.type) return;

  const variantSize = (size: ButtonVariantProps['size']): ButtonVariantProps => {
    return {
      ...variant,
      size,
    };
  };

  return (
    <div className="space-y-2">
      <Button {...props} variant={variantSize('lg') as any} />
      <Button {...props} variant={variantSize('md') as any} />
      <Button {...props} variant={variantSize('sm') as any} />
    </div>
  );
}

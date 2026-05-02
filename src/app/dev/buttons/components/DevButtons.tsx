import { IconRocket } from '@/presentation/globals/components/icons/outline/IconRocket';
import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';
import { Button } from '@/presentation/modules/button/components/Button';

type Props = {
  colors: ButtonVariantProps['color'][];
  disabled?: boolean;
  className?: string;
};

export function DevButtons({ className = '', colors }: Props) {
  return (
    <div className={className}>
      {colors.map((color) => (
        <div key={color} className="bg-fill-base w-fit space-y-4 p-8">
          <header className="text-fg-strong font-funnel-display text-2xl font-medium">
            {color?.toUpperCase()}
          </header>
          <main className="flex items-start gap-2 *:space-y-4">
            <div>
              <p>Icon Text</p>
              <AllButtonSizes variant={{ color, type: 'iconText' }} Icon={IconRocket}>
                Button
              </AllButtonSizes>
            </div>
            <div>
              <p>Text</p>
              <AllButtonSizes variant={{ color, type: 'text' }}>Button</AllButtonSizes>
            </div>
            <div>
              <p>Icon</p>
              <AllButtonSizes
                variant={{ color, type: 'icon' }}
                Icon={IconRocket}
                aria-label="Launch"
              />
            </div>
          </main>
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
      <Button {...props} variant={variantSize('xs') as any} />
    </div>
  );
}

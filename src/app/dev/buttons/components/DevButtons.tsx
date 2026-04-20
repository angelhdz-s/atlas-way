import { IconRocket } from '@/presentation/globals/components/icons/outline/IconRocket';
import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';
import { Link } from '@/presentation/modules/button/components/Link';

type Props = {
  colors: ButtonVariantProps['color'][];
  disabled?: boolean;
  className?: string;
};

export function DevButtons({ className, colors }: Props) {
  return (
    <div className={className}>
      {colors.map((color) => (
        <div key={color} className="bg-middle w-fit space-y-4 p-8">
          <header className="fg-strong font-funnel-display text-2xl font-medium">
            {color?.toUpperCase()}
          </header>
          <main className="flex items-start gap-2 *:space-y-4">
            <div>
              <p>Normal</p>
              <AllButtonSizes type="normal" color={color} />
            </div>
            <div>
              <p>Thin</p>
              <AllButtonSizes type="square" color={color} />
            </div>
          </main>
        </div>
      ))}
    </div>
  );
}

function AllButtonSizes({
  color,
  type,
}: {
  color: ButtonVariantProps['color'];
  type?: ButtonVariantProps['type'];
}) {
  return (
    <div className="space-y-2">
      <Link href="#" variantConfig={{ size: 'xs', color, type }}>
        {type === 'normal' ? 'Button XS' : <IconRocket />}
      </Link>
      <Link href="#" variantConfig={{ size: 'sm', color, type }}>
        {type === 'normal' ? 'Button SM' : <IconRocket />}
      </Link>
      <Link href="#" variantConfig={{ size: 'md', color, type }}>
        {type === 'normal' ? 'Button MD' : <IconRocket />}
      </Link>
      <Link href="#" variantConfig={{ size: 'lg', color, type }}>
        {type === 'normal' ? 'Button LG' : <IconRocket className="size-6" />}
      </Link>
    </div>
  );
}

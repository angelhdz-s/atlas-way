import { IconRocket } from '@/presentation/globals/components/Icons';
import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

type Props = {
  colors: ButtonVariantProps['color'][];
  disabled?: boolean;
  className?: string;
};

export function AllVariantButtons({ className, colors }: Props) {
  return (
    <div className={className}>
      {colors.map((color) => (
        <div key={color} className="w-fit">
          <header className="fg-strong font-funnel-display text-2xl font-medium">
            {color?.toUpperCase()}
          </header>
          <main className="flex gap-2 *:flex *:flex-col-reverse *:items-center *:justify-end *:gap-1">
            <div className="p-4">
              <AllButtonSizes type="normal" color={color} />
              <p>Normal</p>
            </div>
            <div>
              <AllButtonSizes type="square" color={color} />
              <p>Thin</p>
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
    <>
      <VariantLink href="#" variantConfig={{ size: 'xs', color, type }}>
        {type === 'normal' ? 'Button XS' : <IconRocket />}
      </VariantLink>
      <VariantLink href="#" variantConfig={{ size: 'sm', color, type }}>
        {type === 'normal' ? 'Button SM' : <IconRocket />}
      </VariantLink>
      <VariantLink href="#" variantConfig={{ size: 'md', color, type }}>
        {type === 'normal' ? 'Button MD' : <IconRocket />}
      </VariantLink>
      <VariantLink href="#" variantConfig={{ size: 'lg', color, type }}>
        {type === 'normal' ? 'Button LG' : <IconRocket className="size-6" />}
      </VariantLink>
    </>
  );
}

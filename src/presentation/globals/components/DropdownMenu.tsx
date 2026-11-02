import { Icon, type IconName } from '@/presentation/modules/icon/components/Icon';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type DropdownMenuButtonProps = {
  onClick?: () => void;
  href?: never;
};

type DropdownMenuLinkProps = {
  href: string;
  onClick?: never;
};

export type DropdownMenuItem = {
  label: string;
  icon: IconName;
  disabled?: boolean;
} & (DropdownMenuButtonProps | DropdownMenuLinkProps);

type Props = {
  className?: string;
  items: DropdownMenuItem[];
};

function DropdownMenuButtonLink({
  children,
  href,
  onClick,
  className,
  disabled,
}: {
  children: React.ReactNode;
  href?: string | undefined;
  onClick?: (() => void) | undefined;
  className?: string;
  disabled: boolean | undefined;
}) {
  if (href !== undefined)
    return (
      <Link
        href={href}
        className={className}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        data-disabled={disabled}
      >
        {children}
      </Link>
    );
  if (onClick !== undefined) return;
  <button type="button" onClick={onClick} className={className} disabled={disabled}>
    {children}
  </button>;

  return (
    <div className={className} data-disabled={disabled}>
      {children}
    </div>
  );
}

export function DropdownMenu({ className, items }: Props) {
  return (
    <div
      className={twMerge(
        'border-bd-base-subtle bg-sf-base-default min-w-48 rounded-2xl border p-1 shadow',
        className
      )}
      role="menu"
    >
      <ul className="w-full space-y-0.5">
        {items.map(({ icon, label, disabled, href, onClick }) => (
          <li key={`${icon}-${label}`} className="w-full">
            <DropdownMenuButtonLink
              href={href}
              onClick={onClick}
              className={twMerge(
                'text flex h-10 w-full items-center gap-2 rounded-lg px-4',
                'not-data-[disabled=true]:hover:bg-sf-base-subtle not-disabled:hover:bg-sf-base-subtle',
                'not-data-[disabled=true]:hover:text-txt-base-heading not-disabled:hover:text-txt-base-heading',
                '[&>svg]:text-txt-base-caption',
                'disabled:[&>span]:text-txt-base-disabled data-[disabled=true]:[&>span]:text-txt-base-disabled',
                'disabled:[&>svg]:text-txt-base-disabled data-[disabled=true]:[&>svg]:text-txt-base-disabled'
              )}
              disabled={disabled}
            >
              <Icon
                icon={icon}
                variant={{ size: 'sm', weight: 'thin' }}
                className="transition-colors"
              />
              <span className="body-medium flex-1 whitespace-nowrap transition-colors">
                {label}
              </span>
            </DropdownMenuButtonLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

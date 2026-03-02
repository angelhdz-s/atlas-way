import { IconCog, DefaultIcon } from './Icons';

export function SettingsButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`animate-fade cursor-pointer ${className}`}
    >
      <DefaultIcon Icon={IconCog} />
    </button>
  );
}

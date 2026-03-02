import { IconLanguage } from './Icons';

export function LangButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`animate-fade cursor-pointer ${className}`}
    >
      <IconLanguage className="size-6" strokeWidth="1.5" />
    </button>
  );
}

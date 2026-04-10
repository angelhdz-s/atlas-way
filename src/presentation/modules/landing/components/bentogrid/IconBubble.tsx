import type { IconTypes } from '@/presentation/globals/presentation.types';

export function IconBubble({ className = '', Icon }: { className?: string; Icon: IconTypes }) {
  return (
    <figure className={`w-fit rounded-full border p-1 ${className}`}>
      <Icon className="size-8" strokeWidth="1" />
    </figure>
  );
}

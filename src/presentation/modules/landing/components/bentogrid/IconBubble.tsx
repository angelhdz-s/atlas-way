import { IconTypes } from '@/presentation/globals/types';

export function IconBubble({ className = '', Icon }: { className?: string; Icon: IconTypes }) {
	return (
		<figure className={`border p-1 w-fit rounded-full ${className}`}>
			<Icon className="size-8" strokeWidth="1" />
		</figure>
	);
}

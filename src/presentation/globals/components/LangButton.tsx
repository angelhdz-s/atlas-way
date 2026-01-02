import { Language } from './Icons';

export function LangButton({ className = '' }: { className?: string }) {
	return (
		<button type="button" className={`cursor-pointer animate-fade ${className}`}>
			<Language className="size-6" strokeWidth="1.5" />
		</button>
	);
}

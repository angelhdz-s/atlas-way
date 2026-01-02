import { InputClasses } from '@/presentation/modules/form/constants/classes';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';

type InputDateProps = {
	className?: string;
	error?: string;
};

export function InputDate({ className = '', error, ...props }: InputDateProps) {
	return (
		<>
			<input type="date" className={`${InputClasses} ${className}`} {...props} />
			{<ErrorMessage message={error} />}
		</>
	);
}

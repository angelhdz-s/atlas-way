'use client';

import CloseButton from '@/presentation/globals/components/modal/CloseButton';

export function ModalFormButtons({ isPending = false }: { isPending?: boolean }) {
	// const router = useRouter();

	const handleSubmit = () => {
		// router.back();
	};
	return (
		<>
			<button
				type="submit"
				className={`bg-blue-600 border-blue-600 fg-strong-dark ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
				onClick={handleSubmit}
			>
				Create
			</button>
			<CloseButton className="fg-strong border-bd-strong">Cancel</CloseButton>
		</>
	);
}

'use client';

import CloseButton from '@/modules/globals/components/modal/CloseButton';

export function ModalFormButtons({ isPending = false }: { isPending?: boolean }) {
	// const router = useRouter();

	const handleSubmit = () => {
		// router.back();
	};
	return (
		<>
			<button
				type="submit"
				className={`bg-blue-600 border-blue-600 text-main-foreground ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
				onClick={handleSubmit}
			>
				Create
			</button>
			<CloseButton className="text-white border-zinc-800">Cancel</CloseButton>
		</>
	);
}

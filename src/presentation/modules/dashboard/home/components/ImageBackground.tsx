export function ImageBackground({ children }: { children: React.ReactNode }) {
	return (
		<div className="select-none absolute p-8 top-32 left-0 right-0 mx-auto w-[calc(100%-calc(var(--spacing)*16))] bg-full-black border rounded-lg border-bd-default mask-b-from-20%">
			<main className="mask-b-from-0% mask-b-to-40%">{children}</main>
		</div>
	);
}

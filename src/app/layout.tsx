import type { Metadata } from 'next';
import { Funnel_Display, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/presentation/globals/components/ThemeProvider';
import { ToastProvider } from '@/presentation/modules/toast/components/ToastProvider';
import '@/app/globals.css';

const funnelDisplayFont = Funnel_Display({
	variable: '--font-funnel-display',
	subsets: ['latin'],
});

const outfitFont = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'AtlasWay | Manage your Work Out Routine',
	description: 'A comprehensive platform to manage and optimize your workout routines.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="dark" suppressHydrationWarning>
			<body
				className={`scrollbar-y transition-colors antialiased flex flex-col min-h-dvh h-full overflow-x-hidden
					${funnelDisplayFont.variable} ${outfitFont.variable}`}
			>
				<ToastProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</ToastProvider>
			</body>
		</html>
	);
}

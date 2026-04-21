import { ToggleTheme } from '@/presentation/modules/theme/components/ToggleTheme';
import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function DevLayout({ children }: Props) {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return (
    <main className="min-h-dvh space-y-4 p-16">
      <header className="flex justify-end">
        <ToggleTheme />
      </header>
      <div>{children}</div>
    </main>
  );
}

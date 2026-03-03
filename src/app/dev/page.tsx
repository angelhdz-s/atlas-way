import { AllVariantButtons } from './components/AllVariantButtons';

export default function DevPage() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <main className="flex min-h-dvh gap-16 p-8">
      <AllVariantButtons
        colors={[
          'primary',
          'primaryDeluxe',
          'subtle',
          'simple',
        ]}
        className="grid h-fit w-fit grid-cols-2 gap-8"
      />
    </main>
  );
}

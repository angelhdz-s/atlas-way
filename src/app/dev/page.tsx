import { AllVariantButtons } from './components/AllVariantButtons';
import { DevToasts } from './components/DevToasts';

export default function DevPage() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <main className="flex min-h-dvh items-start gap-16 p-16">
      <div className="flex gap-16">
        <AllVariantButtons
          colors={[
            'primary',
            'primaryDeluxe',
            'subtle',
            'simple',
          ]}
          className="grid h-fit w-fit grid-cols-2 gap-8"
        />
      </div>
      <div>
        <DevToasts />
      </div>
    </main>
  );
}

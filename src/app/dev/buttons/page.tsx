import { Link } from '@/presentation/modules/button/components/Link';
import { AllVariantButtons } from './components/AllVariantButtons';

export default function ButtonsPage() {
  return (
    <div>
      <Link href="/dev">Back</Link>
      <AllVariantButtons
        colors={['primary', 'primaryDeluxe', 'simple', 'subtle']}
        className="flex flex-wrap items-start gap-4"
      />
    </div>
  );
}

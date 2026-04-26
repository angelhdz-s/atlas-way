import { Link } from '@/presentation/modules/button/components/Link';
import { DevButtons } from './components/DevButtons';

export default function ButtonsPage() {
  return (
    <div>
      <Link href="/dev">Back</Link>
      <DevButtons
        colors={['primary', 'subtle', 'simple']}
        className="flex flex-wrap items-start gap-4"
      />
    </div>
  );
}

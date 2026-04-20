import { Link } from '@/presentation/modules/button/components/Link';
import { DevToasts } from './components/DevToasts';

export default function ToastsPage() {
  return (
    <div>
      <Link href="/dev">Back</Link>
      <DevToasts />
    </div>
  );
}

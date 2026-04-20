import Link from 'next/link';

export default function DevPage() {
  return (
    <ul className="space-y-4">
      <li>
        <Link href="/dev/buttons">Buttons</Link>
      </li>
      <li>
        <Link href="/dev/toasts">Toasts</Link>
      </li>
      <li>
        <Link href="/dev/form">Form</Link>
      </li>
    </ul>
  );
}

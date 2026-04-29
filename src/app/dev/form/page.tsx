import { Link } from '@/presentation/modules/button/components/Link';
import { DevFormComponents } from './components/DevFormComponents';

const Group = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="w-100 space-y-4">
    <h5 className="font-funnel-display text-fg-strong text-center text-4xl font-bold">{title}</h5>
    <div>{children}</div>
  </div>
);

export default function FormPage() {
  return (
    <div className="w-full space-y-8 overflow-x-auto">
      <Link href="/dev">Back</Link>
      <section className="flex items-center justify-center gap-4">
        <Group title="Back">
          <DevFormComponents className="outline-bd-default" />
        </Group>
        <Group title="Middle">
          <DevFormComponents className="bg-fill-base outline-bd-default" />
        </Group>
        <Group title="Front">
          <DevFormComponents className="bg-fill-middle outline-bd-default" />
        </Group>
      </section>
    </div>
  );
}

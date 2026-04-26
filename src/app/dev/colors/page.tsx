import { Link } from '@/presentation/modules/button/components/Link';

function SectionHeading({ text }: { text: string }) {
  return <h3 className="text-fg-strong font-funnel-display text-2xl">{text}</h3>;
}

export default function ColorsPage() {
  return (
    <div>
      <Link href="/dev">Back</Link>
      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-[156px_1fr] items-center">
          <SectionHeading text="Brand" />
          <ul className="flex items-center gap-4">
            <li className="text-primary flex items-center gap-2 rounded p-2">
              <div className="bg-primary size-8 rounded-full"></div>
              Primary
            </li>
            <li className="text-secondary flex items-center gap-2 rounded p-2">
              <div className="bg-secondary size-8 rounded-full"></div>
              Secondary
            </li>
            <li className="text-tertiary flex items-center gap-2 rounded p-2">
              <div className="bg-tertiary size-8 rounded-full"></div>
              Tertiary
            </li>
            <li className="text-accent flex items-center gap-2 rounded p-2">
              <div className="bg-accent size-8 rounded-full"></div>
              Accent
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-[156px_1fr] items-center">
          <SectionHeading text="Text" />
          <ul className="flex items-center justify-start gap-8">
            <li className="text-fg-strong">Strong</li>
            <li className="text-fg-default">Default</li>
            <li className="text-fg-subtle">Muted</li>
          </ul>
        </div>

        <div className="grid grid-cols-[156px_1fr] items-center">
          <SectionHeading text="Fill" />
          <ul className="flex items-center justify-start gap-8">
            <li className="bg-fill-middle rounded p-2">Front</li>
            <li className="bg-fill-base rounded p-2">Middle</li>
            <li className="bg-fill-back rounded p-2">Back</li>
          </ul>
        </div>

        <div className="grid grid-cols-[156px_1fr] items-center">
          <SectionHeading text="Border" />
          <ul className="flex items-center justify-start gap-8 *:border">
            <li className="border-bd-strong rounded p-2">Strong</li>
            <li className="border-bd-default rounded p-2">Default</li>
            <li className="border-bd-muted rounded p-2">Muted</li>
          </ul>
        </div>

        <div className="grid grid-cols-[156px_1fr] items-center">
          <SectionHeading text="Status" />
          <ul className="flex items-center justify-start gap-8">
            <li className="text-complete flex items-center gap-2 rounded p-2">
              <div className="bg-complete size-8 rounded-full"></div>
              Complete
            </li>
            <li className="text-cancel flex items-center gap-2 rounded p-2">
              <div className="bg-cancel size-8 rounded-full"></div>
              Cancel
            </li>
            <li className="text-unread flex items-center gap-2 rounded p-2">
              <div className="bg-unread size-8 rounded-full"></div>
              Unread
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-[156px_1fr] items-center">
          <SectionHeading text="Accessibility" />
          <ul className="flex items-center justify-start gap-8">
            <li className="outline-focus rounded-full px-4 py-2 outline-2">Focus</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

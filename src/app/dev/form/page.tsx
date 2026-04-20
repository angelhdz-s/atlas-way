import { FormComponents } from './components/FormComponents';

const Separator = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-front space-y-4">
    <h5 className="font-funnel-display fg-strong border-bd-muted rounded-xl border-b p-4 text-center text-4xl font-bold">
      {title}
    </h5>
    <div className="p-8 pt-0">{children}</div>
  </div>
);

export default function FormPage() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="flex flex-wrap items-start justify-center gap-8">
      <Separator title="Basic fields">
        <FormComponents />
      </Separator>
    </div>
  );
}

import { VariantButton } from '../../button/components/VariantButton';

const CARD_TYPE_CLASSES = {
  default: 'bg-back border border-bd-default',
  disabled: 'bg-back border border-bd-default opacity-50',
  main: 'bg-primary fg-strong-light light:fg-strong-dark border border-primary',
  special:
    'bg-accent fg-strong-light light:fg-strong-dark border border-accent',
};

export type CardHighlightType =
  keyof typeof CARD_TYPE_CLASSES;

export function DashboardCardHeader({
  title,
  children,
  decoration,
}: {
  title: string;
  children?: React.ReactNode;
  decoration?: React.ReactNode;
}) {
  return (
    <header>
      <main className="flex items-center justify-between gap-2">
        <h2 className="font-funnel-display fg-strong overflow-hidden pr-1 pb-1 text-3xl font-medium tracking-tight text-ellipsis whitespace-nowrap">
          {title}
        </h2>
        {decoration}
      </main>
      {children}
    </header>
  );
}

function StatisticsSeparator({
  value,
}: {
  value?: string;
}) {
  return (
    <>
      <li className="flex items-center">
        <span className="bg-subtle/50 block h-4 w-px"></span>
      </li>
      <li>{value}</li>
    </>
  );
}

type CountersType = [string?, string?, string?];

function StatisticsTags({
  counters,
}: {
  counters?: CountersType;
}) {
  return counters?.map((counter, index) =>
    index === 0 ? (
      <li key={index}>{counter}</li>
    ) : (
      <StatisticsSeparator key={index} value={counter} />
    )
  );
}

export function DashboardCardSubHeader({
  description,
  counters,
}: {
  description: string;
  counters?: CountersType;
}) {
  return (
    <footer className="flex flex-col gap-1 text-lg font-light">
      {counters && counters.length > 0 && (
        <main className="fg-muted">
          <ul className="flex justify-between gap-2 text-base">
            <StatisticsTags counters={counters} />
          </ul>
        </main>
      )}
      <p>{description}</p>
    </footer>
  );
}

export function DashboardCardMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col gap-6">
      {children}
    </main>
  );
}

export function DashboardCardFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <footer className="flex items-center gap-2 text-sm">
      {children}
    </footer>
  );
}

export function DashboardCardButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VariantButton
      type="button"
      color="subtle"
      size="md"
      className="ml-auto flex items-center gap-1"
    >
      {children}
    </VariantButton>
  );
}

type DashboardCardTagValueType = string | React.ReactNode;

type DashboardCardTagType = {
  selected: boolean;
  value: DashboardCardTagValueType;
};

export function DashboardCardTags({
  values,
}: {
  values: DashboardCardTagType[];
}) {
  return (
    <ul className="flex flex-wrap gap-1">
      {values.map((tag, index) => (
        <DashboardCardTag key={index} tag={tag} />
      ))}
    </ul>
  );
}

export function DashboardCardTag({
  tag,
}: {
  tag: DashboardCardTagType;
}) {
  const { value, selected } = tag;
  const className = selected
    ? 'bg-accent fg-strong-light light:fg-strong-dark'
    : 'bg-front fg-strong';
  return (
    <li
      className={`rounded-full px-3 py-1 text-sm font-light ${className}`}
    >
      {value}
    </li>
  );
}

import { VariantLink } from '../../button/components/VariantLink';

export function Try({
  className = '',
}: {
  className?: string;
}) {
  return (
    <section
      className={`fg-strong mx-auto grid w-full max-w-5xl place-items-center gap-4 md:my-16 ${className}`}
    >
      <h2 className="font-funnel-display text-2xl font-bold">
        Try for free
      </h2>
      <main className="flex w-fit items-center justify-center gap-4">
        <VariantLink
          href="/dashboard"
          variantConfig={{
            color: 'primary',
            size: 'lg',
          }}
        >
          <span className="text-lg">Get Started</span>
        </VariantLink>
      </main>
    </section>
  );
}

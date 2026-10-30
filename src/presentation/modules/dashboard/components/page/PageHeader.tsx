export function PageHeader({
  className = '',
  description,
  title,
}: {
  className?: string;
  description?: string;
  title: string;
}) {
  return (
    <div className={`text-fg-strong flex w-full items-center ${className}`}>
      <div className="flex-1 space-y-1">
        <h1 className="heading-5">{title}</h1>
        {description && <p className="body-medium text-txt-base-body">{description}</p>}
      </div>
    </div>
  );
}

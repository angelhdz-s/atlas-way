type CardTagValueType = string | React.ReactNode;

type CardTagType = {
  selected: boolean;
  value: CardTagValueType;
};

export function CardTags({
  values,
}: {
  values: CardTagType[];
}) {
  return (
    <ul className="flex flex-wrap gap-1">
      {values.map((tag, index) => (
        <CardTag key={index} tag={tag} />
      ))}
    </ul>
  );
}

export function CardTag({ tag }: { tag: CardTagType }) {
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

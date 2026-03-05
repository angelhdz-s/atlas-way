type ModalFormProps = {
  title: string;
  className?: string;
};
export function ModalFormHeader({
  title,
  className = '',
}: ModalFormProps) {
  return (
    <header
      className={`font-funnel-display fg-strong text-2xl font-medium ${className}`}
    >
      {title}
    </header>
  );
}

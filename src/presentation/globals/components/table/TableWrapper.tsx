type Props = {
  children: React.ReactNode;
};

export function TableWrapper({ children }: Props) {
  return (
    <div className="bg-middle border-bd-default rounded-xl border">
      <table className="w-full table-fixed">{children}</table>
    </div>
  );
}

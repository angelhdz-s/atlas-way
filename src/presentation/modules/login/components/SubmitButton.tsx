'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({
  children,
}: {
  children: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="h-12 cursor-pointer rounded-4xl bg-red-600 transition-colors hover:bg-red-700 disabled:opacity-50"
      disabled={pending}
    >
      <span className="text-lg font-semibold">
        {children}
      </span>
    </button>
  );
}

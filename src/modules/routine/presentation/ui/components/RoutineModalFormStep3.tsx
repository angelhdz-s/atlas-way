'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { Label } from '@/presentation/modules/form/components/LabelInput';
import { IconCirclePlus } from '@/presentation/globals/components/Icons';
import Link from 'next/link';

export function RoutineModalFormStep3({
  title,
  sessions,
}: {
  title: string;
  sessions: string[];
}) {
  return (
    <section>
      <header className="fg-strong">{title}</header>
      <main>
        <Label htmlFor="days" title="Sessions">
          <Box className="bg-back/50 border-subtle/20 grid min-h-24 w-full grid-cols-[1fr_auto] rounded-lg border p-2">
            <main>
              {sessions.length > 0 ? (
                sessions.map((session, index) => (
                  <p key={index}>{session}</p>
                ))
              ) : (
                <p className="fg-default/50 text-base font-light">
                  No sessions added
                </p>
              )}
            </main>
            <aside>
              <Link
                href="/dashboard/routines/create/sessions"
                className="border-subtle/20 fg-strong block aspect-square cursor-pointer rounded border bg-zinc-900 p-1 transition-colors hover:bg-zinc-800/80"
              >
                <IconCirclePlus strokeWidth="1" />
              </Link>
            </aside>
          </Box>
        </Label>
      </main>
    </section>
  );
}

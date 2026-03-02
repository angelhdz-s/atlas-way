import { Box } from '@/presentation/modules/form/components/Box';
import { useState } from 'react';
import type { SessionsFormDataWithExercises } from '@/modules/session/presentation/types';
import Link from 'next/link';
import { CirclePlus } from '@/presentation/globals/components/Icons';

export function FormSessionsBox() {
  const [sessions, _setSessions] = useState<
    SessionsFormDataWithExercises[]
  >([]);
  return (
    <Box className="grid min-h-24 grid-cols-[1fr_auto]">
      <main>
        {sessions.length > 0 ? (
          sessions.map((session, index) => (
            <p key={index}>{session.name}</p>
          ))
        ) : (
          <p className="text-default/50 text-base font-light">
            No sessions added
          </p>
        )}
      </main>
      <aside>
        <Link
          href="/dashboard/routines/create/sessions"
          className="border-subtle/20 fg-strong block aspect-square cursor-pointer rounded border bg-zinc-900 p-1 transition-colors hover:bg-zinc-800/80"
        >
          <CirclePlus strokeWidth="1" />
        </Link>
      </aside>
    </Box>
  );
}

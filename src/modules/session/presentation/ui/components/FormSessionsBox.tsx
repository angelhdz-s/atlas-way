import { useState } from 'react';
import Link from 'next/link';
import { Box } from '@/presentation/modules/form/components/Box';
import { IconCirclePlus } from '@/presentation/globals/components/icons/outline/IconCirclePlus';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';

export function FormSessionsBox() {
  const [sessions, _setSessions] = useState<SessionDTO[]>([]);
  return (
    <Box className="grid min-h-24 grid-cols-[1fr_auto]">
      <main>
        {sessions.length > 0 ? (
          sessions.map((session, index) => <p key={index}>{session.name}</p>)
        ) : (
          <p className="text-default/50 text-base font-light">No sessions added</p>
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
  );
}

'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { Label } from '@/presentation/modules/form/components/LabelInput';
import {
  IconEdit,
  IconTrash,
} from '@/presentation/globals/components/Icons';

export function RoutineModalFormStep1({
  title,
}: {
  title: string;
}) {
  return (
    <form>
      <header className="fg-strong">{title}</header>
      <section className="flex flex-col gap-2">
        <Label htmlFor="session.0" title="Sessiones">
          <Box>
            <div>
              <div className="bg-subtle flex items-center justify-between gap-2 rounded p-2">
                <main>
                  <span>Push, Pull, Legs</span>
                </main>
                <aside className="flex items-center gap-2">
                  <button type="button">
                    <IconEdit
                      className="size-5"
                      strokeWidth="1"
                    />
                  </button>
                  <button type="button">
                    <IconTrash
                      className="size-5"
                      strokeWidth="1"
                    />
                  </button>
                </aside>
              </div>
              <input type="hidden" name="session.0" />
            </div>
          </Box>
        </Label>
      </section>
    </form>
  );
}

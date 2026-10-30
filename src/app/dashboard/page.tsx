import { Button } from '@/presentation/modules/button/components/Button';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { PageLateralPanel } from '@/presentation/modules/dashboard/components/page/PageLateralPanel';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { Tag } from '@/presentation/modules/tag/components/Tag';

export default function Dashboard() {
  return (
    <PageContainer className="flex flex-1 flex-row gap-8 overflow-x-clip">
      <main className="flex-1 space-y-8">
        <PageHeader title="Dashboard" description="Your personal fitness dashboard" />
        <PageContent className="space-y-6">
          {/* First Row */}
          <div className="flex gap-8">
            {/* Card */}
            <div className="bg-sf-base-default border-bd-base-default hover:border-bd-base-subtle w-96 cursor-pointer rounded-[20px] border transition-colors">
              <header className="flex h-12 items-center gap-2 px-2">
                <div className="text-txt-base-body bg-sf-base-subtle grid aspect-square size-8 place-content-center rounded-lg">
                  <Icon icon="clipboard-list" variant={{ size: 'lg' }} />
                </div>
                <h3 className="heading-6 text-txt-base-heading w-full">Push day</h3>
                <Tag variant={{ color: 'success' }} className="flex items-center">
                  Completed <Icon icon="check" variant={{ size: 'sm' }} />
                </Tag>
                <div className="text-txt-base-default grid size-5 place-content-center">
                  <Icon icon="arrow-up-right" variant={{ size: 'md' }} />
                </div>
              </header>
              <footer className="space-y-2 p-4">
                <p className="body-small text-txt-base-caption">0 de 6 ejercicios</p>
                <div className="flex w-full items-center gap-4">
                  <ul className="flex w-full items-center gap-2">
                    <li className="bg-sf-success-static h-2 w-full rounded-full" />
                    <li className="bg-sf-success-static h-2 w-full rounded-full" />
                    <li className="bg-sf-success-static h-2 w-full rounded-full" />
                    <li className="bg-sf-success-static h-2 w-full rounded-full" />
                    <li className="bg-sf-success-static h-2 w-full rounded-full" />
                    <li className="bg-sf-success-static h-2 w-full rounded-full" />
                  </ul>
                  <p className="caption text-txt-base-caption">100%</p>
                </div>
              </footer>
            </div>

            {/* Current Week */}

            <div className="flex-1 space-y-4">
              <header className="flex items-center">
                <h3 className="heading-6 text-txt-base-heading w-full">Current week</h3>
              </header>
              <main className="space-y-2">
                <ul className="flex items-center gap-2">
                  <li className="w-full space-y-2">
                    <main className="text-txt-success-default flex w-full items-center gap-2">
                      <p className="body-medium flex-1">Monday</p>
                      <Icon icon="check" variant={{ size: 'sm', weight: 'thin' }} />
                    </main>
                    <div className="bg-sf-base-default border-bd-success-default grid h-12 w-full place-content-center rounded-lg border">
                      <Icon
                        variant={{ size: 'sm', weight: 'thin' }}
                        icon="dumbbell"
                        className="text-txt-success-default"
                      />
                    </div>
                  </li>
                  <li className="w-full space-y-2">
                    <main className="text-txt-success-default flex w-full items-center gap-2">
                      <p className="body-medium flex-1">Tuesday</p>
                      <Icon icon="check" variant={{ size: 'sm', weight: 'thin' }} />
                    </main>
                    <div className="bg-sf-base-default border-bd-success-default grid h-12 w-full place-content-center rounded-lg border"></div>
                  </li>
                  <li className="w-full space-y-2">
                    <main className="text-txt-base-body w-full">
                      <p className="body-small w-full">Wednesday</p>
                    </main>
                    <div className="bg-sf-base-default grid h-12 w-full place-content-center rounded-lg">
                      <Icon
                        variant={{ size: 'sm', weight: 'thin' }}
                        icon="dumbbell"
                        className="text-txt-base-caption"
                      />
                    </div>
                  </li>
                  <li className="w-full space-y-2">
                    <main className="text-txt-base-body w-full">
                      <p className="body-small w-full">Thursday</p>
                    </main>
                    <div className="bg-sf-base-default grid h-12 w-full place-content-center rounded-lg"></div>
                  </li>
                  <li className="w-full space-y-2">
                    <main className="text-txt-base-body w-full">
                      <p className="body-small w-full">Friday</p>
                    </main>
                    <div className="bg-sf-base-default grid h-12 w-full place-content-center rounded-lg">
                      <Icon
                        variant={{ size: 'sm', weight: 'thin' }}
                        icon="dumbbell"
                        className="text-txt-base-caption"
                      />
                    </div>
                  </li>
                  <li className="w-full space-y-2">
                    <main className="text-txt-base-body w-full">
                      <p className="body-small w-full">Saturday</p>
                    </main>
                    <div className="bg-sf-base-default grid h-12 w-full place-content-center rounded-lg"></div>
                  </li>
                  <li className="w-full space-y-2">
                    <main className="text-txt-base-body w-full">
                      <p className="body-small w-full">Saturday</p>
                    </main>
                    <div className="bg-sf-base-default grid h-12 w-full place-content-center rounded-lg"></div>
                  </li>
                </ul>
              </main>
            </div>
          </div>

          {/* Second Row */}
          <div className="space-y-4">
            <header className="flex items-center">
              <h3 className="heading-6 text-txt-base-heading w-full">Active routines</h3>
            </header>
            <main>
              <ul className="space-y-2">
                <li className="bg-sf-base-default flex gap-2 rounded-xl p-4">
                  <main className="flex-1 space-y-1">
                    <header className="body-medium text-txt-base-heading">Push, pull, legs</header>
                    <p className="body-small text-txt-base-body">
                      Workout schedule focused on three days routine
                    </p>
                    <footer>
                      <ul className="caption flex items-center gap-4">
                        <li className="text-txt-base-caption flex items-center gap-1">
                          <Icon icon="clipboard-list" variant={{ size: 'sm', weight: 'thin' }} />3
                          sessions
                        </li>
                        <li className="text-txt-base-caption flex items-center gap-1">
                          <Icon icon="bed" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside className="flex gap-2">
                    <div>
                      <ol className="caption flex items-center gap-1">
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Monday
                        </li>
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Wednesday
                        </li>
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Friday
                        </li>
                      </ol>
                    </div>
                    <Button
                      variant={{
                        type: 'icon',
                        size: 'sm',
                        color: 'simple',
                      }}
                    >
                      <Icon icon="ellipsis-vertical" variant={{ size: 'sm', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </li>
                <li className="bg-sf-base-default flex gap-2 rounded-xl p-4">
                  <main className="flex-1 space-y-1">
                    <header className="body-medium text-txt-base-heading">Push, pull, legs</header>
                    <p className="body-small text-txt-base-body">
                      Workout schedule focused on three days routine
                    </p>
                    <footer>
                      <ul className="caption flex items-center gap-4">
                        <li className="text-txt-base-caption flex items-center gap-1">
                          <Icon icon="clipboard-list" variant={{ size: 'sm', weight: 'thin' }} />3
                          sessions
                        </li>
                        <li className="text-txt-base-caption flex items-center gap-1">
                          <Icon icon="bed" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside className="flex gap-2">
                    <div>
                      <ol className="caption flex items-center gap-1">
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Monday
                        </li>
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Wednesday
                        </li>
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Friday
                        </li>
                      </ol>
                    </div>
                    <Button
                      variant={{
                        type: 'icon',
                        size: 'sm',
                        color: 'simple',
                      }}
                    >
                      <Icon icon="ellipsis-vertical" variant={{ size: 'sm', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </li>
                <li className="bg-sf-base-default flex gap-2 rounded-xl p-4">
                  <main className="flex-1 space-y-1">
                    <header className="body-medium text-txt-base-heading">Push, pull, legs</header>
                    <p className="body-small text-txt-base-body">
                      Workout schedule focused on three days routine
                    </p>
                    <footer>
                      <ul className="caption flex items-center gap-4">
                        <li className="text-txt-base-caption flex items-center gap-1">
                          <Icon icon="clipboard-list" variant={{ size: 'sm', weight: 'thin' }} />3
                          sessions
                        </li>
                        <li className="text-txt-base-caption flex items-center gap-1">
                          <Icon icon="bed" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside className="flex gap-2">
                    <div>
                      <ol className="caption flex items-center gap-1">
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Monday
                        </li>
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Wednesday
                        </li>
                        <li className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4">
                          Friday
                        </li>
                      </ol>
                    </div>
                    <Button
                      variant={{
                        type: 'icon',
                        size: 'sm',
                        color: 'simple',
                      }}
                    >
                      <Icon icon="ellipsis-vertical" variant={{ size: 'sm', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </li>
              </ul>
            </main>
          </div>
        </PageContent>
      </main>
      <PageLateralPanel>
        <section className="w-full space-y-2">
          <h2 className="heading-6 text-txt-base-heading">Your sessions</h2>
          <div>
            <ul className="w-full space-y-2">
              <li className="w-full">
                <div className="flex w-full items-center gap-1">
                  <main className="w-full space-y-1">
                    <p className="text-txt-base-body body-medium">Push day</p>
                    <footer>
                      <ul className="caption flex gap-4">
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="dumbbell" variant={{ size: 'sm', weight: 'thin' }} />3
                          exercises
                        </li>
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside>
                    <Button
                      variant={{
                        color: 'simple',
                        type: 'icon',
                      }}
                    >
                      <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </div>
              </li>
              <li className="w-full">
                <div className="flex w-full items-center gap-1">
                  <main className="w-full space-y-1">
                    <p className="text-txt-base-body body-medium">Push day</p>
                    <footer>
                      <ul className="caption flex gap-4">
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="dumbbell" variant={{ size: 'sm', weight: 'thin' }} />3
                          exercises
                        </li>
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside>
                    <Button
                      variant={{
                        color: 'simple',
                        type: 'icon',
                      }}
                    >
                      <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </div>
              </li>
              <li className="w-full">
                <div className="flex w-full items-center gap-1">
                  <main className="w-full space-y-1">
                    <p className="text-txt-base-body body-medium">Push day</p>
                    <footer>
                      <ul className="caption flex gap-4">
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="dumbbell" variant={{ size: 'sm', weight: 'thin' }} />3
                          exercises
                        </li>
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside>
                    <Button
                      variant={{
                        color: 'simple',
                        type: 'icon',
                      }}
                    >
                      <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full space-y-2">
          <h2 className="heading-6 text-txt-base-heading">Your exercises</h2>
          <div>
            <ul className="w-full space-y-2">
              <li className="w-full">
                <div className="flex w-full items-center gap-1">
                  <main className="w-full space-y-1">
                    <p className="text-txt-base-body body-medium">Push day</p>
                    <footer>
                      <ul className="caption flex gap-4">
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside className="flex items-center gap-1">
                    <div className="body-small text-txt-base-caption whitespace-nowrap">4 x 12</div>
                    <Button
                      variant={{
                        color: 'simple',
                        type: 'icon',
                      }}
                    >
                      <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </div>
              </li>
              <li className="w-full">
                <div className="flex w-full items-center gap-1">
                  <main className="w-full space-y-1">
                    <p className="text-txt-base-body body-medium">Push day</p>
                    <footer>
                      <ul className="caption flex gap-4">
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside className="flex items-center gap-1">
                    <div className="body-small text-txt-base-caption whitespace-nowrap">4 x 12</div>
                    <Button
                      variant={{
                        color: 'simple',
                        type: 'icon',
                      }}
                    >
                      <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </div>
              </li>
              <li className="w-full">
                <div className="flex w-full items-center gap-1">
                  <main className="w-full space-y-1">
                    <p className="text-txt-base-body body-medium">Push day</p>
                    <footer>
                      <ul className="caption flex gap-4">
                        <li className="text-txt-base-caption flex gap-1">
                          <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                          October 24, 2026
                        </li>
                      </ul>
                    </footer>
                  </main>
                  <aside className="flex items-center gap-1">
                    <div className="body-small text-txt-base-caption whitespace-nowrap">4 x 12</div>
                    <Button
                      variant={{
                        color: 'simple',
                        type: 'icon',
                      }}
                    >
                      <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
                    </Button>
                  </aside>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </PageLateralPanel>
    </PageContainer>
  );
}

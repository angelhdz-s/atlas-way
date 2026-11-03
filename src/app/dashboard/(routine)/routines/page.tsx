import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { PageLateralPanel } from '@/presentation/modules/dashboard/components/page/PageLateralPanel';
import { LateralPanelSection } from '@/presentation/modules/dashboard/components/LateralPanelSection';
import { ActionsButton } from '@/presentation/modules/button/components/ActionsButton';
import { Button } from '@/presentation/modules/button/components/Button';
import { twMerge } from 'tailwind-merge';

export default async function RoutinesPage() {
  const routinesResult = await getAllRoutines();

  const routines = routinesResult.success ? routinesResult.data : [];

  if (routines.length < 1) return <RoutineEmptyData />;

  return (
    <PageContainer className="flex gap-8">
      <main className="flex-1 space-y-8">
        <header className="flex items-center gap-4">
          <PageHeader
            title="Your Routines"
            description="Create and manage your routines to automate tasks and workflows."
            className="flex-1"
          />
          <Link variant={{ color: 'primary' }} href="/dashboard/routines/create">
            <Icon icon="plus" variant={{ size: 'md', weight: 'moderate' }} />
            New routine
          </Link>
        </header>
        <PageContent className="flex flex-col gap-4">
          <section className="flex flex-wrap gap-4">
            <ul className="w-full space-y-4">
              <li className="w-full">
                <article className="border-bd-base-default bg-sf-base-default rounded-xl border p-4">
                  <header className="flex items-start gap-4">
                    <div className="flex-1 space-y-1">
                      <h3 className="body-large text-txt-base-heading">Push, pull, legs</h3>
                      <p className="body-medium text-txt-base-body">
                        Three days scheduled workout to emphasys push/pull muscles and legs
                        separately
                      </p>
                      <div className="text-txt-base-body caption flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon
                            icon="clipboard-list"
                            variant={{ size: 'sm', weight: 'thin' }}
                            className="text-ic-base-caption"
                          />
                          3 sessions
                        </span>

                        <span className="flex items-center gap-1">
                          <Icon
                            icon="bed"
                            variant={{ size: 'sm', weight: 'thin' }}
                            className="text-ic-base-caption gap-1"
                          />
                          4 rest days
                        </span>
                      </div>
                    </div>
                    {/* biome-ignore lint/a11y/useSemanticElements: button group correctly applied */}
                    <div
                      role="group"
                      aria-label="Routine actions"
                      className="flex items-center gap-2"
                    >
                      <button
                        type="button"
                        role="switch"
                        aria-checked={true}
                        className={twMerge(
                          'bg-sf-action-default border-bd-action-default h-8 w-12 cursor-pointer rounded-full border',
                          'before:bg-sf-base-inverse before:my-auto before:mr-1.5 before:ml-auto before:block before:aspect-square before:h-5 before:rounded-full'
                        )}
                      />
                      <Button
                        type="button"
                        variant={{ size: 'md', color: 'simple' }}
                        aria-expanded={true}
                        aria-label="Hide routine schedule"
                      >
                        <Icon icon="chevron-down" variant={{ size: 'md', weight: 'moderate' }} />
                      </Button>
                    </div>
                  </header>
                  <section className="space-y-1 pt-4">
                    <h4 className="caption text-txt-base-caption">Weekly schedule</h4>
                    <ol className="border-bd-base-subtle [&>li]:not-first:border-bd-base-subtle flex items-center overflow-hidden rounded-lg border [&>li]:flex-1 [&>li]:not-first:border-l">
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Monday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Tuesday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Wednesday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Thursday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Friday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Saturday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Sunday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </section>
                </article>
              </li>
              <li className="w-full">
                <article className="border-bd-base-default bg-sf-base-default rounded-xl border p-4">
                  <header className="flex items-start gap-4">
                    <div className="flex-1 space-y-1">
                      <h3 className="body-large text-txt-base-heading">Push, pull, legs</h3>
                      <p className="body-medium text-txt-base-body">
                        Three days scheduled workout to emphasys push/pull muscles and legs
                        separately
                      </p>
                      <div className="text-txt-base-body caption flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon
                            icon="clipboard-list"
                            variant={{ size: 'sm', weight: 'thin' }}
                            className="text-ic-base-caption"
                          />
                          3 sessions
                        </span>

                        <span className="flex items-center gap-1">
                          <Icon
                            icon="bed"
                            variant={{ size: 'sm', weight: 'thin' }}
                            className="text-ic-base-caption gap-1"
                          />
                          4 rest days
                        </span>
                      </div>
                    </div>
                    {/* biome-ignore lint/a11y/useSemanticElements: button group correctly applied */}
                    <div
                      role="group"
                      aria-label="Routine actions"
                      className="flex items-center gap-2"
                    >
                      <button
                        type="button"
                        role="switch"
                        aria-checked={true}
                        className={twMerge(
                          'bg-sf-action-default border-bd-action-default h-8 w-12 cursor-pointer rounded-full border',
                          'before:bg-sf-base-inverse before:my-auto before:mr-1.5 before:ml-auto before:block before:aspect-square before:h-5 before:rounded-full'
                        )}
                      />
                      <Button
                        type="button"
                        variant={{ size: 'md', color: 'simple' }}
                        aria-expanded={false}
                        aria-label="Show routine schedule"
                      >
                        <Icon icon="chevron-up" variant={{ size: 'md', weight: 'moderate' }} />
                      </Button>
                    </div>
                  </header>
                  <section className="hidden space-y-1 pt-4">
                    <h4 className="caption text-txt-base-caption">Weekly schedule</h4>
                    <ol className="border-bd-base-subtle [&>li]:not-first:border-bd-base-subtle flex items-center overflow-hidden rounded-lg border [&>li]:flex-1 [&>li]:not-first:border-l">
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Monday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Tuesday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Wednesday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Thursday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Friday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>

                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Saturday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>

                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Sunday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </section>
                </article>
              </li>
              <li className="w-full">
                <article className="border-bd-base-default bg-sf-base-default rounded-xl border p-4">
                  <header className="flex items-start gap-4">
                    <div className="flex-1 space-y-1">
                      <h3 className="body-large text-txt-base-disabled">Push, pull, legs</h3>
                      <p className="body-medium text-txt-base-disabled">
                        Three days scheduled workout to emphasys push/pull muscles and legs
                        separately
                      </p>
                      <div className="text-txt-base-disabled caption flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon
                            icon="clipboard-list"
                            variant={{ size: 'sm', weight: 'thin' }}
                            className="text-ic-base-disabled"
                          />
                          3 sessions
                        </span>

                        <span className="flex items-center gap-1">
                          <Icon
                            icon="bed"
                            variant={{ size: 'sm', weight: 'thin' }}
                            className="text-ic-base-disabled gap-1"
                          />
                          4 rest days
                        </span>
                      </div>
                    </div>
                    {/* biome-ignore lint/a11y/useSemanticElements: button group correctly applied */}
                    <div
                      role="group"
                      aria-label="Routine actions"
                      className="flex items-center gap-2"
                    >
                      <button
                        type="button"
                        role="switch"
                        aria-checked={true}
                        className={twMerge(
                          'bg-sf-base-page border-bd-base-default h-8 w-12 cursor-pointer rounded-full border',
                          'before:bg-sf-base-inverse before:my-auto before:mr-auto before:ml-1.5 before:block before:aspect-square before:h-5 before:rounded-full'
                        )}
                      />
                      <Button
                        type="button"
                        variant={{ size: 'md', color: 'simple' }}
                        aria-expanded={false}
                        aria-label="Show routine schedule"
                      >
                        <Icon icon="chevron-down" variant={{ size: 'md', weight: 'moderate' }} />
                      </Button>
                    </div>
                  </header>
                  <section className="hidden space-y-1 pt-4">
                    <h4 className="caption text-txt-base-caption">Weekly schedule</h4>
                    <ol className="border-bd-base-subtle [&>li]:not-first:border-bd-base-subtle flex items-center overflow-hidden rounded-lg border [&>li]:flex-1 [&>li]:not-first:border-l">
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Monday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Tuesday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Wednesday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Thursday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Friday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <article className="bg-sf-base-default border-bd-base-default h-full rounded-sm border p-2">
                              <div className="flex items-center gap-2">
                                <Icon
                                  icon="grip-vertical"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                />
                                <span className="flex-1">Push day</span>
                                <Button
                                  variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                                  aria-label="Remove session"
                                >
                                  <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
                                </Button>
                              </div>
                            </article>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Saturday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article>
                          <header className="bg-sf-base-page border-bd-base-subtle flex h-8 items-center border-b px-2">
                            <h5 className="body-small text-txt-base-body">Sunday</h5>
                          </header>
                          <div className="bg-sf-base-page h-23 p-1">
                            <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
                              <svg
                                viewBox="0 0 100 100"
                                className="pointer-events-none absolute h-full w-full"
                                preserveAspectRatio="none"
                                aria-hidden={true}
                              >
                                <rect
                                  x={1}
                                  y={1}
                                  width="98"
                                  height="98"
                                  fill="none"
                                  strokeDasharray="8, 8"
                                  strokeDashoffset="0"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  vectorEffect={'non-scaling-stroke'}
                                  className="stroke-bd-base-subtle"
                                />
                              </svg>
                              <div className="text-txt-base-caption flex flex-col items-center justify-center">
                                <Icon
                                  icon="plus"
                                  variant={{ size: 'sm', weight: 'thin' }}
                                  className="text-ic-base-caption"
                                />
                                <span className="caption flex-1 text-center text-pretty">
                                  Drag and drop your session here
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </section>
                </article>
              </li>
            </ul>
          </section>
        </PageContent>
      </main>
      <PageLateralPanel>
        <LateralPanelSection title="Your sessions">
          <ul className="space-y-4">
            <li>
              <article className="bg-sf-base-default border-bd-base-default space-y-2 rounded-sm border p-2">
                <header className="flex items-center gap-1">
                  <Icon
                    icon="grip-vertical"
                    variant={{ size: 'sm', weight: 'thin' }}
                    className="text-ic-base-top"
                  />
                  <span className="body-medium text-txt-base-heading flex-1">Push day</span>
                  <ActionsButton
                    menuSide="left"
                    actions={[
                      {
                        icon: 'trash',
                        label: 'Delete',
                        href: '#',
                      },
                    ]}
                  />
                </header>
                <ul className="caption text-txt-base-body space-y-0.5">
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Push ups</span> <span>4 x 12</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Abs</span> <span>6 x 20</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Dips</span> <span>4 x 10</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Lateral raises</span> <span>4 x 16</span>
                  </li>
                </ul>
              </article>
            </li>
            <li>
              <article className="bg-sf-base-default border-bd-base-default space-y-2 rounded-sm border p-2">
                <header className="flex items-center gap-1">
                  <Icon
                    icon="grip-vertical"
                    variant={{ size: 'sm', weight: 'thin' }}
                    className="text-ic-base-top"
                  />
                  <span className="body-medium text-txt-base-heading flex-1">Push day</span>
                  <ActionsButton
                    menuSide="left"
                    actions={[
                      {
                        icon: 'trash',
                        label: 'Delete',
                        href: '#',
                      },
                    ]}
                  />
                </header>
                <ul className="caption text-txt-base-body space-y-0.5">
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Push ups</span> <span>4 x 12</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Abs</span> <span>6 x 20</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Dips</span> <span>4 x 10</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Lateral raises</span> <span>4 x 16</span>
                  </li>
                </ul>
              </article>
            </li>
            <li>
              <article className="bg-sf-base-default border-bd-base-default space-y-2 rounded-sm border p-2">
                <header className="flex items-center gap-1">
                  <Icon
                    icon="grip-vertical"
                    variant={{ size: 'sm', weight: 'thin' }}
                    className="text-ic-base-top"
                  />
                  <span className="body-medium text-txt-base-heading flex-1">Push day</span>
                  <ActionsButton
                    menuSide="left"
                    actions={[
                      {
                        icon: 'trash',
                        label: 'Delete',
                        href: '#',
                      },
                    ]}
                  />
                </header>
                <ul className="caption text-txt-base-body space-y-0.5">
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Push ups</span> <span>4 x 12</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Abs</span> <span>6 x 20</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Dips</span> <span>4 x 10</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex-1">Lateral raises</span> <span>4 x 16</span>
                  </li>
                </ul>
              </article>
            </li>
          </ul>
        </LateralPanelSection>
      </PageLateralPanel>
    </PageContainer>
  );
}

# Graph Report - atlas-way  (2026-11-04)

## Corpus Check
- 529 files · ~81,687 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: .css 7, (none) 5, .toml 1)

## Summary
- 1955 nodes · 6357 edges · 74 communities (65 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 95 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `017f5dfd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Exercise Validation Schemas
- RoutineModalForm.tsx
- dashboard/page.tsx
- ref_tailwind_merge
- CardTitle
- Landing Page Sections
- Notification Use Cases
- ref_presentation_modules_form_form_types
- DomainError
- Prisma Repositories
- Session
- Unit Test Suites
- Session List UI
- src_prisma_client
- User Use Cases
- Dashboard Pages
- Server Actions and Container
- Modal and Layout Primitives
- Date Utilities
- Exercise Update Logic
- Exercise Use Cases
- Drag and Drop UI
- Exercise Form Fields
- RoutineDayItem.tsx
- Design Skill Instructions
- ErrorMessage
- Routine and Session Cards
- RoutineSchedule.tsx
- Database Seed Data
- Root Layout and Fonts
- Session Creation Flow
- User Entity and Persistence
- Tracking Pages and Empty States
- routine.dto.ts
- Icon
- Routine Session Rules
- ref_react
- Domain Error Codes
- ErrorMessage
- ref_next
- WizardProvider.tsx
- tracking.presentation.types.d.ts
- Wizard Step Engine
- Domain Data Types
- workout-target.actions.ts
- Unit Testing Skill Instructions
- WorkoutButtons.tsx
- Muscle
- Calendar Dropdowns
- CI and Docker Deployment
- Workout Wizard Normalizers
- Presentation Type Definitions
- Form Type Definitions
- Exercise Targets UI
- CalendarDay.tsx
- Design System Documentation
- useToast
- WizardOrchestratorInner.tsx
- containers.ts
- Wizard Type Definitions
- Step Form Sync
- middleware.ts
- Shared Type Utilities
- Wizard Summary Types
- Button Component Guidance
- WizardSummaryProvider.tsx
- Unit Testing Principles
- Status Code Types
- Training Status Types
- CSS Module Styles
- workout-status.rules.ts

## God Nodes (most connected - your core abstractions)
1. `Icon()` - 131 edges
2. `Failure()` - 125 edges
3. `Success()` - 96 edges
4. `DomainError` - 81 edges
5. `UseCase` - 73 edges
6. `Button()` - 62 edges
7. `Exercise` - 52 edges
8. `Result` - 47 edges
9. `ActionFailure()` - 45 edges
10. `getContainer()` - 42 edges

## Surprising Connections (you probably didn't know these)
- `Button Component Guidance` --references--> `Button()`  [INFERRED]
  DESIGN.md → src/presentation/modules/button/components/Button.tsx
- `Lucide Icon Library` --references--> `Icon()`  [INFERRED]
  DESIGN.md → src/presentation/modules/icon/components/Icon.tsx
- `Procedure` --references--> `main()`  [INFERRED]
  .agents/skills/pull-request-description/SKILL.md → prisma/seed.ts
- `Shared button component` --references--> `Button()`  [EXTRACTED]
  .agents/skills/design-implementation/SKILL.md → src/presentation/modules/button/components/Button.tsx
- `Shared icon component` --references--> `Icon()`  [EXTRACTED]
  .agents/skills/design-implementation/SKILL.md → src/presentation/modules/icon/components/Icon.tsx

## Import Cycles
- 4-file cycle: `src/di/containers.ts -> src/modules/auth/infrastructure/next-auth/auth.next-auth.repository.ts -> src/shared/infrastructure/next-auth/next-auth.currentsession.ts -> src/shared/infrastructure/next-auth/next-auth.options.ts -> src/di/containers.ts`

## Hyperedges (group relationships)
- **Atlas Way Tech Stack** — readme_atlas_way, readme_next_js, readme_prisma_orm, readme_postgresql, readme_docker [EXTRACTED 1.00]
- **Clean Architecture Test Layers** — agents_skills_unit_testing_skill_domain, agents_skills_unit_testing_skill_application, agents_skills_unit_testing_skill_infrastructure, agents_skills_unit_testing_skill_presentation [EXTRACTED 1.00]
- **Design Token Categories** — design_surface_tokens, design_border_tokens, design_text_tokens, design_icon_tokens [EXTRACTED 1.00]
- **CI Verification Flow** — _github_workflows_safe_code_safe_code_verification, _github_workflows_safe_code_postgres_service, _github_workflows_safe_code_prisma_migrate_deploy, readme_prisma_orm [EXTRACTED 1.00]

## Communities (74 total, 9 thin omitted)

### Community 0 - "Exercise Validation Schemas"
Cohesion: 0.06
Nodes (51): EXERCISE_DESCRIPTION_LENGTH, EXERCISE_NAME_LENGTH, EXERCISE_REPS_RANGE, EXERCISE_SETS_RANGE, EXERCISE_WEIGHT_RANGE, isValidExerciseDescription(), isValidExerciseName(), isValidExerciseReps() (+43 more)

### Community 1 - "RoutineModalForm.tsx"
Cohesion: 0.13
Nodes (19): CreateRoutinePage(), Props, RoutineActiveField(), Props, RoutineCycleField(), Props, RoutineModalForm(), routineCycleSchema (+11 more)

### Community 2 - "dashboard/page.tsx"
Cohesion: 0.11
Nodes (11): RoutinesPage(), Props, WEEK_DAY_NAMES, WeekActivity(), WeekActivityDays, LateralPanelSection(), Props, PageLateralPanel() (+3 more)

### Community 3 - "ref_tailwind_merge"
Cohesion: 0.17
Nodes (16): ActiveRoutineData, ActiveRoutineItem(), Props, WEEK_DAYS, ExerciseProps, SessionLateralPanelDraggableItem(), SessionLateralPanelDraggableItemProps, SessionProps (+8 more)

### Community 4 - "CardTitle"
Cohesion: 0.13
Nodes (28): SessionsPage(), ActivitiesToday(), AllSessionsDoneCounter(), BestRecordItem(), BestRecordItemType, BestRecords(), RECORDS, Counter() (+20 more)

### Community 5 - "Landing Page Sections"
Cohesion: 0.11
Nodes (26): AtlasWayCard(), Props, BentoCard(), Props, BentoGrid(), CarruselIcons(), Props, CreateYourOwnRoutines() (+18 more)

### Community 6 - "Notification Use Cases"
Cohesion: 0.09
Nodes (15): CreateNotificationInput, NotificationDTO, UpdateNotificationInput, UpdateProps, CreateNotification, GetAllNotifications, GetNotificationById, UpdateNotification (+7 more)

### Community 7 - "ref_presentation_modules_form_form_types"
Cohesion: 0.16
Nodes (5): Radiobutton(), RadiobuttonMark(), RadiobuttonProps, RadiobuttonsProps, SelectBoxOption()

### Community 8 - "DomainError"
Cohesion: 0.05
Nodes (38): SessionNotFoundError, ExerciseProps, UpdateProps, UpdateRoutineInput, UpdateOperations, updateRoutineProperties(), CreateRoutine, DeleteRoutine (+30 more)

### Community 9 - "Prisma Repositories"
Cohesion: 0.12
Nodes (6): ExerciseMapper, ExercisePrismaRepository, NotificationPrismaRepository, SessionPrismaRepository, Failure(), Success()

### Community 10 - "Session"
Cohesion: 0.08
Nodes (25): CreateSessionInput, UpdateProps, UpdateSessionInput, UpdateOperations, updateSessionProperties(), CreateSession, DeleteSession, GetAllSessions (+17 more)

### Community 11 - "Unit Test Suites"
Cohesion: 0.11
Nodes (13): LoginInput, GetCurrentSession, Login, Logout, makeAuthModule(), Props, SessionAlreadyActive, createExercise() (+5 more)

### Community 12 - "Session List UI"
Cohesion: 0.12
Nodes (23): ExerciseRow(), ExerciseRowType, LAST_SESSIONS, SessionListItem(), SessionListItemType, SessionRestDayType, SessionTrainingDayType, exerciseType (+15 more)

### Community 13 - "src_prisma_client"
Cohesion: 0.09
Nodes (20): exerciseIncludeAnatomy, ExercisePrisma, ExercisePrismaCreate, ExercisePrismaUpdate, MusclePrisma, MuscleIdName, MusclesFormData, CYCLE_TYPES (+12 more)

### Community 14 - "User Use Cases"
Cohesion: 0.08
Nodes (25): IAuthRepository, CreateRoutineInput, CreateUserInput, UpdateProps, UpdateUserInput, UpdateOperations, updateUserProperties(), CreateUser (+17 more)

### Community 15 - "Dashboard Pages"
Cohesion: 0.13
Nodes (25): ExercisesStatisticsPage(), MusclesStatisticsPage(), StatisticsPage(), RoutinesStatisticsPage(), SessionsStatisticsPage(), BodySections, MuscularGroupsPage(), Dashboard() (+17 more)

### Community 16 - "Server Actions and Container"
Cohesion: 0.15
Nodes (37): getContainer(), getSession(), logout(), createExerciseAction(), deleteExercise(), getAllUserExercises(), MuscleMapper, getAllMuscles() (+29 more)

### Community 17 - "Modal and Layout Primitives"
Cohesion: 0.15
Nodes (16): ModalLayout(), Modal(), Props, TooltipBackdrop(), layerStack, Props, registerLayer(), unregisterLayer() (+8 more)

### Community 18 - "Date Utilities"
Cohesion: 0.07
Nodes (33): CurrentWeekStatusDays, getCurrentWeekStatusDays(), StatusDay(), StatusDayIcon(), MONTH_DAYS, MONTH_DAYS_LEAP, MONTH_LIMITS, MONTH_NAMES (+25 more)

### Community 19 - "Exercise Update Logic"
Cohesion: 0.07
Nodes (24): CreateExerciseInput, UpdateExerciseInput, UpdateProps, updateExercise(), UpdateExerciseKeys, UpdateOperations, ExerciseNotFoundError, InvalidExerciseData (+16 more)

### Community 20 - "Exercise Use Cases"
Cohesion: 0.17
Nodes (12): CreateExercise, DeleteExercise, GetAllExercises, GetExerciseById, GetExercisesByIds, GetAllUserExercises, UpdateExercise, ExerciseOwnershipError (+4 more)

### Community 21 - "Drag and Drop UI"
Cohesion: 0.08
Nodes (33): Props, RoutineSessionPlanDroppableItem(), Props, DraggableBadge(), Props, buttonVariant, ButtonVariantProps, getClasses() (+25 more)

### Community 22 - "Exercise Form Fields"
Cohesion: 0.17
Nodes (23): CreateExercisePage(), ExerciseDTO, ExerciseDescriptionField(), Props, ExerciseNameField(), Props, ExerciseRepsField(), Props (+15 more)

### Community 23 - "RoutineDayItem.tsx"
Cohesion: 0.25
Nodes (8): DAY_TYPE_REST, DayObjectType, getDayAttributes(), RoutineDayItem(), STATUS_DAYS, StatusDayTypes, routineDayItemClassConfig, IconName

### Community 24 - "Design Skill Instructions"
Cohesion: 0.06
Nodes (31): 1. Tailwind CSS Requirements, Examples, Rules, 2. Arbitrary Value Unit Policy, 3. Figma-to-Tailwind Unit Conversion, 4. Figma Stroke Alignment: Inside, Center, and Outside, 5. Typography Weight Conversion, 7. Component Implementation (+23 more)

### Community 25 - "ErrorMessage"
Cohesion: 0.14
Nodes (14): Props, RoutineInitialDateField(), Props, RoutineNameField(), ErrorMessage(), Props, InputDate(), InputText() (+6 more)

### Community 26 - "Routine and Session Cards"
Cohesion: 0.14
Nodes (19): BodySectionCards(), BodySections, Routine(), Session(), SessionExercisesList(), Props, SessionExerciseRow(), CardHeader() (+11 more)

### Community 27 - "RoutineSchedule.tsx"
Cohesion: 0.16
Nodes (14): Props, RoutineProps, RoutineSchedule(), Props, RoutineScheduleDay(), RoutineScheduleDayHeader(), RoutineScheduleDayHeaderProps, SessionProps (+6 more)

### Community 28 - "Database Seed Data"
Cohesion: 0.12
Nodes (17): Procedure, Pull Request Description, Scope and Safety, main(), BODY_SECTIONS, MUSCLES, MUSCULAR_GROUPS, STATUS (+9 more)

### Community 29 - "Root Layout and Fonts"
Cohesion: 0.09
Nodes (20): funnelDisplayFont, metadata, outfitFont, RootLayout(), DAYS, DaysType, DayType, DayWeeksType (+12 more)

### Community 30 - "Session Creation Flow"
Cohesion: 0.18
Nodes (14): CreateSessionPage(), dynamic, SessionDTO, Props, SessionDescription(), SessionExercises(), Props, SessionName() (+6 more)

### Community 31 - "User Entity and Persistence"
Cohesion: 0.16
Nodes (7): UserDTO, User, userIncludeAnatomy, UserPrisma, UserPrismaCreate, UserPrismaUpdate, UserMapper

### Community 32 - "Tracking Pages and Empty States"
Cohesion: 0.17
Nodes (19): TrackingTargetsPage(), TrackingTrainingPage(), ExerciseEmptyData(), ExercisePanelItem(), Props, RoutineEmptyData(), SessionEmptyData(), Props (+11 more)

### Community 33 - "routine.dto.ts"
Cohesion: 0.39
Nodes (5): RoutineDTO, FullRoutineDTO, Props, RoutineDescriptionField(), TextArea()

### Community 34 - "Icon"
Cohesion: 0.10
Nodes (24): Action, ACTION_CONTENTS, ActionContent, Props, RoutineScheduleDayDroppable(), Props, RestCard(), CompletedTag() (+16 more)

### Community 35 - "Routine Session Rules"
Cohesion: 0.13
Nodes (19): getRoutineDayNumber(), resolveRoutineSessionForDate(), RoutineLike, RoutinePlanDayLike, toDateOnly(), todayDateOnly(), getTrackingUserId(), OwnedWorkoutResult (+11 more)

### Community 36 - "ref_react"
Cohesion: 0.17
Nodes (18): LastSessions(), session, SessionsHistory(), ArrowButton(), Calendar(), CalendarProvider(), DateControl(), Props (+10 more)

### Community 37 - "Domain Error Codes"
Cohesion: 0.11
Nodes (11): AuthErrorCode, ExerciseErrorCode, ExerciseInvalidDataErrorCodes, MuscleErrorCode, NotificationErrorCode, RoutineErrorCode, RoutineInvalidDataErrorCodes, SessionErrorCode (+3 more)

### Community 38 - "ErrorMessage"
Cohesion: 0.12
Nodes (17): ExerciseMusclesField(), Props, RoutineSessionPlanDraggableItem(), Props, RoutineSessionField, RoutineSessionPlanField(), ContainersKey, DroppedItem (+9 more)

### Community 39 - "ref_next"
Cohesion: 0.06
Nodes (41): handler, Layout(), dynamic, Home(), authLoginOptionsHandler(), nextAuthLogin(), nextAuthLogout(), AUTH_PROVIDER (+33 more)

### Community 40 - "WizardProvider.tsx"
Cohesion: 0.39
Nodes (6): StepEngineProvider(), Props, StepFormProvider(), Props, WizardProvider(), WizardSummaryProvider()

### Community 42 - "Wizard Step Engine"
Cohesion: 0.19
Nodes (14): Props, StepEngineContext, findNextValidIndex(), stepEngineReducer(), StepEngineAction, StepEngineActionType, JUMP_TO_PHASE, JUMP_TO_STEP (+6 more)

### Community 44 - "Domain Data Types"
Cohesion: 0.15
Nodes (12): BODY_SECTIONS, BodySectionsKeys, CalendarDayPositionTimelineType, CalendarDayStatusType, EXERCISES, ExercisesType, ExerciseType, MUSCLES (+4 more)

### Community 46 - "workout-target.actions.ts"
Cohesion: 0.20
Nodes (16): ExerciseSchema, canReopenWorkoutTarget(), resolveReopenedWorkoutTargetStatus(), resolveWorkoutTargetFinalStatus(), resolveWorkoutTargetStatusAfterSet(), WorkoutTargetProgressInput, exerciseMetricsSchema, WorkoutTargetsForm (+8 more)

### Community 49 - "Unit Testing Skill Instructions"
Cohesion: 0.17
Nodes (16): 10. Completion Criteria, 2. Identify the Unit's Responsibility First, 3. Define the Minimum Sufficient Test Set, 4. Apply Clean Architecture Boundaries, 5. Test Structure and Naming, 6. Mocks, Stubs, and Assertions, 7. Avoid Over-Testing, 8. Test Failures and Regressions (+8 more)

### Community 50 - "WorkoutButtons.tsx"
Cohesion: 0.20
Nodes (13): WorkoutForm, WorkoutSetForm, workoutSetFormSchema, workoutSetSchema, Props, TrainingButtons(), Fallback(), Props (+5 more)

### Community 52 - "Muscle"
Cohesion: 0.07
Nodes (25): ExercisesTable(), Props, BodySectionDTO, MuscleDTO, MuscularGroupDTO, GetAllMuscles, GetMuscleById, GetMusclesByIds (+17 more)

### Community 53 - "Calendar Dropdowns"
Cohesion: 0.21
Nodes (8): DropdownList(), DropdownListProps, DropdownListValueType, DateDropdownlist(), MonthDropdownlist(), generateYearOptions(), YearDropdownlist(), DROPDOWN_LIST_YEARS_RANGE

### Community 54 - "CI and Docker Deployment"
Cohesion: 0.21
Nodes (15): CI PostgreSQL Service, Prisma Migrate Deploy Step, Safe Code Verification Workflow, atlas-way, DATABASE_URL, Docker, Cloud Deployment, Docker Compose (+7 more)

### Community 56 - "Workout Wizard Normalizers"
Cohesion: 0.19
Nodes (9): Props, targetSetsMap(), targetStatusMapper(), WorkoutWrapper(), FullWorkoutTargets, NormalizeDataInput, normalizeStepsData(), normalizeSummaryData() (+1 more)

### Community 57 - "Presentation Type Definitions"
Cohesion: 0.20
Nodes (9): ActionResponseType, AnchorElementProps, AtomicElement, ButtonElementProps, ButtonElementPropsWithRef, DivProps, Prettify, Toast (+1 more)

### Community 58 - "Form Type Definitions"
Cohesion: 0.13
Nodes (14): ArrayField, ArrayFieldWithLabel, DnDFormFieldItemData, DnDFormFieldItemDraggableData, DnDFormFieldItemDroppableData, HTMLInputProps, IdArrayField, InputDateProps (+6 more)

### Community 59 - "Exercise Targets UI"
Cohesion: 0.22
Nodes (11): ExerciseTargets(), Props, Props, ExerciseTargetsStatus(), Props, statusIcons, ExerciseTargetsContext, ExerciseTargetsContextType (+3 more)

### Community 60 - "CalendarDay.tsx"
Cohesion: 0.40
Nodes (10): CalendarDayType, getCalendarStatusDay(), CalendarDay(), CalendarDayCanceled(), CalendarDayCompleted(), CalendarDayCurrent(), CalendarDayItem(), CalendarDayNextTraining() (+2 more)

### Community 62 - "Design System Documentation"
Cohesion: 0.19
Nodes (11): 6. Design Tokens and DESIGN.md, Shared icon component, Atlas Way Design System, Border Color Tokens, Figma Source of Truth, Semantic Icon Assignments, Icon Color Tokens, Lucide Icon Library (+3 more)

### Community 63 - "useToast"
Cohesion: 0.27
Nodes (6): ModalFormHookProps, useFormHook(), ToastContext, ToastContextType, ToastOptions, useToast()

### Community 64 - "WizardOrchestratorInner.tsx"
Cohesion: 0.33
Nodes (7): Props, WizardOrchestratorInner(), WizardOrchestratorInnerContext, WizardOrchestratorInnerValue, getNextStepId(), GetNextStepIdProps, getPreviousStepId()

### Community 65 - "containers.ts"
Cohesion: 0.08
Nodes (18): AuthSession, AuthMapper, AuthNextAuthRepository, MusclePrismaRepository, muscleAnatomyInclude, RoutinePrismaRepository, UserPrismaRepository, errorHandlersContainer (+10 more)

### Community 67 - "Wizard Type Definitions"
Cohesion: 0.20
Nodes (10): FlatStep, FlatStepWithText, NormalizeDomain, Phase, PhaseStatus, PhaseWithText, StepEnginePhaseEntries, StepStatus (+2 more)

### Community 71 - "Step Form Sync"
Cohesion: 0.27
Nodes (8): FormKey, Props, SaveStepAction, StepFormSyncProvider(), StepFormSyncContext, StepFormSyncValue, getNextPhaseStepId(), useStepEngine()

### Community 73 - "Shared Type Utilities"
Cohesion: 0.33
Nodes (5): ClassMethods, Different, EntityMethod, NonEmptyString, ValidationFunction

### Community 75 - "Wizard Summary Types"
Cohesion: 0.50
Nodes (3): PhaseSummary, StepSummary, WizardSummary

### Community 76 - "Button Component Guidance"
Cohesion: 0.67
Nodes (3): Shared button component, Button Component Guidance, Button Sizes

### Community 77 - "WizardSummaryProvider.tsx"
Cohesion: 0.20
Nodes (8): Props, WizardSummary(), Props, WizardContext, WizardValue, WizardSummaryContext, Wizard, useWizardSummary()

### Community 85 - "workout-status.rules.ts"
Cohesion: 0.38
Nodes (4): WorkoutStatusId, WorkoutTargetStatusId, resolveWorkoutFinalStatus(), ResolveWorkoutFinalStatusInput

## Knowledge Gaps
- **50 isolated node(s):** `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP`, `JUMP_TO_PHASE`, `RESET_ENGINE` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 483 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Icon()` connect `Icon` to `RoutineModalForm.tsx`, `dashboard/page.tsx`, `ref_tailwind_merge`, `CardTitle`, `Landing Page Sections`, `Session List UI`, `Dashboard Pages`, `Modal and Layout Primitives`, `Date Utilities`, `Drag and Drop UI`, `RoutineDayItem.tsx`, `Routine and Session Cards`, `RoutineSchedule.tsx`, `Root Layout and Fonts`, `Session Creation Flow`, `Tracking Pages and Empty States`, `ref_react`, `ErrorMessage`, `ref_next`, `Muscle`, `Exercise Targets UI`, `CalendarDay.tsx`, `Design System Documentation`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **What connects `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Exercise Validation Schemas` be split into smaller, more focused modules?**
  _Cohesion score 0.06126331811263318 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Drag and Drop UI` to `RoutineModalForm.tsx`, `Routine Session Rules`, `CardTitle`, `ref_tailwind_merge`, `ErrorMessage`, `ref_next`, `ref_presentation_modules_form_form_types`, `Exercise Targets UI`, `Button Component Guidance`, `Session List UI`, `Dashboard Pages`, `Modal and Layout Primitives`, `WorkoutButtons.tsx`, `Muscle`, `RoutineSchedule.tsx`, `CalendarDay.tsx`, `Session Creation Flow`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Should `RoutineModalForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12643678160919541 - nodes in this community are weakly interconnected._
- **Why does `Design Implementation Skill` connect `Design Skill Instructions` to `Unit Testing Principles`, `Button Component Guidance`, `Design System Documentation`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Should `dashboard/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10541310541310542 - nodes in this community are weakly interconnected._
# Graph Report - atlas-way  (2026-10-19)

## Corpus Check
- 582 files · ~79,063 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 14 file(s) not represented in the graph (top: .css 6, (none) 5, .toml 1)

## Summary
- 1981 nodes · 6640 edges · 84 communities (73 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 101 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `807345f3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Routine Management Use Cases
- Validation Functions
- Session Domain & Use Cases
- Domain Errors & Routine Entity
- UseCase
- Icon Components
- containers.ts
- Exercise Form UI
- Notification Module
- Success
- atlas-way
- Wizard Context & Providers
- login.ts
- Landing Page UI
- Training & Tracking Actions
- routine.prisma.repository.ts
- Routine Form UI
- Session Status & Lists UI
- Test Mocks & Fixtures
- SortableInputItems.tsx
- Toasts & App Layout
- Seed Data & Constants
- DI Container & Error Translators
- muscle.prisma.repository.ts
- YearDateSelector.tsx
- useLayer
- useCalendar.ts
- ExerciseTargets.tsx
- Advantages.tsx
- src_prisma_client
- Body Section Cards
- Calendar Date Utilities
- Session Form & Modal
- Sidebar Navigation
- DateSelector.tsx
- ref_presentation_modules_form_form_types
- useToast
- Card
- Exercise
- Workout Form & Wizard
- Card.tsx
- ref_react_hook_form
- Exercise & Session Mappers
- Form Input Components
- prisma/client.ts
- NotificationPrismaRepository
- finishWorkout
- Error Code Definitions
- ToggleTheme.tsx
- User Use Cases
- Calendar & Day Icons
- Safe Code Verification Workflow
- Wizard Step Engine
- Server Actions
- Routine Plan DnD & Toast Icons
- TooltipBackdrop
- Layout & Navigation Shell
- Global Constants & DB Types
- Data Table Components
- Muscle DTOs & Actions
- Dropdown List Controls
- Dev Form Components
- landing/components/Header.tsx
- Calendar Day Components
- AuthSession
- Workout Data Normalizers
- Presentation Type Definitions
- Form Type Definitions
- Landing Page Hero & Footer
- Muscle Entity
- Update User Use Case
- Wizard Domain Types
- Button
- result.ts
- middleware.ts
- Best Records UI
- Shared Type Definitions
- Wizard Summary Types
- Status Code Types
- Tracking Domain Types

## God Nodes (most connected - your core abstractions)
1. `Failure()` - 125 edges
2. `IconWrapper()` - 123 edges
3. `Success()` - 97 edges
4. `DomainError` - 81 edges
5. `UseCase` - 73 edges
6. `Button()` - 53 edges
7. `Exercise` - 52 edges
8. `Card()` - 51 edges
9. `Result` - 47 edges
10. `CardTitle()` - 45 edges

## Surprising Connections (you probably didn't know these)
- `Brand and alias color ramps` --references--> `Success()`  [INFERRED]
  DESIGN.md → src/shared/domain/result.ts
- `ModalExerciseForm()` --indirect_call--> `createExerciseAction()`  [INFERRED]
  src/modules/exercise/presentation/ui/components/ModalExerciseForm.tsx → src/modules/exercise/presentation/exercise.actions.ts
- `RoutineModalForm()` --indirect_call--> `createRoutineAction()`  [INFERRED]
  src/modules/routine/presentation/ui/components/RoutineModalForm.tsx → src/modules/routine/presentation/routine.actions.ts
- `SessionModalForm()` --indirect_call--> `createSessionAction()`  [INFERRED]
  src/modules/session/presentation/ui/components/SessionModalForm.tsx → src/modules/session/presentation/session.actions.ts
- `StepEngineProvider()` --indirect_call--> `stepEngineReducer()`  [INFERRED]
  src/presentation/modules/wizard/components/StepEngineProvider.tsx → src/presentation/modules/wizard/reducers/wizard.steps.reducer.ts

## Import Cycles
- 4-file cycle: `src/di/containers.ts -> src/modules/auth/infrastructure/next-auth/auth.next-auth.repository.ts -> src/shared/infrastructure/next-auth/next-auth.currentsession.ts -> src/shared/infrastructure/next-auth/next-auth.options.ts -> src/di/containers.ts`

## Hyperedges (group relationships)
- **Safe Code Verification CI Pipeline** — _github_workflows_safe_code_yml_safe_code_verification, _github_workflows_safe_code_yml_prisma, _github_workflows_safe_code_yml_postgresql, _github_workflows_safe_code_yml_verification_commands [INFERRED 0.85]

## Communities (84 total, 11 thin omitted)

### Community 0 - "Routine Management Use Cases"
Cohesion: 0.06
Nodes (29): CreateRoutineInput, UpdateProps, UpdateRoutineInput, UpdateOperations, updateRoutineProperties(), CreateRoutine, DeleteRoutine, GetAllRoutines (+21 more)

### Community 1 - "Validation Functions"
Cohesion: 0.06
Nodes (58): EXERCISE_DESCRIPTION_LENGTH, EXERCISE_NAME_LENGTH, EXERCISE_REPS_RANGE, EXERCISE_SETS_RANGE, EXERCISE_WEIGHT_RANGE, ExerciseKeys, ExerciseMinimumProps, exerciseValidators (+50 more)

### Community 2 - "Session Domain & Use Cases"
Cohesion: 0.08
Nodes (24): UpdateProps, UpdateSessionInput, UpdateOperations, updateSessionProperties(), CreateSession, DeleteSession, GetAllSessions, GetSessionById (+16 more)

### Community 3 - "Domain Errors & Routine Entity"
Cohesion: 0.12
Nodes (15): ExerciseOwnershipError, ExerciseProps, CreateUserInput, CreateUser, UserInvalidDataErrorCodes, InvalidUserData, RoleNotFound, UserEmailAlreadyExists (+7 more)

### Community 4 - "UseCase"
Cohesion: 0.18
Nodes (11): CreateExercise, DeleteExercise, GetAllExercises, GetExerciseById, GetExercisesByIds, GetAllUserExercises, UpdateExercise, IExerciseRepository (+3 more)

### Community 5 - "Icon Components"
Cohesion: 0.08
Nodes (29): IconWrapper(), IconBell(), IconBellOff(), IconBellZ(), IconChartLine(), IconChartPie(), IconClipboardList(), IconEdit() (+21 more)

### Community 6 - "containers.ts"
Cohesion: 0.16
Nodes (8): AuthNextAuthRepository, errorHandlersContainer, globalErrorMapper, InfrastructureErrorTranslator, IErrorTranslator, UUIDGenerator, NextAuthErrorHandler, PrismaErrorHandler

### Community 7 - "Exercise Form UI"
Cohesion: 0.15
Nodes (26): CreateExercisePage(), ExerciseDTO, ExerciseDescriptionField(), Props, ExerciseNameField(), Props, ExerciseRepsField(), Props (+18 more)

### Community 8 - "Notification Module"
Cohesion: 0.09
Nodes (16): CreateNotificationInput, NotificationDTO, UpdateNotificationInput, UpdateProps, CreateNotification, GetAllNotifications, GetNotificationById, UpdateNotification (+8 more)

### Community 9 - "Success"
Cohesion: 0.31
Nodes (3): ExercisePrismaRepository, SessionPrismaRepository, Success()

### Community 10 - "atlas-way"
Cohesion: 0.20
Nodes (11): atlas-way, DATABASE_URL, Docker, Docker Compose, docker build, docker compose up --build, docker push, .env file (+3 more)

### Community 11 - "Wizard Context & Providers"
Cohesion: 0.21
Nodes (9): Props, TrainingHeaderSteps(), WizardSummary(), Props, WizardContext, WizardValue, WizardSummaryContext, useStepEngine() (+1 more)

### Community 12 - "login.ts"
Cohesion: 0.13
Nodes (9): GetCurrentSession, Login, Logout, makeAuthModule(), Props, SessionAlreadyActive, SessionNotFoundError, RoleIds (+1 more)

### Community 13 - "Landing Page UI"
Cohesion: 0.08
Nodes (36): dynamic, Home(), authLoginOptionsHandler(), nextAuthLogin(), AUTH_PROVIDER, IconArrowsLeftRight(), Advantages(), AtlasWayCard() (+28 more)

### Community 14 - "Training & Tracking Actions"
Cohesion: 0.13
Nodes (25): canReopenWorkoutTarget(), resolveReopenedWorkoutTargetStatus(), resolveWorkoutTargetFinalStatus(), resolveWorkoutTargetStatusAfterSet(), WorkoutTargetProgressInput, getOwnedWorkout(), getOwnedWorkoutTarget(), OwnedWorkoutResult (+17 more)

### Community 15 - "routine.prisma.repository.ts"
Cohesion: 0.22
Nodes (6): RoutinePrismaRepository, routineIncludeAnatomy, RoutinePrisma, RoutinePrismaCreate, RoutinePrismaUpdate, RoutineMapper

### Community 16 - "Routine Form UI"
Cohesion: 0.10
Nodes (24): CreateRoutinePage(), Props, RoutineActiveField(), Props, RoutineCycleField(), Props, RoutineModalForm(), routineCycleSchema (+16 more)

### Community 17 - "Session Status & Lists UI"
Cohesion: 0.11
Nodes (27): ExerciseRow(), ExerciseRowType, LAST_SESSIONS, LastSessions(), SessionListItem(), SessionListItemType, SessionRestDayType, SessionTrainingDayType (+19 more)

### Community 18 - "Test Mocks & Fixtures"
Cohesion: 0.19
Nodes (16): getRoutineDayNumber(), resolveRoutineSessionForDate(), RoutineLike, RoutinePlanDayLike, toDateOnly(), todayDateOnly(), getTrackingUserId(), Props (+8 more)

### Community 19 - "SortableInputItems.tsx"
Cohesion: 0.28
Nodes (8): IconCirclePlus(), IconTrash(), Props, SortableInputItem(), Props, SortableInputItems(), Props, useSortableInputItems()

### Community 20 - "Toasts & App Layout"
Cohesion: 0.11
Nodes (17): funnelDisplayFont, metadata, outfitFont, RootLayout(), DAYS, DaysType, DayType, DayWeeksType (+9 more)

### Community 21 - "Seed Data & Constants"
Cohesion: 0.13
Nodes (15): BODY_SECTIONS, MUSCLES, MUSCULAR_GROUPS, CYCLE_TYPES, RoutineCycleId, STATUS, WORKOUT_STATUS, WORKOUT_TARGET_STATUS (+7 more)

### Community 22 - "DI Container & Error Translators"
Cohesion: 0.09
Nodes (22): 1. Identity, 2. Token collections, 3. Color, 4. Typography, 5. Spacing, borders, and buttons, 6. Icons, 7. Interaction and data presentation, Atlas Way Design System (+14 more)

### Community 23 - "muscle.prisma.repository.ts"
Cohesion: 0.23
Nodes (3): MusclePrismaRepository, muscleAnatomyInclude, MusclePrisma

### Community 24 - "YearDateSelector.tsx"
Cohesion: 0.29
Nodes (7): ArrowButton(), DateControl(), Props, YearDateSelector(), generateYearOptions(), YearDropdownlist(), DROPDOWN_LIST_YEARS_RANGE

### Community 25 - "useLayer"
Cohesion: 0.27
Nodes (8): ModalLayout(), Modal(), layerStack, Props, registerLayer(), unregisterLayer(), useLayer(), Props

### Community 26 - "useCalendar.ts"
Cohesion: 0.17
Nodes (13): MONTH_DAYS, MONTH_DAYS_LEAP, MONTH_LIMITS, MONTH_NAMES, MonthDisplacement, MonthType, WEEK_DAYS, Calendar() (+5 more)

### Community 27 - "ExerciseTargets.tsx"
Cohesion: 0.07
Nodes (52): ExercisesStatisticsPage(), MusclesStatisticsPage(), StatisticsPage(), RoutinesStatisticsPage(), SessionsStatisticsPage(), TrackingTargetsPage(), TrackingTrainingPage(), Dashboard() (+44 more)

### Community 28 - "Advantages.tsx"
Cohesion: 0.27
Nodes (5): IconBellRinging(), IconDeviceDesktop(), IconDeviceDesktopAnalytics(), IconHammer(), AdvantageItem()

### Community 29 - "src_prisma_client"
Cohesion: 0.12
Nodes (10): MuscleIdName, MusclesFormData, UserDTO, UserPrismaRepository, userIncludeAnatomy, UserPrisma, UserPrismaCreate, UserPrismaUpdate (+2 more)

### Community 30 - "Body Section Cards"
Cohesion: 0.13
Nodes (21): Routine(), getDayAttributes(), RoutineDayItem(), Session(), SessionExercisesList(), Props, SessionExerciseRow(), IconDots() (+13 more)

### Community 31 - "Calendar Date Utilities"
Cohesion: 0.10
Nodes (19): CalendarDayType, getCalendarDay(), getCalendarDays(), getDays(), getDaysDifference(), getMonthDays(), getNextDate(), getOffsetDates() (+11 more)

### Community 32 - "Session Form & Modal"
Cohesion: 0.16
Nodes (17): CreateSessionPage(), dynamic, RoutineDTO, FullRoutineDTO, Props, RoutineNameField(), SessionDTO, Props (+9 more)

### Community 33 - "Sidebar Navigation"
Cohesion: 0.14
Nodes (13): IconCalendarCheck(), IconHome(), IconMan(), IconReportAnalytics(), IconRouteX(), IconSchema(), NavLink(), NavLinkIcon() (+5 more)

### Community 34 - "DateSelector.tsx"
Cohesion: 0.33
Nodes (8): IconArrowUp(), ArrowButton(), DateController(), DateControllerProps, DateSelector(), Breadcrumb(), joinUrlParts(), ListBreadcrumbs()

### Community 35 - "ref_presentation_modules_form_form_types"
Cohesion: 0.17
Nodes (14): ExerciseMusclesField(), Props, IconSearch(), Box(), BoxProps, MultipleSelectBox(), Props, SelectedOption (+6 more)

### Community 36 - "useToast"
Cohesion: 0.33
Nodes (5): useLogin(), ToastContext, ToastContextType, ToastOptions, useToast()

### Community 37 - "Card"
Cohesion: 0.14
Nodes (29): SessionsPage(), Dashboard(), AllSessionsDoneCounter(), BestRecordItem(), BestRecordItemType, BestRecords(), RECORDS, Counter() (+21 more)

### Community 38 - "Exercise"
Cohesion: 0.06
Nodes (25): CreateExerciseInput, UpdateExerciseInput, UpdateProps, updateExercise(), UpdateExerciseKeys, UpdateOperations, createExercise(), createExercise() (+17 more)

### Community 39 - "Workout Form & Wizard"
Cohesion: 0.20
Nodes (13): WorkoutForm, WorkoutSetForm, workoutSetFormSchema, workoutSetSchema, Props, TrainingButtons(), Fallback(), Props (+5 more)

### Community 40 - "Card.tsx"
Cohesion: 0.22
Nodes (8): GoalItem(), GoalItemType, GOALS, PercentageBar(), cardVariant, CardVariantProps, Props, CardHighlightBorder()

### Community 41 - "ref_react_hook_form"
Cohesion: 0.21
Nodes (6): SessionTrainingForm, SessionTrainingSetForm, Props, ModalFormHookProps, useFormHook(), Props

### Community 42 - "Exercise & Session Mappers"
Cohesion: 0.20
Nodes (10): ExerciseMapper, exerciseIncludeAnatomy, ExercisePrisma, ExercisePrismaCreate, ExercisePrismaUpdate, sessionIncludeAnatomy, SessionPrisma, SessionPrismaCreate (+2 more)

### Community 43 - "Form Input Components"
Cohesion: 0.16
Nodes (12): Props, RoutineInitialDateField(), SessionExercises(), ErrorMessage(), Props, InputDate(), multipleSelectedType, Select() (+4 more)

### Community 44 - "prisma/client.ts"
Cohesion: 0.29
Nodes (3): globalForPrisma, globalForPg, pool

### Community 46 - "finishWorkout"
Cohesion: 0.32
Nodes (5): WorkoutStatusId, WorkoutTargetStatusId, resolveWorkoutFinalStatus(), ResolveWorkoutFinalStatusInput, finishWorkout()

### Community 48 - "Error Code Definitions"
Cohesion: 0.15
Nodes (9): AuthErrorCode, ExerciseErrorCode, MuscleErrorCode, NotificationErrorCode, RoutineErrorCode, SessionErrorCode, SessionInvalidDataCodes, UserErrorCode (+1 more)

### Community 49 - "ToggleTheme.tsx"
Cohesion: 0.36
Nodes (4): IconMoon(), IconSun(), Props, THEME

### Community 50 - "User Use Cases"
Cohesion: 0.19
Nodes (10): IAuthRepository, GetAllUsers, GetCurrentUser, GetCurrentUserId, GetUserByEmail, GetUserById, IUserRepository, makeUserModule() (+2 more)

### Community 51 - "Calendar & Day Icons"
Cohesion: 0.15
Nodes (18): DAY_TYPE_REST, DayObjectType, STATUS_DAYS, StatusDayTypes, RestIcon(), TrainingIcon(), TypeDayIcon(), IconAlarm() (+10 more)

### Community 52 - "Safe Code Verification Workflow"
Cohesion: 0.50
Nodes (4): PostgreSQL Service, Prisma ORM, Safe Code Verification Workflow, Verification Commands (typecheck / safe-fixes / test / build)

### Community 53 - "Wizard Step Engine"
Cohesion: 0.19
Nodes (14): Props, StepEngineContext, findNextValidIndex(), stepEngineReducer(), StepEngineAction, StepEngineActionType, JUMP_TO_PHASE, JUMP_TO_STEP (+6 more)

### Community 54 - "Server Actions"
Cohesion: 0.20
Nodes (27): getContainer(), getSession(), logout(), createExerciseAction(), deleteExercise(), getAllUserExercises(), MuscleMapper, getAllMuscles() (+19 more)

### Community 55 - "Routine Plan DnD & Toast Icons"
Cohesion: 0.16
Nodes (9): Props, IconAlertTriangle(), IconGripVertical(), IconInformationCircle(), IconXCircle(), IconXMark(), Props, TOAST_ICONS (+1 more)

### Community 56 - "TooltipBackdrop"
Cohesion: 0.47
Nodes (4): Props, TooltipBackdrop(), ConfirmationTooltip(), Props

### Community 57 - "Layout & Navigation Shell"
Cohesion: 0.12
Nodes (17): RoutineSessionPlanDraggableItem(), Props, RoutineSessionPlanDroppableItem(), Props, RoutineSessionField, RoutineSessionPlanField(), ContainersKey, DroppedItem (+9 more)

### Community 58 - "Global Constants & DB Types"
Cohesion: 0.15
Nodes (14): BODY_SECTIONS, BodySectionsKeys, CalendarDayPositionTimelineType, CalendarDayStatusType, EXERCISES, ExercisesType, ExerciseType, MUSCLES (+6 more)

### Community 59 - "Data Table Components"
Cohesion: 0.18
Nodes (15): BodySections, MuscularGroupsPage(), ExercisesTable(), Props, BodySectionCards(), BodySections, MuscularGroupsTable(), Props (+7 more)

### Community 60 - "Muscle DTOs & Actions"
Cohesion: 0.20
Nodes (13): CanceledIcon(), CompletedIcon(), PendingIcon(), CurrentWeekStatusDays, getCurrentWeekStatusDays(), StatusDay(), StatusDayIcon(), StatusDaySolidIcon() (+5 more)

### Community 61 - "Dropdown List Controls"
Cohesion: 0.39
Nodes (4): DropdownList(), DropdownListProps, DropdownListValueType, DateDropdownlist()

### Community 62 - "Dev Form Components"
Cohesion: 0.22
Nodes (11): StepEngineProvider(), StepFormProvider(), FormKey, Props, SaveStepAction, StepFormSyncProvider(), Props, WizardProvider() (+3 more)

### Community 63 - "landing/components/Header.tsx"
Cohesion: 0.11
Nodes (21): handler, Layout(), LoginInput, LogInButton(), SessionButtons(), Props, UserAvatar(), UserInfo() (+13 more)

### Community 64 - "Calendar Day Components"
Cohesion: 0.35
Nodes (12): getCalendarStatusDay(), getISOStringDate(), getSessionFromDate(), isToday(), CalendarDay(), CalendarDayCanceled(), CalendarDayCompleted(), CalendarDayCurrent() (+4 more)

### Community 66 - "Workout Data Normalizers"
Cohesion: 0.19
Nodes (9): Props, targetSetsMap(), targetStatusMapper(), WorkoutWrapper(), FullWorkoutTargets, NormalizeDataInput, normalizeStepsData(), normalizeSummaryData() (+1 more)

### Community 67 - "Presentation Type Definitions"
Cohesion: 0.13
Nodes (14): ActionResponseType, AnchorElementProps, AtomicElement, ButtonElementProps, ButtonElementPropsWithRef, DivProps, IconProps, IconTypes (+6 more)

### Community 68 - "Form Type Definitions"
Cohesion: 0.13
Nodes (14): ArrayField, ArrayFieldWithLabel, DnDFormFieldItemData, DnDFormFieldItemDraggableData, DnDFormFieldItemDroppableData, HTMLInputProps, IdArrayField, InputDateProps (+6 more)

### Community 72 - "Landing Page Hero & Footer"
Cohesion: 0.24
Nodes (9): Props, WizardOrchestratorInner(), WizardOrchestratorInnerContext, WizardOrchestratorInnerValue, getNextPhaseStepId(), getNextStepId(), GetNextStepIdProps, getPreviousStepId() (+1 more)

### Community 74 - "Muscle Entity"
Cohesion: 0.10
Nodes (13): BodySectionDTO, MuscleDTO, MuscularGroupDTO, GetAllMuscles, GetMuscleById, GetMusclesByIds, Muscle, createMuscle() (+5 more)

### Community 75 - "Update User Use Case"
Cohesion: 0.20
Nodes (8): UpdateProps, UpdateUserInput, UpdateOperations, updateUserProperties(), UpdateUser, UserNotFoundError, UserMethods, UserProps

### Community 77 - "Wizard Domain Types"
Cohesion: 0.20
Nodes (10): FlatStep, FlatStepWithText, NormalizeDomain, Phase, PhaseStatus, PhaseWithText, StepEnginePhaseEntries, StepStatus (+2 more)

### Community 78 - "Button"
Cohesion: 0.10
Nodes (19): nextAuthLogout(), LogOutButton(), useLogout(), routineDayItemClassConfig, IconCog(), IconLanguage(), IconLogout(), IconRocket() (+11 more)

### Community 88 - "Shared Type Definitions"
Cohesion: 0.33
Nodes (5): ClassMethods, Different, EntityMethod, NonEmptyString, ValidationFunction

### Community 90 - "Wizard Summary Types"
Cohesion: 0.50
Nodes (3): PhaseSummary, StepSummary, WizardSummary

## Knowledge Gaps
- **13 isolated node(s):** `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP`, `JUMP_TO_PHASE`, `RESET_ENGINE` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 425 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button()` connect `Button` to `Calendar Day Components`, `Session Form & Modal`, `ref_presentation_modules_form_form_types`, `useToast`, `Workout Form & Wizard`, `Data Table Components`, `ref_react_hook_form`, `Landing Page UI`, `Routine Form UI`, `Session Status & Lists UI`, `Test Mocks & Fixtures`, `SortableInputItems.tsx`, `ToggleTheme.tsx`, `Routine Plan DnD & Toast Icons`, `TooltipBackdrop`, `Layout & Navigation Shell`, `ExerciseTargets.tsx`, `landing/components/Header.tsx`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Routine Management Use Cases` be split into smaller, more focused modules?**
  _Cohesion score 0.06493506493506493 - nodes in this community are weakly interconnected._
- **Why does `IconWrapper()` connect `Icon Components` to `Sidebar Navigation`, `DateSelector.tsx`, `ref_presentation_modules_form_form_types`, `Card`, `Landing Page UI`, `Muscle DTOs & Actions`, `Button`, `Session Status & Lists UI`, `ToggleTheme.tsx`, `Calendar & Day Icons`, `SortableInputItems.tsx`, `Routine Plan DnD & Toast Icons`, `ExerciseTargets.tsx`, `Advantages.tsx`, `Body Section Cards`, `landing/components/Header.tsx`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Should `Validation Functions` be split into smaller, more focused modules?**
  _Cohesion score 0.05925925925925926 - nodes in this community are weakly interconnected._
- **Why does `DomainError` connect `Domain Errors & Routine Entity` to `Routine Management Use Cases`, `Validation Functions`, `Session Domain & Use Cases`, `UseCase`, `Exercise`, `containers.ts`, `Notification Module`, `Success`, `Update User Use Case`, `login.ts`, `User Use Cases`, `result.ts`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Should `Session Domain & Use Cases` be split into smaller, more focused modules?**
  _Cohesion score 0.0807909604519774 - nodes in this community are weakly interconnected._
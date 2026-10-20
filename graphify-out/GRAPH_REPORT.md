# Graph Report - atlas-way  (2026-10-19)

## Corpus Check
- Large corpus: 583 files · ~79,063 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 1972 nodes · 6644 edges · 73 communities (65 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 105 edges (avg confidence: 0.85)
- Token cost: 4,200 input · 1,900 output

## Community Hubs (Navigation)
- Exercises & Routines Pages
- Muscle Domain & Seeding
- Icon System Components
- Landing Page & Auth Wiring
- Domain Validation Utilities
- Result Pattern & Domain Errors
- Notification Module
- User Domain & Use Cases
- Exercise Use Cases & Repositories
- Dashboard Cards & Page
- Calendar Date Utilities
- Form Controls & Sortable Inputs
- Session Domain & Use Cases
- Exercise Domain & Updates
- Routine & Session Cards
- Shared Results & Test Suites
- Module Action Layer & DI
- Toast Notifications & Layout
- Tooltips & Navigation Layers
- Workout Tracking Actions
- User Entity & Persistence
- Landing Page Bento Sections
- Exercise & Routine Persistence Mappers
- Exercise Modal Form
- Routine Modal Form
- Today's Activity & Session Details
- Session Form Hooks
- Project Docs & Design Guide
- Session History & Calendar Controls
- Session Persistence Layer
- ID Generation & Error Translation
- UI Component Tests
- Form Inputs & Error Messages
- Workout Wizard Steps
- Routine Session Plan Drag & Drop
- Workout Tracking Use Cases
- Week Status Dashboard
- Tracking Dashboard & Stats
- Routine Domain & Container
- Routine Persistence Layer
- Wizard Step Engine
- Routine Entity & Validation
- Domain Error Codes
- Wizard Summary & Toast Hooks
- Exercise Type Icons & Home Calendar
- Date Dropdown Lists
- Wizard Providers & Form Sync
- Text Fields & Descriptions
- Routine Deletion & Errors
- Workout Wizard Normalizers
- Sidebar Navigation
- Presentation Type Definitions
- Form Type Definitions
- NextAuth Session Integration
- Seed Data Constants
- Wizard Type Definitions
- Routine Plan Creation
- Landing Page Advantages
- Routine & Session DTOs
- Routine Update Use Case
- Wizard Orchestration
- Theme Toggle
- Workout Status Rules
- Workout Completion Actions
- Shared Type Utilities
- Person Example Class
- Wizard Summary Types
- Status Code Types
- Training Status Types
- Global CSS Types

## God Nodes (most connected - your core abstractions)
1. `Failure()` - 125 edges
2. `IconWrapper()` - 123 edges
3. `Success()` - 96 edges
4. `DomainError` - 81 edges
5. `UseCase` - 73 edges
6. `Button()` - 53 edges
7. `Exercise` - 52 edges
8. `Card()` - 51 edges
9. `Result` - 47 edges
10. `CardTitle()` - 45 edges

## Surprising Connections (you probably didn't know these)
- `Safe Code Verification Workflow` --conceptually_related_to--> `atlas-way`  [INFERRED]
  .github/workflows/safe_code.yml → README.md
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
- **Atlas Way Tech Stack** — readme_atlas_way, readme_next_js, readme_prisma_orm, readme_postgresql, readme_docker [EXTRACTED 1.00]
- **Design System Foundations** — design_atlas_way_design_system, design_brand_identity, design_token_collections, design_typography_system, design_lucide_icons [EXTRACTED 1.00]
- **CI Verification Flow** — _github_workflows_safe_code_safe_code_verification, _github_workflows_safe_code_postgres_service, _github_workflows_safe_code_prisma_migrate_deploy, readme_prisma_orm [EXTRACTED 1.00]

## Communities (73 total, 8 thin omitted)

### Community 0 - "Exercises & Routines Pages"
Cohesion: 0.05
Nodes (67): ExercisesStatisticsPage(), MusclesStatisticsPage(), StatisticsPage(), RoutinesStatisticsPage(), SessionsStatisticsPage(), TrackingTargetsPage(), TrackingTrainingPage(), BodySections (+59 more)

### Community 1 - "Muscle Domain & Seeding"
Cohesion: 0.05
Nodes (28): BodySectionDTO, MuscleDTO, MuscularGroupDTO, GetAllMuscles, GetMuscleById, GetMusclesByIds, Muscle, createMuscle() (+20 more)

### Community 2 - "Icon System Components"
Cohesion: 0.07
Nodes (32): IconWrapper(), IconBellOff(), IconBellZ(), IconCalendarWeek(), IconChartLine(), IconChartPie(), IconClipboardList(), IconEdit() (+24 more)

### Community 3 - "Landing Page & Auth Wiring"
Cohesion: 0.07
Nodes (40): Layout(), dynamic, Home(), authLoginOptionsHandler(), nextAuthLogin(), nextAuthLogout(), AUTH_PROVIDER, LogInButton() (+32 more)

### Community 4 - "Domain Validation Utilities"
Cohesion: 0.07
Nodes (50): EXERCISE_DESCRIPTION_LENGTH, EXERCISE_NAME_LENGTH, EXERCISE_REPS_RANGE, EXERCISE_SETS_RANGE, EXERCISE_WEIGHT_RANGE, isValidExerciseDescription(), isValidExerciseName(), isValidExerciseReps() (+42 more)

### Community 5 - "Result Pattern & Domain Errors"
Cohesion: 0.10
Nodes (14): NotificationPrismaRepository, InvalidSessionData, validateSession(), UserInvalidDataErrorCodes, InvalidUserData, RoleNotFound, UserEmailAlreadyExists, UserNotFoundError (+6 more)

### Community 6 - "Notification Module"
Cohesion: 0.08
Nodes (19): CreateExerciseInput, CreateNotificationInput, NotificationDTO, UpdateNotificationInput, UpdateProps, CreateNotification, GetAllNotifications, GetNotificationById (+11 more)

### Community 7 - "User Domain & Use Cases"
Cohesion: 0.11
Nodes (22): GetCurrentSession, Login, Logout, makeAuthModule(), Props, IAuthRepository, SessionAlreadyActive, SessionNotFoundError (+14 more)

### Community 8 - "Exercise Use Cases & Repositories"
Cohesion: 0.08
Nodes (21): CreateExercise, DeleteExercise, GetAllExercises, GetExerciseById, GetExercisesByIds, GetAllUserExercises, UpdateExercise, ExerciseInvalidDataErrorCodes (+13 more)

### Community 9 - "Dashboard Cards & Page"
Cohesion: 0.13
Nodes (30): Dashboard(), BodySectionCards(), BodySections, BestRecordItem(), BestRecordItemType, BestRecords(), RECORDS, NextSession() (+22 more)

### Community 10 - "Calendar Date Utilities"
Cohesion: 0.07
Nodes (37): MONTH_DAYS, MONTH_DAYS_LEAP, MONTH_LIMITS, MonthDisplacement, MonthType, WEEK_DAYS, CalendarDayType, getCalendarDay() (+29 more)

### Community 11 - "Form Controls & Sortable Inputs"
Cohesion: 0.10
Nodes (25): DraggableBadge(), Props, IconCirclePlus(), IconGripVertical(), IconSearch(), IconTrash(), IconXMark(), iconVariant (+17 more)

### Community 12 - "Session Domain & Use Cases"
Cohesion: 0.11
Nodes (19): UpdateProps, UpdateSessionInput, UpdateOperations, updateSessionProperties(), CreateSession, DeleteSession, GetAllSessions, GetSessionById (+11 more)

### Community 13 - "Exercise Domain & Updates"
Cohesion: 0.09
Nodes (17): UpdateExerciseInput, UpdateProps, updateExercise(), UpdateExerciseKeys, UpdateOperations, createExercise(), createExercise(), Exercise (+9 more)

### Community 14 - "Routine & Session Cards"
Cohesion: 0.10
Nodes (26): Routine(), DAY_TYPE_REST, DayObjectType, getDayAttributes(), RoutineDayItem(), STATUS_DAYS, StatusDayTypes, routineDayItemClassConfig (+18 more)

### Community 16 - "Module Action Layer & DI"
Cohesion: 0.17
Nodes (27): getContainer(), AuthNextAuthRepository, getSession(), logout(), createExerciseAction(), deleteExercise(), getAllUserExercises(), makeMuscleModule() (+19 more)

### Community 17 - "Toast Notifications & Layout"
Cohesion: 0.08
Nodes (23): funnelDisplayFont, metadata, outfitFont, RootLayout(), IconAlertTriangle(), IconInformationCircle(), IconXCircle(), DAYS (+15 more)

### Community 18 - "Tooltips & Navigation Layers"
Cohesion: 0.10
Nodes (23): ModalLayout(), IconCog(), IconLanguage(), IconLogout(), Modal(), Props, TooltipBackdrop(), layerStack (+15 more)

### Community 19 - "Workout Tracking Actions"
Cohesion: 0.12
Nodes (23): canReopenWorkoutTarget(), resolveReopenedWorkoutTargetStatus(), resolveWorkoutTargetFinalStatus(), resolveWorkoutTargetStatusAfterSet(), WorkoutTargetProgressInput, getOwnedWorkoutTarget(), OwnedWorkoutResult, OwnedWorkoutTargetResult (+15 more)

### Community 20 - "User Entity & Persistence"
Cohesion: 0.11
Nodes (14): UpdateProps, UpdateUserInput, UserDTO, UpdateOperations, RoleIds, ROLES, User, UserFactoryData (+6 more)

### Community 21 - "Landing Page Bento Sections"
Cohesion: 0.13
Nodes (24): IconArrowsLeftRight(), AtlasWayCard(), Props, BentoCard(), Props, BentoGrid(), CarruselIcons(), Props (+16 more)

### Community 22 - "Exercise & Routine Persistence Mappers"
Cohesion: 0.13
Nodes (9): ExerciseProps, ExerciseMapper, ExercisePrismaRepository, exerciseIncludeAnatomy, ExercisePrisma, ExercisePrismaCreate, ExercisePrismaUpdate, MusclePrismaRepository (+1 more)

### Community 23 - "Exercise Modal Form"
Cohesion: 0.15
Nodes (21): CreateExercisePage(), ExerciseDTO, ExerciseMusclesField(), Props, ExerciseNameField(), Props, ExerciseRepsField(), Props (+13 more)

### Community 24 - "Routine Modal Form"
Cohesion: 0.12
Nodes (21): CreateRoutinePage(), Props, RoutineActiveField(), Props, RoutineCycleField(), Props, RoutineDayField(), Props (+13 more)

### Community 25 - "Today's Activity & Session Details"
Cohesion: 0.13
Nodes (21): ExerciseRow(), ExerciseRowType, LAST_SESSIONS, SessionListItem(), SessionListItemType, SessionRestDayType, SessionTrainingDayType, exerciseType (+13 more)

### Community 26 - "Session Form Hooks"
Cohesion: 0.13
Nodes (16): CreateSessionPage(), dynamic, SessionExercises(), Props, SessionName(), SessionModalForm(), SessionForm, sessionFormSchema (+8 more)

### Community 27 - "Project Docs & Design Guide"
Cohesion: 0.10
Nodes (26): CI PostgreSQL Service, Prisma Migrate Deploy Step, Safe Code Verification Workflow, Atlas Way Design System, Button Dimensions, Brand and Alias Color Ramps, Dark and Light Color Collections, Figma Source of Truth (+18 more)

### Community 28 - "Session History & Calendar Controls"
Cohesion: 0.17
Nodes (18): LastSessions(), session, SessionsHistory(), IconCalendarClock(), ArrowButton(), Calendar(), CalendarProvider(), DateControl() (+10 more)

### Community 29 - "Session Persistence Layer"
Cohesion: 0.14
Nodes (7): Session, SessionPrismaRepository, sessionIncludeAnatomy, SessionPrisma, SessionPrismaCreate, SessionPrismaUpdate, SessionMapper

### Community 30 - "ID Generation & Error Translation"
Cohesion: 0.12
Nodes (8): IdGeneratorRepository, errorHandlersContainer, globalErrorMapper, InfrastructureErrorTranslator, IErrorTranslator, UUIDGenerator, NextAuthErrorHandler, PrismaErrorHandler

### Community 31 - "UI Component Tests"
Cohesion: 0.15
Nodes (7): IconRocket(), Radiobutton(), RadiobuttonMark(), RadiobuttonProps, RadiobuttonGroup(), RadiobuttonsProps, SelectBoxOption()

### Community 32 - "Form Inputs & Error Messages"
Cohesion: 0.15
Nodes (12): Props, RoutineInitialDateField(), Props, ErrorMessage(), Props, InputDate(), multipleSelectedType, Select() (+4 more)

### Community 33 - "Workout Wizard Steps"
Cohesion: 0.16
Nodes (18): WorkoutForm, WorkoutSetForm, workoutSetFormSchema, workoutSetSchema, Props, Workout(), Props, TrainingButtons() (+10 more)

### Community 34 - "Routine Session Plan Drag & Drop"
Cohesion: 0.15
Nodes (14): RoutineSessionPlanDraggableItem(), Props, RoutineSessionPlanDroppableItem(), Props, RoutineSessionField, RoutineSessionPlanField(), ContainersKey, DroppedItem (+6 more)

### Community 35 - "Workout Tracking Use Cases"
Cohesion: 0.19
Nodes (16): getRoutineDayNumber(), resolveRoutineSessionForDate(), RoutineLike, RoutinePlanDayLike, toDateOnly(), todayDateOnly(), getTrackingUserId(), Props (+8 more)

### Community 36 - "Week Status Dashboard"
Cohesion: 0.19
Nodes (16): CanceledIcon(), CompletedIcon(), PendingIcon(), CurrentWeekStatus(), CurrentWeekStatusDays, getCurrentWeekStatusDays(), StatusDay(), StatusDayIcon() (+8 more)

### Community 37 - "Tracking Dashboard & Stats"
Cohesion: 0.20
Nodes (11): SessionsPage(), AllSessionsDoneCounter(), Counter(), CurrentGoals(), GoalItem(), GoalItemType, GOALS, PercentageBar() (+3 more)

### Community 38 - "Routine Domain & Container"
Cohesion: 0.19
Nodes (9): CreateRoutine, DeleteRoutine, GetAllRoutines, GetRoutineById, UpdateRoutine, IRoutineRepository, RoutineProps, makeRoutineModule() (+1 more)

### Community 39 - "Routine Persistence Layer"
Cohesion: 0.15
Nodes (6): Routine, routineIncludeAnatomy, RoutinePrisma, RoutinePrismaCreate, RoutinePrismaUpdate, RoutineMapper

### Community 40 - "Wizard Step Engine"
Cohesion: 0.18
Nodes (14): Props, StepEngineContext, findNextValidIndex(), stepEngineReducer(), StepEngineAction, StepEngineActionType, JUMP_TO_PHASE, JUMP_TO_STEP (+6 more)

### Community 41 - "Routine Entity & Validation"
Cohesion: 0.15
Nodes (14): CYCLE_TYPES, RoutineCycleId, createTestRoutine(), RoutineFactoryData, RoutineMiminumProps, RoutineValidationKeys, routineValidators, isValidRoutineDescription() (+6 more)

### Community 42 - "Domain Error Codes"
Cohesion: 0.15
Nodes (9): AuthErrorCode, ExerciseErrorCode, MuscleErrorCode, NotificationErrorCode, SessionErrorCode, SessionInvalidDataCodes, UserErrorCode, DomainErrorCode (+1 more)

### Community 43 - "Wizard Summary & Toast Hooks"
Cohesion: 0.20
Nodes (8): ToastContext, ToastContextType, ToastOptions, Props, WizardContext, WizardValue, WizardSummaryContext, Wizard

### Community 44 - "Exercise Type Icons & Home Calendar"
Cohesion: 0.26
Nodes (11): RestIcon(), TrainingIcon(), TypeDayIcon(), IconAlarm(), IconBarbell(), IconBarbellOff(), IconCircleCheck(), Calendar() (+3 more)

### Community 45 - "Date Dropdown Lists"
Cohesion: 0.19
Nodes (9): DropdownList(), DropdownListProps, DropdownListValueType, MONTH_NAMES, DateDropdownlist(), MonthDropdownlist(), generateYearOptions(), YearDropdownlist() (+1 more)

### Community 46 - "Wizard Providers & Form Sync"
Cohesion: 0.20
Nodes (13): StepEngineProvider(), StepFormProvider(), FormKey, Props, SaveStepAction, StepFormSyncProvider(), Props, WizardProvider() (+5 more)

### Community 47 - "Text Fields & Descriptions"
Cohesion: 0.31
Nodes (9): ExerciseDescriptionField(), Props, Props, RoutineDescriptionField(), Props, SessionDescription(), inputDescriptionConfig, Label() (+1 more)

### Community 48 - "Routine Deletion & Errors"
Cohesion: 0.17
Nodes (6): RoutineErrorCode, RoutineInvalidDataErrorCodes, InvalidRoutineDays, RoutineCycleNotFound, RoutineNotFoundError, RoutineOwnershipError

### Community 49 - "Workout Wizard Normalizers"
Cohesion: 0.19
Nodes (9): Props, targetSetsMap(), targetStatusMapper(), WorkoutWrapper(), FullWorkoutTargets, NormalizeDataInput, normalizeStepsData(), normalizeSummaryData() (+1 more)

### Community 50 - "Sidebar Navigation"
Cohesion: 0.20
Nodes (7): IconBell(), IconCalendarCheck(), IconMan(), IconSchema(), NavLinkIcon(), NavLinks(), SidebarSection()

### Community 51 - "Presentation Type Definitions"
Cohesion: 0.13
Nodes (14): ActionResponseType, AnchorElementProps, AtomicElement, ButtonElementProps, ButtonElementPropsWithRef, DivProps, IconProps, IconTypes (+6 more)

### Community 52 - "Form Type Definitions"
Cohesion: 0.13
Nodes (14): ArrayField, ArrayFieldWithLabel, DnDFormFieldItemData, DnDFormFieldItemDraggableData, DnDFormFieldItemDroppableData, HTMLInputProps, IdArrayField, InputDateProps (+6 more)

### Community 53 - "NextAuth Session Integration"
Cohesion: 0.20
Nodes (6): handler, config, LoginInput, AuthSession, AuthMapper, authOptions

### Community 54 - "Seed Data Constants"
Cohesion: 0.15
Nodes (12): BODY_SECTIONS, BodySectionsKeys, CalendarDayPositionTimelineType, CalendarDayStatusType, EXERCISES, ExercisesType, ExerciseType, MUSCLES (+4 more)

### Community 55 - "Wizard Type Definitions"
Cohesion: 0.20
Nodes (10): FlatStep, FlatStepWithText, NormalizeDomain, Phase, PhaseStatus, PhaseWithText, StepEnginePhaseEntries, StepStatus (+2 more)

### Community 56 - "Routine Plan Creation"
Cohesion: 0.40
Nodes (4): CreateRoutineInput, InvalidRoutineData, RoutinePlanDayFactory, RoutinePlanValidationService

### Community 57 - "Landing Page Advantages"
Cohesion: 0.27
Nodes (5): IconBellRinging(), IconDeviceDesktop(), IconDeviceDesktopAnalytics(), IconHammer(), AdvantageItem()

### Community 58 - "Routine & Session DTOs"
Cohesion: 0.38
Nodes (6): RoutineDTO, FullRoutineDTO, Props, RoutineNameField(), SessionDTO, InputText()

### Community 59 - "Routine Update Use Case"
Cohesion: 0.36
Nodes (6): UpdateProps, UpdateRoutineInput, UpdateOperations, updateRoutineProperties(), RoutineMethods, RoutinePlanDay

### Community 60 - "Wizard Orchestration"
Cohesion: 0.33
Nodes (7): Props, WizardOrchestratorInner(), WizardOrchestratorInnerContext, WizardOrchestratorInnerValue, getNextStepId(), GetNextStepIdProps, getPreviousStepId()

### Community 61 - "Theme Toggle"
Cohesion: 0.36
Nodes (4): IconMoon(), IconSun(), Props, THEME

### Community 62 - "Workout Status Rules"
Cohesion: 0.38
Nodes (4): WorkoutStatusId, WorkoutTargetStatusId, resolveWorkoutFinalStatus(), ResolveWorkoutFinalStatusInput

### Community 63 - "Workout Completion Actions"
Cohesion: 0.48
Nodes (7): getOwnedWorkout(), finishWorkout(), setWorkoutInProgress(), getWorkoutSetsByWorkoutId(), createWorkoutTargets(), getWorkoutTargetsByWorkoutId(), ActionSuccess()

### Community 64 - "Shared Type Utilities"
Cohesion: 0.33
Nodes (5): ClassMethods, Different, EntityMethod, NonEmptyString, ValidationFunction

### Community 66 - "Wizard Summary Types"
Cohesion: 0.50
Nodes (3): PhaseSummary, StepSummary, WizardSummary

## Knowledge Gaps
- **14 isolated node(s):** `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP`, `JUMP_TO_PHASE`, `RESET_ENGINE` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 410 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button()` connect `Form Controls & Sortable Inputs` to `Exercises & Routines Pages`, `Workout Wizard Steps`, `Routine Session Plan Drag & Drop`, `Landing Page & Auth Wiring`, `Workout Tracking Use Cases`, `Calendar Date Utilities`, `Tooltips & Navigation Layers`, `Routine Modal Form`, `Today's Activity & Session Details`, `Session Form Hooks`, `Theme Toggle`, `UI Component Tests`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Exercises & Routines Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.05237698081734779 - nodes in this community are weakly interconnected._
- **Why does `IconWrapper()` connect `Icon System Components` to `Exercises & Routines Pages`, `Landing Page & Auth Wiring`, `Week Status Dashboard`, `Dashboard Cards & Page`, `Form Controls & Sortable Inputs`, `Exercise Type Icons & Home Calendar`, `Routine & Session Cards`, `Toast Notifications & Layout`, `Sidebar Navigation`, `Tooltips & Navigation Layers`, `Landing Page Bento Sections`, `Landing Page Advantages`, `Session History & Calendar Controls`, `Theme Toggle`, `UI Component Tests`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Should `Muscle Domain & Seeding` be split into smaller, more focused modules?**
  _Cohesion score 0.05289193302891933 - nodes in this community are weakly interconnected._
- **Why does `Failure()` connect `Result Pattern & Domain Errors` to `Muscle Domain & Seeding`, `Landing Page & Auth Wiring`, `Domain Validation Utilities`, `Notification Module`, `User Domain & Use Cases`, `Exercise Use Cases & Repositories`, `Routine Entity & Validation`, `Routine Persistence Layer`, `Session Domain & Use Cases`, `Exercise Domain & Updates`, `Shared Results & Test Suites`, `Routine Deletion & Errors`, `User Entity & Persistence`, `Exercise & Routine Persistence Mappers`, `Routine Plan Creation`, `Routine Update Use Case`, `Session Persistence Layer`, `ID Generation & Error Translation`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Should `Icon System Components` be split into smaller, more focused modules?**
  _Cohesion score 0.0733162830349531 - nodes in this community are weakly interconnected._
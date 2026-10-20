# Graph Report - atlas-way  (2026-10-17)

## Corpus Check
- Large corpus: 646 files · ~102,538 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 2283 nodes · 7239 edges · 101 communities (89 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 151 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Routine Management Use Cases
- Validation Functions
- Session Domain & Use Cases
- Domain Errors & Routine Entity
- Exercise & Muscle Use Cases
- Icon Components
- Exercise Validation & Update
- Exercise Form UI
- Notification Module
- Prisma Repositories
- Project Docs & Stack Overview
- Wizard Context & Providers
- Auth Use Cases & Session
- Landing Page UI
- Training & Tracking Actions
- Calendar Day Types
- Routine Form UI
- Session Status & Lists UI
- Test Mocks & Fixtures
- Biome Lint Config
- Toasts & App Layout
- Seed Data & Constants
- DI Container & Error Translators
- Package Manifest (Metadata)
- Pages & Empty States
- Modal, Tooltip & Header Nav
- Calendar Date Picker Controls
- Statistics Pages & Container
- User Entity & Error Codes
- User Repository & DTOs
- Body Section Cards
- Calendar Date Utilities
- Session Form & Modal
- Sidebar Navigation
- Dev Dependencies
- Buttons & Sortable Inputs
- Tracking Dashboard Widgets
- Dashboard Home Widgets
- Exercise Entity & Repository
- Workout Form & Wizard
- Card Components (Dev)
- Login/Logout & Toast Hooks
- Exercise & Session Mappers
- Form Input Components
- TypeScript Config
- Runtime Dependencies
- Select Box Components
- Radiobutton Controls
- Error Code Definitions
- Workout Targets Form
- User Use Cases
- Calendar & Day Icons
- Docs Concepts & PR Templates
- Wizard Step Engine
- Server Actions
- Routine Plan DnD & Toast Icons
- Animated Icon Components
- Layout & Navigation Shell
- Global Constants & DB Types
- Data Table Components
- Muscle DTOs & Actions
- Dropdown List Controls
- Dev Form Components
- User Session Buttons
- Calendar Day Components
- Session Dashboard (Dark Theme)
- Workout Data Normalizers
- Presentation Type Definitions
- Form Type Definitions
- OpenCode Agent Roles
- Session Dashboard (Light Theme)
- Routine Day Status UI
- Landing Page Hero & Footer
- Routine Dashboard (Dark Theme)
- Muscle Entity
- Update User Use Case
- Routine Dashboard (Light Theme)
- Wizard Domain Types
- Dev Layout & Theme Toggle
- Button Components
- Session Details UI
- Advantages & Feature Icons
- Statistics Charts
- Routine & Session DTOs
- Package Scripts
- InMemory User Repository
- Middleware & NextAuth Options
- Best Records UI
- Shared Type Definitions
- Jest Config
- Wizard Summary Types
- Prisma Config
- PostCSS Config
- Status Code Types
- Tracking Domain Types
- Grid Background Asset
- Noise Texture Asset
- Status Indicator Concept

## God Nodes (most connected - your core abstractions)
1. `Success()` - 131 edges
2. `Failure()` - 129 edges
3. `IconWrapper()` - 123 edges
4. `DomainError` - 81 edges
5. `UseCase` - 73 edges
6. `Exercise` - 62 edges
7. `Button()` - 59 edges
8. `Card()` - 59 edges
9. `react` - 55 edges
10. `CardTitle()` - 53 edges

## Surprising Connections (you probably didn't know these)
- `graphify` --semantically_similar_to--> `graphify`  [INFERRED] [semantically similar]
  .claude/CLAUDE.md → CLAUDE.md
- `Test: UI Components Issue Template` --semantically_similar_to--> `Test: Form Integration (Server Actions) Issue Template`  [INFERRED] [semantically similar]
  .github/ISSUE_TEMPLATE/ui-components.yml → .github/ISSUE_TEMPLATE/form-components.yml
- `ModalExerciseForm()` --indirect_call--> `createExerciseAction()`  [INFERRED]
  src/modules/exercise/presentation/ui/components/ModalExerciseForm.tsx → src/modules/exercise/presentation/exercise.actions.ts
- `RoutineModalForm()` --indirect_call--> `createRoutineAction()`  [INFERRED]
  src/modules/routine/presentation/ui/components/RoutineModalForm.tsx → src/modules/routine/presentation/routine.actions.ts
- `SessionModalForm()` --indirect_call--> `createSessionAction()`  [INFERRED]
  src/modules/session/presentation/ui/components/SessionModalForm.tsx → src/modules/session/presentation/session.actions.ts

## Import Cycles
- 4-file cycle: `src/di/containers.ts -> src/modules/auth/infrastructure/next-auth/auth.next-auth.repository.ts -> src/shared/infrastructure/next-auth/next-auth.currentsession.ts -> src/shared/infrastructure/next-auth/next-auth.options.ts -> src/di/containers.ts`

## Hyperedges (group relationships)
- **Layered PR Review Template Set** — _github_pull_request_template_domain_logic_md_domain_logic_pr_checklist, _github_pull_request_template_infrastructure_md_infrastructure_pr_checklist, _github_pull_request_template_presentation_md_presentation_pr_checklist [INFERRED 0.85]
- **Layered Test Issue Template Set** — _github_issue_template_form_components_yml_form_integration_test, _github_issue_template_ui_components_yml_ui_components_test, _github_issue_template_use_case_yml_use_case_test [INFERRED 0.85]
- **Safe Code Verification CI Pipeline** — _github_workflows_safe_code_yml_safe_code_verification, _github_workflows_safe_code_yml_prisma, _github_workflows_safe_code_yml_postgresql, _github_workflows_safe_code_yml_verification_commands [INFERRED 0.85]
- **Code Quality Assurance Pod** — _opencode_agents_code_quality_reviewer_md_code_quality_reviewer, _opencode_agents_test_engineering_specialist_md_test_engineering_specialist, _opencode_agents_security_vulnerability_auditor_md_security_vulnerability_auditor [INFERRED 0.85]
- **Performance and Infrastructure Pod** — _opencode_agents_performance_optimization_engineer_md_performance_optimization_engineer, _opencode_agents_database_optimization_expert_md_database_optimization_expert, _opencode_agents_site_reliability_engineer_md_site_reliability_engineer, _opencode_agents_devops_infrastructure_architect_md_devops_infrastructure_architect [INFERRED 0.75]
- **Frontend UX Delivery Pod** — _opencode_agents_frontend_engineer_agent_md_frontend_engineer_agent, _opencode_agents_ui_ux_design_expert_md_ui_ux_design_expert, _opencode_agents_performance_optimization_engineer_md_performance_optimization_engineer [INFERRED 0.75]
- **Atlas Way Tech Stack** — agents_next_js, agents_prisma, agents_postgresql, agents_nextauth, agents_zustand, agents_zod, agents_tailwind_css [EXTRACTED 1.00]
- **PostgreSQL Database Setup** — compose_db_service, compose_postgres_image, readme_postgresql, readme_database_url [INFERRED 0.85]
- **graphify Knowledge Graph Workflow** — agents_graphify, claude_graphify, _claude_claude_graphify, claude_knowledge_graph [INFERRED 0.85]

## Communities (101 total, 12 thin omitted)

### Community 0 - "Routine Management Use Cases"
Cohesion: 0.08
Nodes (32): CreateRoutineInput, UpdateProps, UpdateRoutineInput, UpdateOperations, updateRoutineProperties(), CreateRoutine, DeleteRoutine, GetAllRoutines (+24 more)

### Community 1 - "Validation Functions"
Cohesion: 0.06
Nodes (49): EXERCISE_DESCRIPTION_LENGTH, EXERCISE_NAME_LENGTH, EXERCISE_REPS_RANGE, EXERCISE_SETS_RANGE, EXERCISE_WEIGHT_RANGE, isValidExerciseDescription(), isValidExerciseName(), isValidExerciseReps() (+41 more)

### Community 2 - "Session Domain & Use Cases"
Cohesion: 0.07
Nodes (26): UpdateProps, UpdateSessionInput, UpdateOperations, updateSessionProperties(), CreateSession, DeleteSession, GetAllSessions, GetSessionById (+18 more)

### Community 3 - "Domain Errors & Routine Entity"
Cohesion: 0.08
Nodes (10): InvalidMuscleData, MuscleNotFoundError, InvalidRoutineDays, RoutineCycleNotFound, Routine, createTestRoutine(), InMemoryRoutineRepository, DomainError (+2 more)

### Community 4 - "Exercise & Muscle Use Cases"
Cohesion: 0.11
Nodes (20): CreateExerciseInput, CreateExercise, DeleteExercise, GetAllExercises, GetExerciseById, GetExercisesByIds, GetAllUserExercises, UpdateExercise (+12 more)

### Community 5 - "Icon Components"
Cohesion: 0.10
Nodes (22): IconWrapper(), IconBellOff(), IconBellZ(), IconChartLine(), IconChartPie(), IconClipboardList(), IconFaceHappy(), IconFlame() (+14 more)

### Community 6 - "Exercise Validation & Update"
Cohesion: 0.09
Nodes (28): UpdateExerciseInput, UpdateProps, updateExercise(), UpdateExerciseKeys, UpdateOperations, createExercise(), createExercise(), ExerciseNotFoundError (+20 more)

### Community 7 - "Exercise Form UI"
Cohesion: 0.12
Nodes (33): react-hook-form, CreateExercisePage(), ExerciseDTO, ExerciseDescriptionField(), Props, ExerciseMusclesField(), Props, ExerciseNameField() (+25 more)

### Community 8 - "Notification Module"
Cohesion: 0.09
Nodes (15): CreateNotificationInput, NotificationDTO, UpdateNotificationInput, UpdateProps, CreateNotification, GetAllNotifications, GetNotificationById, UpdateNotification (+7 more)

### Community 9 - "Prisma Repositories"
Cohesion: 0.11
Nodes (9): ExercisePrismaRepository, MusclePrismaRepository, NotificationPrismaRepository, RoutinePrismaRepository, RoutinePrismaCreate, RoutinePrismaUpdate, RoutineMapper, SessionPrismaRepository (+1 more)

### Community 10 - "Project Docs & Stack Overview"
Cohesion: 0.06
Nodes (40): graphify, Atlas Way, Biome, Docker Compose, DomainError, graphify, Module Structure, Next.js (+32 more)

### Community 11 - "Wizard Context & Providers"
Cohesion: 0.09
Nodes (26): @hookform/resolvers, StepEngineProvider(), Props, StepFormProvider(), FormKey, Props, SaveStepAction, StepFormSyncProvider() (+18 more)

### Community 12 - "Auth Use Cases & Session"
Cohesion: 0.11
Nodes (13): LoginInput, GetCurrentSession, Login, Logout, makeAuthModule(), Props, IAuthRepository, AuthSession (+5 more)

### Community 13 - "Landing Page UI"
Cohesion: 0.12
Nodes (25): IconArrowsLeftRight(), IconRocket(), AtlasWayCard(), Props, BentoCard(), Props, BentoGrid(), CarruselIcons() (+17 more)

### Community 14 - "Training & Tracking Actions"
Cohesion: 0.17
Nodes (26): TrackingTrainingPage(), getSession(), logout(), createWorkout(), finishWorkout(), getTodaysWorkout(), getWorkoutById(), setWorkoutInProgress() (+18 more)

### Community 15 - "Calendar Day Types"
Cohesion: 0.07
Nodes (34): DayWeeksType, minorValue(), DayType, DayTypeProps, RestStatusType, ROUTINES, RoutineType, ExerciseType (+26 more)

### Community 16 - "Routine Form UI"
Cohesion: 0.11
Nodes (26): CreateRoutinePage(), Props, RoutineActiveField(), Props, RoutineCycleField(), RoutineSessionPlanDroppableItem(), Props, RoutineSessionField (+18 more)

### Community 17 - "Session Status & Lists UI"
Cohesion: 0.12
Nodes (26): ExerciseRow(), ExerciseRowType, LAST_SESSIONS, LastSessions(), SessionListItem(), SessionListItemType, SessionRestDayType, SessionTrainingDayType (+18 more)

### Community 18 - "Test Mocks & Fixtures"
Cohesion: 0.20
Nodes (7): @testing-library/jest-dom, MockAuthRepository, InMemoryMuscleRepository, MOCK_MUSCLES, USERS_MOCK, TechnicalError, MockIdGenerator

### Community 19 - "Biome Lint Config"
Cohesion: 0.06
Nodes (33): noStaticElementInteractions, noSvgWithoutTitle, useKeyWithClickEvents, source, assist, actions, enabled, noStaticOnlyClass (+25 more)

### Community 20 - "Toasts & App Layout"
Cohesion: 0.09
Nodes (24): react-dom, DevToasts(), ToastsPage(), funnelDisplayFont, metadata, outfitFont, RootLayout(), DAYS (+16 more)

### Community 21 - "Seed Data & Constants"
Cohesion: 0.11
Nodes (16): MuscleIdName, MusclesFormData, BODY_SECTIONS, MUSCLES, MUSCULAR_GROUPS, STATUS, WORKOUT_STATUS, WORKOUT_TARGET_STATUS (+8 more)

### Community 22 - "DI Container & Error Translators"
Cohesion: 0.10
Nodes (12): pg, AuthNextAuthRepository, errorHandlersContainer, globalErrorMapper, InfrastructureErrorTranslator, IErrorTranslator, NextAuthErrorHandler, globalForPrisma (+4 more)

### Community 23 - "Package Manifest (Metadata)"
Cohesion: 0.07
Nodes (28): name, private, type, version, baseline-browser-mapping, @biomejs/biome, @dnd-kit/collision, install (+20 more)

### Community 24 - "Pages & Empty States"
Cohesion: 0.16
Nodes (18): @tabler/icons-react, tailwind-merge, TrackingTargetsPage(), ColorsPage(), SectionHeading(), FormPage(), Group(), ExerciseEmptyData() (+10 more)

### Community 25 - "Modal, Tooltip & Header Nav"
Cohesion: 0.13
Nodes (19): ModalLayout(), IconLanguage(), Modal(), Props, TooltipBackdrop(), layerStack, Props, registerLayer() (+11 more)

### Community 26 - "Calendar Date Picker Controls"
Cohesion: 0.20
Nodes (17): react, session, IconArrowUp(), ArrowButton(), Calendar(), CalendarProvider(), DateControl(), Props (+9 more)

### Community 27 - "Statistics Pages & Container"
Cohesion: 0.26
Nodes (15): ExercisesStatisticsPage(), MusclesStatisticsPage(), RoutinesStatisticsPage(), SessionsStatisticsPage(), BodySections, MuscularGroupsPage(), Dashboard(), dynamic (+7 more)

### Community 28 - "User Entity & Error Codes"
Cohesion: 0.13
Nodes (13): CreateUserInput, CreateUser, UserErrorCode, UserInvalidDataErrorCodes, InvalidUserData, RoleNotFound, UserEmailAlreadyExists, RoleIds (+5 more)

### Community 29 - "User Repository & DTOs"
Cohesion: 0.14
Nodes (8): UserDTO, User, UserPrismaRepository, userIncludeAnatomy, UserPrisma, UserPrismaCreate, UserPrismaUpdate, UserMapper

### Community 30 - "Body Section Cards"
Cohesion: 0.15
Nodes (18): BodySectionCards(), BodySections, Routine(), Session(), SessionExercisesList(), Props, SessionExerciseRow(), IconDots() (+10 more)

### Community 31 - "Calendar Date Utilities"
Cohesion: 0.13
Nodes (25): MONTH_DAYS, MONTH_DAYS_LEAP, MONTH_LIMITS, MonthDisplacement, MonthType, WEEK_DAYS, getCalendarDay(), getCalendarDays() (+17 more)

### Community 32 - "Session Form & Modal"
Cohesion: 0.14
Nodes (16): zod, CreateSessionPage(), dynamic, SessionExercises(), Props, SessionName(), SessionModalForm(), SessionForm (+8 more)

### Community 33 - "Sidebar Navigation"
Cohesion: 0.14
Nodes (13): IconCalendarCheck(), IconHome(), IconMan(), IconReportAnalytics(), IconRouteX(), IconSchema(), NavLink(), NavLinkIcon() (+5 more)

### Community 34 - "Dev Dependencies"
Cohesion: 0.08
Nodes (24): devDependencies, baseline-browser-mapping, @biomejs/biome, jest, jest-environment-jsdom, prettier, prettier-plugin-tailwindcss, prisma (+16 more)

### Community 35 - "Buttons & Sortable Inputs"
Cohesion: 0.17
Nodes (14): @dnd-kit/react, Notification(), Props, IconCirclePlus(), IconTrash(), iconVariant, Button(), Props (+6 more)

### Community 36 - "Tracking Dashboard Widgets"
Cohesion: 0.21
Nodes (15): SessionsPage(), AllSessionsDoneCounter(), BestRecords(), Counter(), CurrentGoals(), GoalItem(), GoalItemType, GOALS (+7 more)

### Community 37 - "Dashboard Home Widgets"
Cohesion: 0.24
Nodes (15): Dashboard(), NextSession(), Card(), BestExercises(), ExercisesList(), FirstRoutine(), FirstSession(), ImageBackground() (+7 more)

### Community 39 - "Workout Form & Wizard"
Cohesion: 0.17
Nodes (18): WorkoutForm, WorkoutSetForm, workoutSetFormSchema, workoutSetSchema, Props, Workout(), Props, TrainingButtons() (+10 more)

### Community 40 - "Card Components (Dev)"
Cohesion: 0.21
Nodes (14): DevCardColors(), Props, DevCardSizes(), Props, DevCardVariants(), Props, DevCardPage(), IconCog() (+6 more)

### Community 41 - "Login/Logout & Toast Hooks"
Cohesion: 0.17
Nodes (13): authLoginOptionsHandler(), nextAuthLogin(), nextAuthLogout(), AUTH_PROVIDER, LogInButton(), useLogin(), useLogout(), ConfirmSessionTrackingForm() (+5 more)

### Community 42 - "Exercise & Session Mappers"
Cohesion: 0.18
Nodes (11): ExerciseMapper, exerciseIncludeAnatomy, ExercisePrisma, ExercisePrismaCreate, ExercisePrismaUpdate, routineIncludeAnatomy, sessionIncludeAnatomy, SessionPrisma (+3 more)

### Community 43 - "Form Input Components"
Cohesion: 0.17
Nodes (11): Props, RoutineInitialDateField(), ErrorMessage(), Props, InputDate(), multipleSelectedType, Select(), selectedValue() (+3 more)

### Community 44 - "TypeScript Config"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, esModuleInterop, exactOptionalPropertyTypes, incremental, isolatedModules, jsx, lib (+13 more)

### Community 45 - "Runtime Dependencies"
Cohesion: 0.10
Nodes (21): dependencies, @dnd-kit/collision, @dnd-kit/react, dotenv, @hookform/resolvers, install, lucide-react, next (+13 more)

### Community 46 - "Select Box Components"
Cohesion: 0.19
Nodes (13): DevSelectBox(), IconSearch(), Box(), BoxProps, MultipleSelectBox(), Props, SelectedOption, SelectedOptions() (+5 more)

### Community 47 - "Radiobutton Controls"
Cohesion: 0.19
Nodes (10): @testing-library/react, @testing-library/user-event, DevRadiobuttons(), Radiobutton(), RadiobuttonMark(), RadiobuttonProps, RadiobuttonGroup(), RadiobuttonsProps (+2 more)

### Community 48 - "Error Code Definitions"
Cohesion: 0.13
Nodes (10): AuthErrorCode, ExerciseErrorCode, ExerciseInvalidDataErrorCodes, MuscleErrorCode, NotificationErrorCode, RoutineErrorCode, SessionErrorCode, SessionInvalidDataCodes (+2 more)

### Community 49 - "Workout Targets Form"
Cohesion: 0.16
Nodes (15): ExerciseSchema, exerciseMetricsSchema, WorkoutTargetsForm, workoutTargetsSchema, ExerciseTargets(), Props, Props, ExerciseTargetsStatus() (+7 more)

### Community 50 - "User Use Cases"
Cohesion: 0.22
Nodes (8): GetAllUsers, GetCurrentUserId, GetUserByEmail, GetUserById, IUserRepository, UserProps, makeUserModule(), Props

### Community 51 - "Calendar & Day Icons"
Cohesion: 0.22
Nodes (13): RestIcon(), TrainingIcon(), TypeDayIcon(), IconAlarm(), IconBarbell(), IconBarbellOff(), IconCircleCheck(), IconMapRoute() (+5 more)

### Community 52 - "Docs Concepts & PR Templates"
Cohesion: 0.14
Nodes (20): Bug Report Issue Template, Issue Template Config (blank issues disabled), Feature Request Issue Template, Test: Form Integration (Server Actions) Issue Template, React Hook Form, Next.js Server Actions, Zod Schema Validation, Clean Architecture (+12 more)

### Community 53 - "Wizard Step Engine"
Cohesion: 0.18
Nodes (14): Props, StepEngineContext, findNextValidIndex(), stepEngineReducer(), StepEngineAction, StepEngineActionType, JUMP_TO_PHASE, JUMP_TO_STEP (+6 more)

### Community 54 - "Server Actions"
Cohesion: 0.29
Nodes (13): getContainer(), createExerciseAction(), deleteExercise(), getAllUserExercises(), createRoutineAction(), deleteRoutine(), getAllRoutines(), createSessionAction() (+5 more)

### Community 55 - "Routine Plan DnD & Toast Icons"
Cohesion: 0.16
Nodes (10): RoutineSessionPlanDraggableItem(), DraggableBadge(), Props, IconAlertTriangle(), IconGripVertical(), IconInformationCircle(), IconXMark(), Props (+2 more)

### Community 56 - "Animated Icon Components"
Cohesion: 0.15
Nodes (10): IconBell(), IconEdit(), IconHeart(), IconPlayerTrackNext(), IconScale(), IconTrendingUp(), IconTrophy(), AnimationDirection (+2 more)

### Community 57 - "Layout & Navigation Shell"
Cohesion: 0.19
Nodes (10): nextConfig, next, Layout(), Imagotype(), Logo(), Breadcrumb(), joinUrlParts(), ListBreadcrumbs() (+2 more)

### Community 58 - "Global Constants & DB Types"
Cohesion: 0.15
Nodes (14): BODY_SECTIONS, BodySectionsKeys, CalendarDayPositionTimelineType, CalendarDayStatusType, EXERCISES, ExercisesType, ExerciseType, MUSCLES (+6 more)

### Community 59 - "Data Table Components"
Cohesion: 0.26
Nodes (11): ExercisesTable(), Props, MuscularGroupsTable(), Props, TableBody(), Props, TableBodyRow(), Props (+3 more)

### Community 60 - "Muscle DTOs & Actions"
Cohesion: 0.20
Nodes (9): BodySectionDTO, MuscleDTO, MuscularGroupDTO, MuscleMapper, muscleAnatomyInclude, MusclePrisma, getAllMuscles(), getMuscleById() (+1 more)

### Community 61 - "Dropdown List Controls"
Cohesion: 0.19
Nodes (10): DropdownList(), DropdownListProps, DropdownListValueType, MONTH_NAMES, TODAY, DateDropdownlist(), MonthDropdownlist(), generateYearOptions() (+2 more)

### Community 62 - "Dev Form Components"
Cohesion: 0.24
Nodes (9): DevFormComponents(), Props, DevFormGroup(), Props, DevMultipleSelectBox(), DevSortableInputItems(), DEV_FORM_OPTIONS, InputCheckBox() (+1 more)

### Community 63 - "User Session Buttons"
Cohesion: 0.24
Nodes (8): LogOutButton(), Props, UserAvatar(), UserInfo(), Props, UserLogout(), IconUser(), getCurrentSession()

### Community 64 - "Calendar Day Components"
Cohesion: 0.26
Nodes (15): getCurrentWeekStatusDays(), CalendarDayType, getCalendarStatusDay(), getISOStringDate(), getSessionFromDate(), isToday(), getRestDay(), CalendarDay() (+7 more)

### Community 65 - "Session Dashboard (Dark Theme)"
Cohesion: 0.16
Nodes (15): Chest, Dark Theme UI, Exercise Table, Lateral Raises, Muscle Group Tags, Push Day, Push Ups, Session Dashboard (Dark Theme) (+7 more)

### Community 66 - "Workout Data Normalizers"
Cohesion: 0.19
Nodes (9): Props, targetSetsMap(), targetStatusMapper(), WorkoutWrapper(), FullWorkoutTargets, NormalizeDataInput, normalizeStepsData(), normalizeSummaryData() (+1 more)

### Community 67 - "Presentation Type Definitions"
Cohesion: 0.13
Nodes (14): ActionResponseType, AnchorElementProps, AtomicElement, ButtonElementProps, ButtonElementPropsWithRef, DivProps, IconProps, IconTypes (+6 more)

### Community 68 - "Form Type Definitions"
Cohesion: 0.13
Nodes (14): ArrayField, ArrayFieldWithLabel, DnDFormFieldItemData, DnDFormFieldItemDraggableData, DnDFormFieldItemDroppableData, HTMLInputProps, IdArrayField, InputDateProps (+6 more)

### Community 69 - "OpenCode Agent Roles"
Cohesion: 0.20
Nodes (14): Backend Systems Engineer, Code Quality Reviewer, Database Optimization Expert, DevOps Infrastructure Architect, Frontend Engineer Agent, Performance Optimization Engineer, Product Strategy Manager, Project Orchestrator (+6 more)

### Community 70 - "Session Dashboard (Light Theme)"
Cohesion: 0.22
Nodes (14): Chest, Exercise Table, Lateral Raises, Muscle Group Tags, Push Day, Push Ups, Session Dashboard (Light Theme), Session Header (+6 more)

### Community 71 - "Routine Day Status UI"
Cohesion: 0.20
Nodes (10): tailwind-variants, DAY_TYPE_REST, DayObjectType, getDayAttributes(), RoutineDayItem(), STATUS_DAYS, StatusDayTypes, routineDayItemClassConfig (+2 more)

### Community 72 - "Landing Page Hero & Footer"
Cohesion: 0.25
Nodes (9): dynamic, Home(), Advantages(), Footer(), Hero(), Highilight(), HeroFooter(), Props (+1 more)

### Community 73 - "Routine Dashboard (Dark Theme)"
Cohesion: 0.18
Nodes (13): Accent Color Palette (Amber/Green), Active Training Day (Mon, Lightning Bolt), Dark Theme, Day Filter Chips, Edit Button, Leg Day, Pull Day, Push Day (+5 more)

### Community 74 - "Muscle Entity"
Cohesion: 0.17
Nodes (3): Muscle, createMuscle(), createMuscle()

### Community 75 - "Update User Use Case"
Cohesion: 0.28
Nodes (6): UpdateProps, UpdateUserInput, UpdateOperations, updateUserProperties(), UpdateUser, UserNotFoundError

### Community 76 - "Routine Dashboard (Light Theme)"
Cohesion: 0.23
Nodes (12): Active Day Indicator (Mon, Training), Edit Button, Leg Day, Light Theme Design, Pull Day, Push Day, Push, Pull, Legs, Rest Day Icon (crossed dumbbell) (+4 more)

### Community 77 - "Wizard Domain Types"
Cohesion: 0.20
Nodes (10): FlatStep, FlatStepWithText, NormalizeDomain, Phase, PhaseStatus, PhaseWithText, StepEnginePhaseEntries, StepStatus (+2 more)

### Community 78 - "Dev Layout & Theme Toggle"
Cohesion: 0.26
Nodes (8): next-themes, DevLayout(), Props, SessionButtons(), Header(), Props, ToggleTheme(), THEME

### Community 79 - "Button Components"
Cohesion: 0.24
Nodes (8): AllButtonSizes(), DevButtons(), Props, ButtonsPage(), buttonVariant, ButtonVariantProps, PossibleButtonVariantProps, VariantButtonType

### Community 80 - "Session Details UI"
Cohesion: 0.29
Nodes (8): SessionDetails(), SessionDetailsType, ActivitiesToday(), session, session, SessionsHistory(), IconCalendarClock(), SubtleCard()

### Community 81 - "Advantages & Feature Icons"
Cohesion: 0.27
Nodes (5): IconBellRinging(), IconDeviceDesktop(), IconDeviceDesktopAnalytics(), IconHammer(), AdvantageItem()

### Community 82 - "Statistics Charts"
Cohesion: 0.38
Nodes (6): StatisticsPage(), IconCircle(), BarCharts(), LineChart(), Point, StatisticCircle()

### Community 83 - "Routine & Session DTOs"
Cohesion: 0.38
Nodes (6): RoutineDTO, FullRoutineDTO, Props, RoutineNameField(), SessionDTO, InputText()

### Community 84 - "Package Scripts"
Cohesion: 0.22
Nodes (9): scripts, build, dev, format, safe-fixes, start, test, test:watch (+1 more)

### Community 86 - "Middleware & NextAuth Options"
Cohesion: 0.38
Nodes (4): next-auth, handler, config, authOptions

### Community 87 - "Best Records UI"
Cohesion: 0.38
Nodes (4): BestRecordItem(), BestRecordItemType, RECORDS, IconAward()

### Community 88 - "Shared Type Definitions"
Cohesion: 0.33
Nodes (5): ClassMethods, Different, EntityMethod, NonEmptyString, ValidationFunction

### Community 89 - "Jest Config"
Cohesion: 0.50
Nodes (3): config, createJestConfig, jest

### Community 90 - "Wizard Summary Types"
Cohesion: 0.50
Nodes (3): PhaseSummary, StepSummary, WizardSummary

## Knowledge Gaps
- **75 isolated node(s):** `@dnd-kit/collision`, `@prisma/client`, `install`, `lucide-react`, `npm` (+70 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 567 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@testing-library/jest-dom` connect `Test Mocks & Fixtures` to `Routine Management Use Cases`, `Validation Functions`, `Session Domain & Use Cases`, `Domain Errors & Routine Entity`, `Exercise Validation & Update`, `Update User Use Case`, `Form Input Components`, `Landing Page UI`, `Radiobutton Controls`, `Dropdown List Controls`, `Routine Plan DnD & Toast Icons`, `Package Manifest (Metadata)`, `User Repository & DTOs`, `Dev Form Components`, `User Session Buttons`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **What connects `@dnd-kit/collision`, `@prisma/client`, `install` to the rest of the system?**
  _75 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Routine Management Use Cases` be split into smaller, more focused modules?**
  _Cohesion score 0.08157349896480331 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Calendar Date Picker Controls` to `Exercise Form UI`, `Wizard Context & Providers`, `Routine Form UI`, `Toasts & App Layout`, `Package Manifest (Metadata)`, `Modal, Tooltip & Header Nav`, `Session Form & Modal`, `Buttons & Sortable Inputs`, `Card Components (Dev)`, `Login/Logout & Toast Hooks`, `Form Input Components`, `Select Box Components`, `Radiobutton Controls`, `Workout Targets Form`, `Wizard Step Engine`, `Animated Icon Components`, `Layout & Navigation Shell`, `Dropdown List Controls`, `Dev Form Components`, `Form Type Definitions`, `Landing Page Hero & Footer`, `Session Details UI`, `Statistics Charts`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Should `Validation Functions` be split into smaller, more focused modules?**
  _Cohesion score 0.06308610400682012 - nodes in this community are weakly interconnected._
- **Why does `IconWrapper()` connect `Icon Components` to `Sidebar Navigation`, `Buttons & Sortable Inputs`, `Routine Day Status UI`, `Card Components (Dev)`, `Landing Page UI`, `Select Box Components`, `Session Details UI`, `Advantages & Feature Icons`, `Session Status & Lists UI`, `Calendar & Day Icons`, `Routine Plan DnD & Toast Icons`, `Best Records UI`, `Animated Icon Components`, `Modal, Tooltip & Header Nav`, `Calendar Date Picker Controls`, `Statistics Pages & Container`, `Body Section Cards`, `User Session Buttons`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Should `Session Domain & Use Cases` be split into smaller, more focused modules?**
  _Cohesion score 0.07155399473222125 - nodes in this community are weakly interconnected._
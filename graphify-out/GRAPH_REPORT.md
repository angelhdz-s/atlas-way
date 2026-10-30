# Graph Report - atlas-way  (2026-10-30)

## Corpus Check
- 523 files · ~80,227 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: .css 7, (none) 5, .toml 1)

## Summary
- 1894 nodes · 6249 edges · 90 communities (79 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 91 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `06fb8050`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Exercise Validation Schemas
- RoutineModalForm.tsx
- useToast
- IdGeneratorRepository
- CardTitle
- Landing Page Sections
- Notification Use Cases
- ref_presentation_modules_form_form_types
- DomainError
- Prisma Repositories
- Session Use Cases
- Unit Test Suites
- Session List UI
- Routine Entity and Types
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
- InputText.tsx
- Routine and Session Cards
- Session
- Database Seed Data
- Root Layout and Fonts
- Session Creation Flow
- User Entity and Persistence
- Tracking Pages and Empty States
- TooltipSelect.tsx
- Icon.tsx
- Routine Session Rules
- ref_react
- Domain Error Codes
- ErrorMessage
- Header and Navigation
- Sidebar.tsx
- validation.utils.ts
- Wizard Step Engine
- routine.types.ts
- Domain Data Types
- Muscles Dashboard Tables
- workout-target.actions.ts
- Card
- muscle.prisma.repository.ts
- Unit Testing Skill Instructions
- ref_tailwind_merge
- SessionsHistory.tsx
- Muscle
- Calendar Dropdowns
- CI and Docker Deployment
- routine.schema.ts
- Workout Wizard Normalizers
- Presentation Type Definitions
- Form Type Definitions
- Exercise Targets UI
- CalendarDay.tsx
- error.translator.ts
- Design System Documentation
- ModalForm.tsx
- WizardOrchestratorInner.tsx
- containers.ts
- Muscle
- Wizard Type Definitions
- routine.errors.ts
- buttonVariant
- CurrentWeekStatus.tsx
- Step Form Sync
- NextAuth Route Config
- Shared Type Utilities
- Person
- Wizard Summary Types
- Button Component Guidance
- WizardSummaryProvider.tsx
- Unit Testing Principles
- Status Code Types
- Training Status Types
- CSS Module Styles
- workout-status.rules.ts
- CurrentGoals.tsx
- home/Calendar.tsx
- NotificationsList.tsx
- user/presentation/types.d.ts

## God Nodes (most connected - your core abstractions)
1. `Failure()` - 125 edges
2. `Icon()` - 115 edges
3. `Success()` - 96 edges
4. `DomainError` - 81 edges
5. `UseCase` - 73 edges
6. `Button()` - 56 edges
7. `Exercise` - 52 edges
8. `Card()` - 51 edges
9. `Result` - 47 edges
10. `CardTitle()` - 46 edges

## Surprising Connections (you probably didn't know these)
- `Button Component Guidance` --references--> `Button()`  [INFERRED]
  DESIGN.md → src/presentation/modules/button/components/Button.tsx
- `Lucide Icon Library` --references--> `Icon()`  [INFERRED]
  DESIGN.md → src/presentation/modules/icon/components/Icon.tsx
- `Shared button component` --references--> `Button()`  [EXTRACTED]
  .agents/skills/design-implementation/SKILL.md → src/presentation/modules/button/components/Button.tsx
- `Shared icon component` --references--> `Icon()`  [EXTRACTED]
  .agents/skills/design-implementation/SKILL.md → src/presentation/modules/icon/components/Icon.tsx
- `Safe Code Verification Workflow` --conceptually_related_to--> `atlas-way`  [INFERRED]
  .github/workflows/safe_code.yml → README.md

## Import Cycles
- 4-file cycle: `src/di/containers.ts -> src/modules/auth/infrastructure/next-auth/auth.next-auth.repository.ts -> src/shared/infrastructure/next-auth/next-auth.currentsession.ts -> src/shared/infrastructure/next-auth/next-auth.options.ts -> src/di/containers.ts`

## Hyperedges (group relationships)
- **Atlas Way Tech Stack** — readme_atlas_way, readme_next_js, readme_prisma_orm, readme_postgresql, readme_docker [EXTRACTED 1.00]
- **Clean Architecture Test Layers** — agents_skills_unit_testing_skill_domain, agents_skills_unit_testing_skill_application, agents_skills_unit_testing_skill_infrastructure, agents_skills_unit_testing_skill_presentation [EXTRACTED 1.00]
- **Design Token Categories** — design_surface_tokens, design_border_tokens, design_text_tokens, design_icon_tokens [EXTRACTED 1.00]
- **CI Verification Flow** — _github_workflows_safe_code_safe_code_verification, _github_workflows_safe_code_postgres_service, _github_workflows_safe_code_prisma_migrate_deploy, readme_prisma_orm [EXTRACTED 1.00]

## Communities (90 total, 11 thin omitted)

### Community 0 - "Exercise Validation Schemas"
Cohesion: 0.10
Nodes (33): EXERCISE_DESCRIPTION_LENGTH, EXERCISE_NAME_LENGTH, EXERCISE_REPS_RANGE, EXERCISE_SETS_RANGE, EXERCISE_WEIGHT_RANGE, isValidExerciseDescription(), isValidExerciseName(), isValidExerciseReps() (+25 more)

### Community 1 - "RoutineModalForm.tsx"
Cohesion: 0.15
Nodes (16): CreateRoutinePage(), Props, RoutineCycleField(), Props, RoutineDescriptionField(), Props, RoutineModalForm(), DEFAULT_WEEK_CYCLE_DAYS_DATA (+8 more)

### Community 2 - "useToast"
Cohesion: 0.20
Nodes (11): authLoginOptionsHandler(), nextAuthLogin(), nextAuthLogout(), AUTH_PROVIDER, LogInButton(), useLogin(), useLogout(), ConfirmSessionTrackingForm() (+3 more)

### Community 3 - "IdGeneratorRepository"
Cohesion: 0.22
Nodes (9): CreateRoutine, DeleteRoutine, GetAllRoutines, GetRoutineById, UpdateRoutine, IRoutineRepository, makeRoutineModule(), Props (+1 more)

### Community 4 - "CardTitle"
Cohesion: 0.18
Nodes (17): SessionsPage(), AllSessionsDoneCounter(), BestRecordItem(), BestRecordItemType, BestRecords(), RECORDS, Counter(), CounterIcon() (+9 more)

### Community 5 - "Landing Page Sections"
Cohesion: 0.08
Nodes (34): dynamic, Home(), AdvantageItem(), Advantages(), AtlasWayCard(), Props, BentoCard(), Props (+26 more)

### Community 6 - "Notification Use Cases"
Cohesion: 0.09
Nodes (14): CreateNotificationInput, NotificationDTO, UpdateNotificationInput, CreateNotification, GetAllNotifications, GetNotificationById, UpdateNotification, Notification (+6 more)

### Community 8 - "DomainError"
Cohesion: 0.12
Nodes (7): NotificationNotFoundError, InvalidUserData, RoleNotFound, isValidUserName(), DomainError, DomainErrorCode, Result

### Community 9 - "Prisma Repositories"
Cohesion: 0.19
Nodes (5): ExercisePrismaRepository, SessionPrismaRepository, UserPrismaRepository, Failure(), Success()

### Community 10 - "Session Use Cases"
Cohesion: 0.14
Nodes (13): CreateSession, DeleteSession, GetAllSessions, GetSessionById, GetSessionsByIds, UpdateSession, SessionOwnershipError, ISessionRepository (+5 more)

### Community 12 - "Session List UI"
Cohesion: 0.24
Nodes (12): ExerciseRow(), ExerciseRowType, exerciseType, SessionDetails(), CanceledIcon(), CompletedIcon(), PendingIcon(), StatusIcon() (+4 more)

### Community 13 - "Routine Entity and Types"
Cohesion: 0.10
Nodes (15): CYCLE_TYPES, RoutineCycleId, Routine, createTestRoutine(), RoutineFactoryData, RoutineMiminumProps, RoutineValidationKeys, routineValidators (+7 more)

### Community 14 - "User Use Cases"
Cohesion: 0.06
Nodes (33): LoginInput, GetCurrentSession, Login, Logout, makeAuthModule(), Props, IAuthRepository, SessionAlreadyActive (+25 more)

### Community 15 - "Dashboard Pages"
Cohesion: 0.19
Nodes (19): ExercisesStatisticsPage(), MusclesStatisticsPage(), StatisticsPage(), RoutinesStatisticsPage(), SessionsStatisticsPage(), BodySections, MuscularGroupsPage(), Dashboard() (+11 more)

### Community 16 - "Server Actions and Container"
Cohesion: 0.19
Nodes (28): getContainer(), getSession(), logout(), createExerciseAction(), deleteExercise(), getAllUserExercises(), MuscleDTO, getAllMuscles() (+20 more)

### Community 17 - "Modal and Layout Primitives"
Cohesion: 0.15
Nodes (19): ModalLayout(), ActivitiesToday(), getSessionStatus(), toSessionDetails(), Modal(), Props, TooltipBackdrop(), layerStack (+11 more)

### Community 18 - "Date Utilities"
Cohesion: 0.09
Nodes (25): MONTH_DAYS, MONTH_DAYS_LEAP, MONTH_LIMITS, MONTH_NAMES, MonthDisplacement, MonthType, WEEK_DAYS, getCalendarDay() (+17 more)

### Community 19 - "Exercise Update Logic"
Cohesion: 0.06
Nodes (31): UpdateExerciseInput, UpdateProps, updateExercise(), UpdateExerciseKeys, UpdateOperations, createExercise(), createExercise(), ExerciseNotFoundError (+23 more)

### Community 20 - "Exercise Use Cases"
Cohesion: 0.16
Nodes (11): CreateExercise, DeleteExercise, GetAllExercises, GetExerciseById, GetExercisesByIds, GetAllUserExercises, UpdateExercise, IExerciseRepository (+3 more)

### Community 21 - "Drag and Drop UI"
Cohesion: 0.12
Nodes (25): Notification(), Props, RoutineSessionPlanDroppableItem(), DraggableBadge(), Props, Button(), Props, Box() (+17 more)

### Community 22 - "Exercise Form Fields"
Cohesion: 0.17
Nodes (23): CreateExercisePage(), ExerciseDTO, ExerciseDescriptionField(), Props, ExerciseNameField(), Props, ExerciseRepsField(), Props (+15 more)

### Community 23 - "RoutineDayItem.tsx"
Cohesion: 0.25
Nodes (8): DAY_TYPE_REST, DayObjectType, getDayAttributes(), RoutineDayItem(), STATUS_DAYS, StatusDayTypes, routineDayItemClassConfig, IconName

### Community 24 - "Design Skill Instructions"
Cohesion: 0.06
Nodes (31): 1. Tailwind CSS Requirements, Examples, Rules, 2. Arbitrary Value Unit Policy, 3. Figma-to-Tailwind Unit Conversion, 4. Figma Stroke Alignment: Inside, Center, and Outside, 5. Typography Weight Conversion, 7. Component Implementation (+23 more)

### Community 25 - "InputText.tsx"
Cohesion: 0.31
Nodes (5): Props, RoutineNameField(), InputText(), InputClasses, TextAreaClasses

### Community 26 - "Routine and Session Cards"
Cohesion: 0.18
Nodes (16): BodySectionCards(), BodySections, Routine(), Session(), CardHeader(), Props, CardMain(), Props (+8 more)

### Community 27 - "Session"
Cohesion: 0.16
Nodes (8): InvalidSessionData, Session, SessionFactoryData, SessionMinimumProps, SessionValidationKeys, sessionValidators, validateSession(), isKeyOf()

### Community 28 - "Database Seed Data"
Cohesion: 0.09
Nodes (20): exerciseIncludeAnatomy, MuscleIdName, MusclesFormData, BODY_SECTIONS, MUSCLES, MUSCULAR_GROUPS, sessionIncludeAnatomy, SessionPrisma (+12 more)

### Community 29 - "Root Layout and Fonts"
Cohesion: 0.07
Nodes (24): funnelDisplayFont, metadata, outfitFont, RootLayout(), DAYS, DaysType, DayType, DayWeeksType (+16 more)

### Community 30 - "Session Creation Flow"
Cohesion: 0.20
Nodes (13): CreateSessionPage(), dynamic, RoutineDTO, FullRoutineDTO, SessionDTO, Props, SessionDescription(), SessionExercises() (+5 more)

### Community 31 - "User Entity and Persistence"
Cohesion: 0.16
Nodes (7): UserDTO, User, userIncludeAnatomy, UserPrisma, UserPrismaCreate, UserPrismaUpdate, UserMapper

### Community 32 - "Tracking Pages and Empty States"
Cohesion: 0.17
Nodes (20): TrackingTargetsPage(), TrackingTrainingPage(), ExerciseEmptyData(), RoutineEmptyData(), SessionEmptyData(), getOwnedWorkout(), ExerciseTargetsProvider(), statusCopy (+12 more)

### Community 33 - "TooltipSelect.tsx"
Cohesion: 0.17
Nodes (11): Props, RoutineActiveField(), InputCheckBox(), Props, LabelGroup(), multipleSelectedType, Select(), selectedValue() (+3 more)

### Community 34 - "Icon.tsx"
Cohesion: 0.22
Nodes (7): Props, StatCard(), DynamicIconProps, Props, mappedIcons, IconVariant, getMappedIcon()

### Community 35 - "Routine Session Rules"
Cohesion: 0.19
Nodes (16): getRoutineDayNumber(), resolveRoutineSessionForDate(), RoutineLike, RoutinePlanDayLike, toDateOnly(), todayDateOnly(), getTrackingUserId(), createWorkout() (+8 more)

### Community 36 - "ref_react"
Cohesion: 0.26
Nodes (8): Calendar(), ArrowButton(), DateController(), DateControllerProps, DateSelector(), CalendarContext, CalendarContextType, useCalendar()

### Community 37 - "Domain Error Codes"
Cohesion: 0.13
Nodes (10): AuthErrorCode, ExerciseErrorCode, ExerciseInvalidDataErrorCodes, MuscleErrorCode, NotificationErrorCode, RoutineErrorCode, SessionErrorCode, SessionInvalidDataCodes (+2 more)

### Community 38 - "ErrorMessage"
Cohesion: 0.15
Nodes (14): ExerciseMusclesField(), Props, RoutineSessionPlanDraggableItem(), Props, RoutineSessionField, RoutineSessionPlanField(), Fallback(), Props (+6 more)

### Community 39 - "Header and Navigation"
Cohesion: 0.11
Nodes (22): Layout(), LogOutButton(), SessionButtons(), Props, UserAvatar(), UserInfo(), Props, UserLogout() (+14 more)

### Community 40 - "Sidebar.tsx"
Cohesion: 0.29
Nodes (7): NavLink(), NavLinkIcon(), NavLinks(), Sidebar(), SidebarSection(), SidebarNavLinkVariant, sidebarNavLinkVariants

### Community 41 - "validation.utils.ts"
Cohesion: 0.10
Nodes (22): CreateExerciseInput, InvalidMuscleData, MuscleNotFoundError, MuscleValidationService, USER_EMAIL_SERVICES, USER_NAME_LENGTH, isValidUserEmail(), REGEX_EMAIL (+14 more)

### Community 42 - "Wizard Step Engine"
Cohesion: 0.19
Nodes (14): Props, StepEngineContext, findNextValidIndex(), stepEngineReducer(), StepEngineAction, StepEngineActionType, JUMP_TO_PHASE, JUMP_TO_STEP (+6 more)

### Community 43 - "routine.types.ts"
Cohesion: 0.16
Nodes (11): CreateRoutineInput, UpdateProps, UpdateRoutineInput, UpdateOperations, updateRoutineProperties(), InvalidRoutineData, RoutineMethods, RoutinePlanDay (+3 more)

### Community 44 - "Domain Data Types"
Cohesion: 0.14
Nodes (16): BODY_SECTIONS, BodySectionsKeys, CalendarDayPositionTimelineType, CalendarDayStatusType, EXERCISES, ExercisesType, ExerciseType, MUSCLES (+8 more)

### Community 45 - "Muscles Dashboard Tables"
Cohesion: 0.26
Nodes (11): ExercisesTable(), Props, MuscularGroupsTable(), Props, TableBody(), Props, TableBodyRow(), Props (+3 more)

### Community 46 - "workout-target.actions.ts"
Cohesion: 0.12
Nodes (25): ExerciseSchema, canReopenWorkoutTarget(), resolveReopenedWorkoutTargetStatus(), resolveWorkoutTargetFinalStatus(), resolveWorkoutTargetStatusAfterSet(), WorkoutTargetProgressInput, exerciseMetricsSchema, WorkoutTargetsForm (+17 more)

### Community 47 - "Card"
Cohesion: 0.17
Nodes (13): cardVariant, CardVariantProps, Card(), Props, CardHighlightBorder(), BestExercises(), FirstRoutine(), FirstSession() (+5 more)

### Community 48 - "muscle.prisma.repository.ts"
Cohesion: 0.23
Nodes (7): ExerciseMapper, ExercisePrisma, ExercisePrismaCreate, ExercisePrismaUpdate, MuscleMapper, muscleAnatomyInclude, MusclePrisma

### Community 49 - "Unit Testing Skill Instructions"
Cohesion: 0.17
Nodes (16): 10. Completion Criteria, 2. Identify the Unit's Responsibility First, 3. Define the Minimum Sufficient Test Set, 4. Apply Clean Architecture Boundaries, 5. Test Structure and Naming, 6. Mocks, Stubs, and Assertions, 7. Avoid Over-Testing, 8. Test Failures and Regressions (+8 more)

### Community 50 - "ref_tailwind_merge"
Cohesion: 0.21
Nodes (11): SessionExercisesList(), Props, SessionExerciseRow(), WorkoutSetForm, Props, Workout(), Props, TrainingButtons() (+3 more)

### Community 51 - "SessionsHistory.tsx"
Cohesion: 0.19
Nodes (12): LAST_SESSIONS, LastSessions(), SessionListItem(), SessionListItemType, SessionRestDayType, SessionTrainingDayType, SessionDetailsType, session (+4 more)

### Community 52 - "Muscle"
Cohesion: 0.18
Nodes (9): BodySectionDTO, MuscularGroupDTO, GetAllMuscles, GetMuscleById, GetMusclesByIds, IMuscleRepository, MuscleProps, makeMuscleModule() (+1 more)

### Community 53 - "Calendar Dropdowns"
Cohesion: 0.16
Nodes (13): DropdownList(), DropdownListProps, DropdownListValueType, ArrowButton(), DateControl(), Props, DateDropdownlist(), MonthDateSelector() (+5 more)

### Community 54 - "CI and Docker Deployment"
Cohesion: 0.21
Nodes (15): CI PostgreSQL Service, Prisma Migrate Deploy Step, Safe Code Verification Workflow, atlas-way, DATABASE_URL, Docker, Cloud Deployment, Docker Compose (+7 more)

### Community 55 - "routine.schema.ts"
Cohesion: 0.13
Nodes (15): Props, RoutineInitialDateField(), routineCycleSchema, RoutineForm, routineFormSchema, sessions, ContainersKey, DroppedItem (+7 more)

### Community 56 - "Workout Wizard Normalizers"
Cohesion: 0.15
Nodes (13): WorkoutForm, workoutSetFormSchema, workoutSetSchema, Props, targetSetsMap(), targetStatusMapper(), WorkoutWrapper(), finishWorkout() (+5 more)

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
Cohesion: 0.31
Nodes (13): CalendarDayType, getCalendarStatusDay(), getISOStringDate(), getSessionFromDate(), isToday(), CalendarDay(), CalendarDayCanceled(), CalendarDayCompleted() (+5 more)

### Community 61 - "error.translator.ts"
Cohesion: 0.35
Nodes (5): errorHandlersContainer, globalErrorMapper, IErrorTranslator, NextAuthErrorHandler, PrismaErrorHandler

### Community 62 - "Design System Documentation"
Cohesion: 0.19
Nodes (11): 6. Design Tokens and DESIGN.md, Shared icon component, Atlas Way Design System, Border Color Tokens, Figma Source of Truth, Semantic Icon Assignments, Icon Color Tokens, Lucide Icon Library (+3 more)

### Community 63 - "ModalForm.tsx"
Cohesion: 0.20
Nodes (7): SessionTrainingForm, SessionTrainingSetForm, ModalForm(), Props, ModalFormHookProps, useFormHook(), Props

### Community 64 - "WizardOrchestratorInner.tsx"
Cohesion: 0.33
Nodes (7): Props, WizardOrchestratorInner(), WizardOrchestratorInnerContext, WizardOrchestratorInnerValue, getNextStepId(), GetNextStepIdProps, getPreviousStepId()

### Community 65 - "containers.ts"
Cohesion: 0.09
Nodes (10): AuthSession, AuthMapper, AuthNextAuthRepository, MusclePrismaRepository, InfrastructureErrorTranslator, UUIDGenerator, globalForPrisma, prisma (+2 more)

### Community 66 - "Muscle"
Cohesion: 0.17
Nodes (3): Muscle, createMuscle(), createMuscle()

### Community 67 - "Wizard Type Definitions"
Cohesion: 0.20
Nodes (10): FlatStep, FlatStepWithText, NormalizeDomain, Phase, PhaseStatus, PhaseWithText, StepEnginePhaseEntries, StepStatus (+2 more)

### Community 68 - "routine.errors.ts"
Cohesion: 0.18
Nodes (5): RoutineInvalidDataErrorCodes, InvalidRoutineDays, RoutineCycleNotFound, RoutineNotFoundError, RoutineOwnershipError

### Community 69 - "buttonVariant"
Cohesion: 0.27
Nodes (6): buttonVariant, ButtonVariantProps, getClasses(), Props, Tag(), TagVariant

### Community 70 - "CurrentWeekStatus.tsx"
Cohesion: 0.39
Nodes (6): CurrentWeekStatus(), CurrentWeekStatusDays, getCurrentWeekStatusDays(), StatusDay(), StatusDayIcon(), getNextDates()

### Community 71 - "Step Form Sync"
Cohesion: 0.20
Nodes (12): StepEngineProvider(), StepFormProvider(), FormKey, Props, SaveStepAction, StepFormSyncProvider(), Props, WizardProvider() (+4 more)

### Community 72 - "NextAuth Route Config"
Cohesion: 0.38
Nodes (3): handler, config, authOptions

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
Cohesion: 0.22
Nodes (8): WizardSummary(), Props, WizardContext, WizardValue, WizardSummaryContext, useWizard(), Wizard, useWizardSummary()

### Community 85 - "workout-status.rules.ts"
Cohesion: 0.38
Nodes (4): WorkoutStatusId, WorkoutTargetStatusId, resolveWorkoutFinalStatus(), ResolveWorkoutFinalStatusInput

### Community 86 - "CurrentGoals.tsx"
Cohesion: 0.40
Nodes (4): GoalItem(), GoalItemType, GOALS, PercentageBar()

### Community 87 - "home/Calendar.tsx"
Cohesion: 0.70
Nodes (4): Calendar(), CalendarCurrentWeek(), CalendarHeader(), CalendarNextWeek()

### Community 88 - "NotificationsList.tsx"
Cohesion: 0.83
Nodes (3): NotificationListItem(), Notifications(), NotificationsList()

## Knowledge Gaps
- **50 isolated node(s):** `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP`, `JUMP_TO_PHASE`, `RESET_ENGINE` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 438 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Icon()` connect `Drag and Drop UI` to `useToast`, `CardTitle`, `Landing Page Sections`, `Session List UI`, `Dashboard Pages`, `Modal and Layout Primitives`, `RoutineDayItem.tsx`, `Root Layout and Fonts`, `Tracking Pages and Empty States`, `TooltipSelect.tsx`, `Icon.tsx`, `ref_react`, `ErrorMessage`, `Header and Navigation`, `Sidebar.tsx`, `Muscles Dashboard Tables`, `Card`, `ref_tailwind_merge`, `SessionsHistory.tsx`, `Calendar Dropdowns`, `Exercise Targets UI`, `CalendarDay.tsx`, `Design System Documentation`, `ModalForm.tsx`, `CurrentWeekStatus.tsx`, `home/Calendar.tsx`?**
  _High betweenness centrality (0.150) - this node is a cross-community bridge._
- **What connects `NEXT_STEP`, `PREV_STEP`, `JUMP_TO_STEP` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Exercise Validation Schemas` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `Design Implementation Skill` connect `Design Skill Instructions` to `Unit Testing Principles`, `Button Component Guidance`, `Design System Documentation`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `RoutineModalForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14666666666666667 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Drag and Drop UI` to `RoutineModalForm.tsx`, `useToast`, `TooltipSelect.tsx`, `buttonVariant`, `Header and Navigation`, `ref_presentation_modules_form_form_types`, `Button Component Guidance`, `Muscles Dashboard Tables`, `Dashboard Pages`, `Modal and Layout Primitives`, `ref_tailwind_merge`, `Exercise Targets UI`, `CalendarDay.tsx`, `ModalForm.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `Landing Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.07982583454281568 - nodes in this community are weakly interconnected._
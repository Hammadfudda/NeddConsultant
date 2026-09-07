import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ClipboardCheck,
  Database,
  FileClock,
  FileSpreadsheet,
  Fingerprint,
  Gauge,
  History,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
  UserRound,
  UsersRound,
} from 'lucide-react';

const PRODUCT_FEATURE_GROUPS = [
  {
    title: 'Leave Requests & Balances',
    icon: CalendarDays,
    items: [
      'Apply for leave from one simple portal',
      'Live Granted, Used and Remaining balances',
      'Automatic working-day calculation',
      'Department-based Saturday and Sunday rules',
      'Leave history with current request status',
      'Extension and early-return / stop-leave requests',
      'Attachment support for documents when required',
      'Balance protection before a request can be submitted',
    ],
  },
  {
    title: 'Approvals & Manager Control',
    icon: ClipboardCheck,
    items: [
      'Requests automatically reach the correct approver',
      'Approve or reject with remarks',
      'Manager dashboard shows only actionable requests',
      'Multi-step approval support when a company needs it',
      'Admin-only leave decision option for special policies',
      'Admin act-on-behalf and controlled override tools',
      'No self-approval protection',
      'Automatic status updates after every decision',
    ],
  },
  {
    title: 'Employee & Organization Management',
    icon: UsersRound,
    items: [
      'Employee records with ID, CNIC, department, designation and grade',
      'Division and Department hierarchy',
      'Admin, Manager and Employee portal access',
      'Assign managers to employees',
      'Create and manage grades, designations and organization structure',
      'Active, inactive, removed and restore employee lifecycle',
      'Pending-detail visibility for incomplete employee records',
      'Search and filter employee lists quickly',
    ],
  },
  {
    title: 'Policies & Leave Rules',
    icon: SlidersHorizontal,
    items: [
      'Create leave policies around the company workflow',
      'Grade-based leave quotas',
      'Policy-based entitlement rules',
      'Configurable organization leave-year start date',
      'Automatic pro-rated quota for mid-year joiners',
      'Floor-rounded pro-ration for consistent balances',
      'Policy scope by department, grade or designation',
      'Available leave types shown automatically to eligible employees',
    ],
  },
  {
    title: 'Smart CSV & Bulk Administration',
    icon: FileSpreadsheet,
    items: [
      'Bulk employee import using Smart CSV',
      'CSV export for employee records',
      'Validation before bad data enters the system',
      'Clear row-level errors for missing or invalid values',
      'Grade and Leave Type quota conflict protection',
      'Pending employee details can be completed after import',
      'Quota and used-balance fields supported in the import workflow',
      'Faster onboarding for larger teams',
    ],
  },
  {
    title: 'Visibility, Reports & Audit',
    icon: BarChart3,
    items: [
      'Separate Admin, Manager and Employee dashboards',
      'Company-wide leave overview for Admin',
      'Team leave visibility for Managers',
      'Leave calendar for planning coverage',
      'Yearly leave reports and snapshots',
      'CSV reporting and export',
      'Append-only audit logs for accountability',
      'Working-day and excluded-weekend visibility',
    ],
  },
];

const ROLE_BENEFITS = [
  {
    role: 'Employee',
    icon: UserRound,
    headline: 'Know your balance. Apply without chasing anyone.',
    benefits: [
      'See available leave before applying',
      'Submit requests with dates, reason and attachment',
      'Track pending, approved and rejected requests',
      'Receive notifications when status changes',
      'Request an extension or early return when plans change',
    ],
  },
  {
    role: 'Manager',
    icon: UserCheck,
    headline: 'A clear approval queue instead of scattered messages.',
    benefits: [
      'See only requests that need your decision',
      'Review working days and excluded weekends clearly',
      'Approve or reject with remarks',
      'See team availability and upcoming leave',
      'Use your own employee leave tools from the same account',
    ],
  },
  {
    role: 'Admin / HR',
    icon: ShieldCheck,
    headline: 'Control the whole leave process from one place.',
    benefits: [
      'Manage employees, managers and organization structure',
      'Configure policies, quotas and leave-year settings',
      'Import or export employee data in bulk',
      'View company reports, calendars and audit history',
      'Handle exceptional approval cases with controlled admin tools',
    ],
  },
];

const WORKFLOW = [
  {
    number: '01',
    title: 'Set up your organization',
    text: 'Admin creates Divisions, Departments, Grades, Designations, leave policies, quotas and the company leave-year start.',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'Add your employees',
    text: 'Create employees one by one or onboard larger teams using Smart CSV, then assign the right manager and portal access.',
    icon: Database,
  },
  {
    number: '03',
    title: 'Employee submits leave',
    text: 'The system checks dates, working days and available balance before the request enters the approval workflow.',
    icon: FileClock,
  },
  {
    number: '04',
    title: 'Manager makes the decision',
    text: 'The correct approver receives the request, reviews the details and approves or rejects it with remarks.',
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Everything stays updated',
    text: 'Balances, history, dashboards, reports, notifications and audit records stay aligned automatically after the decision.',
    icon: RefreshCw,
  },
];

const PRODUCT_HIGHLIGHTS = [
  { value: '3', label: 'Role-based portals' },
  { value: '1', label: 'Central leave workflow' },
  { value: 'Live', label: 'Balances & status' },
  { value: 'Smart', label: 'CSV onboarding' },
];

export default function LeaveManagementProduct() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800 bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
              <Gauge className="h-4 w-4" />
              NEDD Leave Management Software
            </div>

            <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Replace spreadsheets, WhatsApp approvals and manual leave tracking with one clear system.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A complete leave-management workspace for employees, managers and Admin/HR. It keeps requests, approvals, balances, employee records, policies, reports and audit history connected so everyone knows exactly what needs to happen next.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://leave-managment-mock-data.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
              >
                View Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-brand-400 hover:bg-slate-800"
              >
                Discuss Your Requirements
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-800 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Built around real HR problems</p>
                <p className="mt-2 text-sm text-slate-400">One system. Clear responsibility. Accurate records.</p>
              </div>
              <Network className="h-7 w-7 text-brand-400" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {PRODUCT_HIGHLIGHTS.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="font-display text-2xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <div className="flex gap-3">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Role-based by design</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Employees see their own leave tools, Managers see their team and approvals, while Admin/HR manages company-wide structure, policies and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Complete capability set</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Everything needed to run leave management without disconnected tools.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCT_FEATURE_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-colors hover:border-brand-500/40">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 font-display text-xl font-semibold text-white">{group.title}</h4>
                  <div className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">What each user gets</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Useful for the person applying, the person approving and the person running HR.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ROLE_BENEFITS.map((role) => {
              const Icon = role.icon;
              return (
                <article key={role.role} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-display text-xl font-semibold text-white">{role.role}</p>
                  </div>
                  <p className="mt-5 text-base font-semibold leading-7 text-brand-200">{role.headline}</p>
                  <div className="mt-5 space-y-3">
                    {role.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-24 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">How it works</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              From company setup to approved leave in one connected workflow.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {WORKFLOW.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.16em] text-brand-300">{step.number}</span>
                    <Icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <Bell className="h-6 w-6 text-brand-400" />
            <h4 className="mt-4 font-display text-lg font-semibold text-white">Automatic notifications</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Keep employees and approvers updated when requests are created or decisions are made.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <Fingerprint className="h-6 w-6 text-brand-400" />
            <h4 className="mt-4 font-display text-lg font-semibold text-white">Accountability built in</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Role permissions, approval controls and audit history make it easier to understand who did what and when.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <History className="h-6 w-6 text-brand-400" />
            <h4 className="mt-4 font-display text-lg font-semibold text-white">A reliable historical record</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Leave history, balances, yearly snapshots and reports stay available instead of disappearing inside old chats or spreadsheets.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-brand-500/30 bg-gradient-to-r from-brand-700/25 via-slate-900 to-accent-500/10 p-7 sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">See it before you decide</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-white">Open the live demo and walk through the workflow yourself.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Explore the leave-management experience, then talk to us about adapting the workflow, policies and organization structure for your company.
            </p>
          </div>

          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
            <a
              href="https://leave-managment-mock-data.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-500"
            >
              Launch Live Demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/60 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-brand-400"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
